// react
import { useRef, useState } from 'react';

// custom hooks
import useTitleAnimation from '../../hooks/useTitleAnimation';

// slick
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// images
import {
  titleTextYoutuberText,
  youtuberYt01,
  youtuberYt02,
  youtuberYt03,
  youtuberYt04,
  youtuberYt05,
  youtuberArrowLeft,
  youtuberArrowRight,
} from '../../assets/layout';

// styles - 共用
import { SSectionTitle } from '../style';
// styles - 自用
import {
  SYoutuber,
  SYoutuberSectionContainer,
  SYoutuberPhoto,
  SRotateBlock,
  SContentGrid,
  SSliderRight,
  SSliderContent,
  SArrowBtn,
  SArrowWrap,
} from './style';

const youtuberData = [
  {
    img: youtuberYt04,
    name: '塔柯女子',
    text: '【開箱評測】石頭掃地機器人 S8 Pro Ultra：<br/>10 合 1 全自動清潔座真正解放雙手',
  },
  {
    img: youtuberYt05,
    name: '蘋果仁',
    text: 'Roborock 石頭掃地機器人 S8 Pro Ultra 開箱：10 合 1 全自動清潔座，自動上下水/洗拖布/集塵/烘乾/補清潔液，還有業界獨家靜音純拖地 !',
  },
  {
    img: youtuberYt01,
    name: '雲爸',
    text: '下單 S8 掃地機器人系列，<br/>舊機換新機最⾼返再還現⾦3000元！',
  },
  {
    img: youtuberYt02,
    name: '硬是要學',
    text: '由樂視達集團總代理的 S8 Pro Ultra ⾸購活動，<br/>4/11 於各⼤通路搶先開賣囉！',
  },
  {
    img: youtuberYt03,
    name: '阿湯',
    text: 'Roborock 石頭科技 S8 Pro Ultra 嶄新登場，最接近完美的掃地機器人 10 合 1 全自動清潔座、五大清潔效能提升，就放手交給它吧！',
  },
];

function Youtuber() {
  const textBg = useTitleAnimation();

  // slick nav refs
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const slider1Ref = useRef(null);
  const slider2Ref = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const next = () => {
    slider1Ref.current?.slickNext();
  };

  const previous = () => {
    slider1Ref.current?.slickPrev();
  };

  // slider1 設定 (照片)
  const slider1Settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    speed: 2000,
    swipe: false,
    asNavFor: nav2,
    beforeChange: (current, next) => setActiveSlide(next),
  };

  // slider2 設定 (文字)
  const slider2Settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    infinite: true,
    swipe: true,
    asNavFor: nav1,
  };

  return (
    <SYoutuber>
      <SYoutuberSectionContainer>
        {/* title */}
        <SSectionTitle>
          <h3>名人好評</h3>
          <p ref={textBg}>
            <img src={titleTextYoutuberText} alt="名人好評" />
          </p>
        </SSectionTitle>
      </SYoutuberSectionContainer>

      {/* content */}
      <SContentGrid>
        {/* left */}
        <SYoutuberPhoto>
          <SRotateBlock>
            {/* list 1 */}
            <div className="relative -right-[12.5%] z-[10] -mb-4 grid grid-cols-4 gap-2 md:gap-4">
              <img src={youtuberYt01} alt="雲爸" />
              <img src={youtuberYt04} alt="塔柯女子" />
              <img src={youtuberYt03} alt="阿湯" />
              <img src={youtuberYt05} alt="蘋果仁" />
            </div>
            {/* list 2 - slider */}
            <div className="pointer-events-none relative z-20">
              <Slider
                {...slider1Settings}
                ref={(slider) => {
                  slider1Ref.current = slider;
                  setNav1(slider);
                }}
              >
                {youtuberData.map((item, index, ary) => {
                  const realIndex =
                    index < 2 ? index - 2 + ary.length : index - 2;
                  return (
                    <div key={index}>
                      <div className="px-2 py-5 md:px-3 md:py-8">
                        <img
                          src={item.img}
                          alt={item.name}
                          className={`duration-700 ${
                            activeSlide === realIndex
                              ? 'scale-[115%] shadow-lg'
                              : ''
                          }`}
                        />
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
            {/* list 3 */}
            <div className="relative -right-[12.5%] z-10 -mt-5 grid grid-cols-4 gap-2 md:gap-4">
              <img src={youtuberYt05} alt="蘋果仁" />
              <img src={youtuberYt01} alt="雲爸" />
              <img src={youtuberYt02} alt="硬是要學" />
              <img src={youtuberYt01} alt="雲爸" />
            </div>
          </SRotateBlock>
        </SYoutuberPhoto>

        {/* right */}
        <SSliderRight>
          <SSliderContent>
            <Slider
              {...slider2Settings}
              ref={(slider) => {
                slider2Ref.current = slider;
                setNav2(slider);
              }}
            >
              {youtuberData.map((item, index) => {
                return (
                  <div key={index}>
                    <h3>{item.name}</h3>
                    <p dangerouslySetInnerHTML={{ __html: item.text }}></p>
                  </div>
                );
              })}
            </Slider>
            <SArrowWrap>
              <SArrowBtn onClick={previous}>
                <img src={youtuberArrowLeft} alt="prev" />
              </SArrowBtn>
              <SArrowBtn onClick={next}>
                <img src={youtuberArrowRight} alt="next" />
              </SArrowBtn>
            </SArrowWrap>
          </SSliderContent>
        </SSliderRight>
      </SContentGrid>
    </SYoutuber>
  );
}
export default Youtuber;
