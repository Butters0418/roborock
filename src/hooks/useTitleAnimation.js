// 元件說明: 標題文字視差滾動動畫
import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

function useTitleAnimation() {
  const textBg = useRef(null);

  useGSAP(() => {
    if (!textBg.current) return;

    const animation = gsap.to(textBg.current, {
      scrollTrigger: {
        trigger: textBg.current,
        scrub: 1,
      },
      duration: 1,
      yPercent: -50,
    });

    return () => {
      animation.kill();
    };
  }, []);

  return textBg;
}

export default useTitleAnimation;
