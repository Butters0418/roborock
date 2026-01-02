// react
import { useRef } from 'react';

// gsap
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// images
import {
  videoPd,
  videoPdwebp,
  videoVideoPlace1,
  videoVideoPlace2,
  videoVideoPlace3,
  videoVideoPlace4,
} from '../../assets/layout';

// video sources
import video1 from '../../assets/video/video1.mp4';
import video2 from '../../assets/video/video2.mp4';
import video3 from '../../assets/video/video3.mp4';
import video4 from '../../assets/video/video4.mp4';

// styles
import {
  SScrollSection,
  SGateLeft1,
  SGateRight1,
  SGateLeft2,
  SGateRight2,
  SGateLeft3,
  SGateRight3,
  SGateLeft4,
  SGateRight4,
  SVideoMask,
  SVideoPd,
  SGateContent,
} from './style';

// register plugins
gsap.registerPlugin(useGSAP, ScrollTrigger);

function Advantages() {
  const container = useRef(null);
  const scrollVideo1 = useRef(null);
  const scrollVideo2 = useRef(null);
  const scrollVideo3 = useRef(null);
  const scrollVideo4 = useRef(null);

  useGSAP(
    () => {
      const section2Tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: 'top top',
          pin: true,
          end: () => '+=' + window.innerHeight * 5,
          scrub: 1,
          // markers: true,
          // invalidateOnRefresh: true,
        },
      });

      section2Tl.to('.gate-left-1', {
        y: 0,
        x: 0,
        duration: 2,
        onStart: () => {
          scrollVideo1.current?.play();
        },
        onReverseComplete: () => {
          scrollVideo1.current?.pause();
        },
      });
      section2Tl.from(
        '.video-pd',
        { duration: 1, xPercent: 20, opacity: 0 },
        '<',
      );
      section2Tl.from(
        '.gate-left-1 h3',
        { duration: 1, xPercent: -20, opacity: 0 },
        '-=0.5',
      );
      section2Tl.from(
        '.gate-left-1 p',
        { duration: 1, yPercent: 20, opacity: 0 },
        '-=0.6',
      );
      // scene 2
      section2Tl.to(
        '.gate-left-2',
        {
          duration: 2,
          y: 0,
          x: 0,
          onComplete: () => {
            scrollVideo1.current?.pause();
            scrollVideo2.current?.play();
          },
          onReverseComplete: () => {
            scrollVideo2.current?.pause();
            scrollVideo1.current?.play();
          },
        },
        '+=1',
      );
      section2Tl.to(
        '.gate-right-1 .video-mask',
        { duration: 1, opacity: 1 },
        '<',
      );
      section2Tl.to('.gate-right-2', { y: 0, x: 0, duration: 1 });
      section2Tl.from(
        '.gate-right-2 h3',
        { duration: 1, xPercent: -20, opacity: 0 },
        '-=0.5',
      );
      section2Tl.from(
        '.gate-right-2 p',
        { duration: 1, yPercent: 20, opacity: 0 },
        '-=0.6',
      );
      // scene 3
      section2Tl.to(
        '.gate-right-3',
        {
          y: 0,
          x: 0,
          duration: 2,
          onComplete: () => {
            scrollVideo2.current?.pause();
            scrollVideo3.current?.play();
          },
          onReverseComplete: () => {
            scrollVideo3.current?.pause();
            scrollVideo2.current?.play();
          },
        },
        '+=1',
      );
      section2Tl.to(
        '.gate-left-2 .video-mask',
        { duration: 1, opacity: 1 },
        '<',
      );
      section2Tl.to('.gate-left-3', { duration: 1, y: 0, x: 0 });
      section2Tl.from(
        '.gate-left-3 h3',
        { duration: 1, xPercent: 20, opacity: 0 },
        '-=0.5',
      );
      section2Tl.from(
        '.gate-left-3 p',
        { duration: 1, yPercent: 20, opacity: 0 },
        '-=0.6',
      );
      // scene 4
      section2Tl.to(
        '.gate-left-4',
        {
          duration: 2,
          y: 0,
          x: 0,
          onComplete: () => {
            scrollVideo3.current?.pause();
            scrollVideo4.current?.play();
          },
          onReverseComplete: () => {
            scrollVideo4.current?.pause();
            scrollVideo3.current?.play();
          },
        },
        '+=1',
      );
      section2Tl.to(
        '.gate-right-3 .video-mask',
        { duration: 1, opacity: 1 },
        '<',
      );
      section2Tl.to('.gate-right-4', { y: 0, x: 0, duration: 1 });
      section2Tl.from(
        '.gate-right-4 h3',
        { duration: 0.5, xPercent: -20, opacity: 0 },
        '-=0.5',
      );
      section2Tl.from(
        '.gate-right-4 p',
        { duration: 0.5, yPercent: 20, opacity: 0 },
        '-=0.6',
      );
    },
    { scope: container },
  );

  return (
    <SScrollSection ref={container}>
      {/* 左1 */}
      <SGateLeft1 className="gate gate-left-1">
        <SGateContent>
          <h3>自動集塵</h3>
          <p>
            每次清潔後自動清空垃圾,最多可使用7週,無需更換塵袋,雙刷自動清潔,易於維護。
          </p>
        </SGateContent>
      </SGateLeft1>
      {/* 右1 */}
      <SGateRight1 className="gate gate-right-1">
        <SVideoMask className="video-mask" />
        <video
          muted
          loop
          playsInline
          ref={scrollVideo1}
          poster={videoVideoPlace1}
        >
          <source src={video1} type="video/mp4" />
        </video>
      </SGateRight1>

      {/* 左2 */}
      <SGateLeft2 className="gate gate-left-2">
        <SVideoMask className="video-mask" />
        <video
          muted
          loop
          playsInline
          ref={scrollVideo2}
          poster={videoVideoPlace2}
        >
          <source src={video2} type="video/mp4" />
        </video>
      </SGateLeft2>
      {/* 右2 */}
      <SGateRight2 className="gate gate-right-2">
        <SGateContent>
          <h3>自動烘乾</h3>
          <p>用熱風烘乾洗過的拖布和充電座底部,以防止難聞的氣味。</p>
        </SGateContent>
      </SGateRight2>

      {/* 左3 */}
      <SGateLeft3 className="gate gate-left-3">
        <SGateContent>
          <h3>自動補水</h3>
          <p>在清潔期間為機器人水箱補水,最大拖地範圍超過300平方公尺。</p>
        </SGateContent>
      </SGateLeft3>
      {/* 右3 */}
      <SGateRight3 className="gate gate-right-3">
        <SVideoMask className="video-mask" />
        <video
          muted
          loop
          playsInline
          ref={scrollVideo3}
          poster={videoVideoPlace3}
        >
          <source src={video3} type="video/mp4" />
        </video>
      </SGateRight3>

      {/* 左4 */}
      <SGateLeft4 className="gate gate-left-4">
        <SVideoMask className="video-mask" />
        <video
          muted
          loop
          playsInline
          ref={scrollVideo4}
          poster={videoVideoPlace4}
        >
          <source src={video4} type="video/mp4" />
        </video>
      </SGateLeft4>
      {/* 右4 */}
      <SGateRight4 className="gate gate-right-4">
        <SGateContent>
          <h3>充電座自主清洗</h3>
          <p>
            自動清潔設計可清潔充電座底部,使其更易於維護,從而為您解放更多寶貴時間。
          </p>
        </SGateContent>
      </SGateRight4>

      <SVideoPd>
        <picture>
          <source srcSet={videoPdwebp} type="image/webp" />
          <img src={videoPd} alt="S8 Pro Ultra" className="video-pd" />
        </picture>
      </SVideoPd>
    </SScrollSection>
  );
}

export default Advantages;
