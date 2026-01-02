// react
import { useState, useEffect, useCallback, useRef } from 'react';

// packages
import { useThrottle } from '@uidotdev/usehooks';

// custom hooks & utils
import scrollToElement from '../../utils/scrollToElement';
import useWindowScroll from '../../hooks/useWindowScroll';

// styles
import { SScrollSpy, SScrollSpyUl, SScrollSpyLink } from './style';

function ScrollSpy() {
  const [hashContainer, setHashContainer] = useState([]); // 所有含 data-title 屬性之 dom
  const [currentContainer, setCurrentContainer] = useState(null); // 目前作用中的 dom
  const ulRef = useRef(null); // 選單本身
  const scroll = useWindowScroll();
  const throttleScroll = useThrottle(scroll, 80);

  // 取得所有 data-title 作為錨點
  const updateHashContainer = useCallback(() => {
    const allContainer = [...document.querySelectorAll('[data-title]')];
    setHashContainer(allContainer);
  }, []);

  // dom observer
  useEffect(() => {
    let observer;
    // init
    const timerInitialUpdate = setTimeout(() => {
      updateHashContainer();
      observer = new MutationObserver(() => {
        updateHashContainer();
      });

      const config = { childList: true, subtree: true };
      observer.observe(document.body, config);

      // 僅監聽前 2 秒
      const timerDisconnect = setTimeout(() => {
        observer.disconnect();
      }, 2000);
      return () => clearTimeout(timerDisconnect);
    }, 500);

    // 清理初始化的計時器和 observer
    return () => {
      clearTimeout(timerInitialUpdate);
      if (observer) observer.disconnect();
    };
  }, [updateHashContainer]);

  // 滾動監聽作用中的區塊
  useEffect(() => {
    const targetContainer = hashContainer.find((item) => {
      return (
        item.getBoundingClientRect().top < 200 &&
        item.getBoundingClientRect().bottom > 200
      );
    });
    if (targetContainer?.id !== currentContainer) {
      setCurrentContainer(targetContainer?.id || null);
    }
  }, [throttleScroll, hashContainer, currentContainer]);

  // 自動滾動到當前項目
  useEffect(() => {
    const currentNav = [...document.querySelectorAll('[data-scrollspy]')].find(
      (item) => {
        return currentContainer === item.dataset.scrollspy;
      },
    );
    if (currentNav !== undefined && ulRef.current) {
      ulRef.current.scrollLeft = currentNav.offsetLeft;
    }
  }, [currentContainer]);

  return (
    <SScrollSpy className="no-scrollbar" ref={ulRef}>
      <SScrollSpyUl>
        {hashContainer.map((item) => {
          return (
            <SScrollSpyLink key={item.id} data-scrollspy={item.id}>
              <button
                className={` ${
                  currentContainer === item.id
                    ? 'bg-[#222] text-white duration-100'
                    : ''
                }`}
                onClick={() => {
                  scrollToElement(item.id);
                }}
              >
                {item.dataset.title}
              </button>
            </SScrollSpyLink>
          );
        })}
      </SScrollSpyUl>
    </SScrollSpy>
  );
}

export default ScrollSpy;
