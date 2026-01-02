// react
import { useState, useEffect, useRef } from 'react';

// gsap
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// stores
import { useLaLaStore1 } from '../../stores/useLaLaStore';

// custom hooks & utils
import useTitleAnimation from '../../hooks/useTitleAnimation';
import getDataById from '../../utils/getDataById';
import useWindowWidth from '../../hooks/useWindowWidth';

// images
import { titleTextSection5Text } from '../../assets/layout';

// styles - 共用
import { SSectionContainer, SSectionTitle } from '../style';
// styles - 自用
import {
  SActive,
  SActiveGrid,
  SActiveLink,
  SActiveBgR,
  SActiveBgL,
} from './style';

gsap.registerPlugin(ScrollTrigger);

function Active() {
  const textBg = useTitleAnimation();
  const windowWidth = useWindowWidth();
  const active = useRef(null);

  // store data
  const newPdData = useLaLaStore1((state) => state.newPdData);
  const [activeData, setActiveData] = useState([]);

  useEffect(() => {
    const idData = getDataById(newPdData, 64);
    idData.length !== 0 && setActiveData(idData);
  }, [newPdData]);

  // GSAP 背景動畫（PC)
  useGSAP(
    () => {
      if (windowWidth > 766) {
        const tlBg = gsap.timeline({
          scrollTrigger: {
            trigger: active.current,
            start: 'top 30%',
          },
        });
        tlBg.to('.active-bgr', {
          duration: 1,
          backgroundPosition: '0px 0px',
          ease: 'power3.out',
        });
        tlBg.to(
          '.active-bgl',
          {
            duration: 1,
            backgroundPosition: '0px 0px',
            ease: 'power3.out',
          },
          0.2,
        );
      }
    },
    { dependencies: [windowWidth], scope: active },
  );

  return (
    <SActive ref={active}>
      <SSectionContainer>
        {/* title */}
        <SSectionTitle>
          <h3>登記抽好禮</h3>
          <p ref={textBg}>
            <img src={titleTextSection5Text} alt="登記抽好禮" />
          </p>
        </SSectionTitle>

        {/* content */}
        <SActiveGrid>
          {activeData.length > 0 &&
            activeData.map((item, index) => (
              <SActiveLink href={item.url} key={index}>
                <img src={item.imgSrc} alt={item.productName} />
              </SActiveLink>
            ))}
        </SActiveGrid>
      </SSectionContainer>

      {/* 背景 */}
      <SActiveBgL className="active-bgl" />
      <SActiveBgR className="active-bgr" />
    </SActive>
  );
}

export default Active;
