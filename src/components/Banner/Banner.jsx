// react 相關
import { useState, useEffect } from 'react';

// components
import Countdown from '../Countdown/Countdown';

// stores
import { useLaLaStore1 } from '../../stores/useLaLaStore';

// custom hooks & utils
import getDataById from '../../utils/getDataById';

// assets
import {
  kvKvAnimate,
  kvLogo,
  kvPd,
  kvElla,
  kvEllaMb,
  kvVoiceIcon,
} from '../../assets/layout';

// styles
import {
  SBannerWrap,
  SBannerSvg,
  SBannerContainer,
  SBannerLeft,
  SBannerTitle,
  SBannerCounter,
  SBannerCounterMain,
  SBannerCounterText,
  SBannerRight,
  SBannerMessage,
  STimeSvg,
} from './style';

// 目標值
const target = 500000;

// animate time(毫秒)
const aniTime = 2000;

// 目前已募集數字動畫次數
const totalAniFrame = 40;

// 數字每次跳動秒數
const perAniTime = Math.floor(aniTime / totalAniFrame);

function Banner() {
  const newPdData = useLaLaStore1((state) => state.newPdData);
  const [totalData, setTotalData] = useState(0); // 目前金額
  const [percent, setPercent] = useState(0); // 目前%數
  const [dashoffset, setDashoffset] = useState(0); // svg 邊框

  useEffect(() => {
    // 跑條動畫
    function drawSvg() {
      const nowTotal = parseInt(pdData[0].discountPrice); // 目前金額(number)
      // const nowTotal = 510000;

      const nowPercent = Math.floor((nowTotal / target) * 100); // % 數整除四捨五入
      const nowStrokeNum = nowPercent >= 100 ? 565 : 550 * (nowPercent / 100);

      // 金額動畫設定
      const incrementAmount = Math.floor(nowTotal / totalAniFrame); // 每次增加的金額
      let currentFrame = 0;
      let currentAmount = 0;

      // 金額動畫
      const totalTimer = setInterval(() => {
        currentFrame++;

        if (currentFrame < totalAniFrame) {
          currentAmount += incrementAmount;
          setTotalData(currentAmount.toLocaleString());
        } else {
          // 最後一次加上餘數
          setTotalData(nowTotal.toLocaleString());
          clearInterval(totalTimer);
        }
      }, perAniTime);

      // 百分比動畫
      setDashoffset(nowStrokeNum);

      let currentPercent = 0;
      const percentTimer = setInterval(() => {
        if (currentPercent >= nowPercent) {
          setPercent(nowPercent);
          clearInterval(percentTimer);
        } else {
          currentPercent++;
          setPercent(currentPercent);
        }
      }, 10);

      // 清除 interval
      return () => {
        clearInterval(totalTimer);
        clearInterval(percentTimer);
      };
    }

    const pdData = getDataById(newPdData, 31);
    pdData.length !== 0 && drawSvg();
  }, [newPdData]);

  return (
    <SBannerWrap>
      <SBannerContainer>
        <SBannerLeft>
          <SBannerTitle>
            <img src={kvLogo} alt="S8 PRO Ultra" />
            <h4 className="title">嶄新上市</h4>
            <p className="sub-title">全場優惠7折起</p>
            <p className="mt-0 font-bold text-[#EC0927] md:mt-1 md:text-xl lg:text-[26px]">
              PChome再享獨家好康
            </p>
          </SBannerTitle>
          <SBannerCounter>
            <SBannerCounterMain>
              <div className="time-circle">
                <STimeSvg
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    r="88"
                    cx="100"
                    cy="100"
                    fill="transparent"
                    stroke="black"
                    strokeDasharray="565"
                    strokeDashoffset="0"
                  ></circle>
                  <circle
                    className="bar"
                    r="88"
                    cx="100"
                    cy="100"
                    fill="transparent"
                    strokeDasharray="565"
                    strokeDashoffset={565 - dashoffset}
                  ></circle>
                </STimeSvg>
              </div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <p className="text-[12px] font-normal leading-none text-[#9F9F9F] md:text-[18px]">
                  {percent}%
                </p>
              </div>
            </SBannerCounterMain>

            <SBannerCounterText>
              <p>累積銷售金額</p>
              <h3>NT${totalData}</h3>
              <h4>目標NT${target.toLocaleString()}</h4>
            </SBannerCounterText>
          </SBannerCounter>
        </SBannerLeft>
        <SBannerRight>
          <div className="kvPd">
            <img src={kvPd} alt="S8 PRO ULtra" />
          </div>
          <picture className="ella">
            <source srcSet={kvElla} media="(min-width: 767px)" />
            <img src={kvEllaMb} alt="Ella" />
          </picture>
        </SBannerRight>
      </SBannerContainer>
      <SBannerMessage>
        <img src={kvVoiceIcon} alt="voice" />
        <p>S8系列指定品贈德國雙人廚具組</p>
      </SBannerMessage>
      <Countdown />
      {/* 背景svg */}
      <SBannerSvg src={kvKvAnimate} alt="banner animation" />
    </SBannerWrap>
  );
}

export default Banner;
