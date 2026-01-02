import tw, { styled } from 'twin.macro';

// Banner 外層
export const SBannerWrap = styled.div`
  ${tw`relative overflow-hidden bg-[#F3F3F3]`}
`;

// Banner SVG 背景動畫
export const SBannerSvg = styled.img`
  ${tw`absolute left-1/2 top-0 z-[5] w-[220%] max-w-none -translate-x-1/2`}
  ${tw`md:w-[1580px]`}
  ${tw`lg:w-[2000px]`}
  ${tw`xl:w-[2600px]`}
`;

// Banner Container
export const SBannerContainer = styled.div`
  ${tw`relative z-10 mx-auto block overflow-hidden pb-2`}
  ${tw`md:(grid grid-cols-12 pb-0) lg:max-w-[1200px]`}
  ${tw`xl:max-w-[1500px]`}
`;

// Banner 左側
export const SBannerLeft = styled.div`
  ${tw`relative z-20 px-4 pt-5`}
  ${tw`md:(z-[5] col-span-7 px-0 pt-[4vw])`}
  ${tw`lg:(col-span-6 pb-[30px] pl-0 pt-[80px])`}
  ${tw`xl:(pb-[80px] pl-[100px] pt-[160px])`}
`;

// Banner Title 區塊
export const SBannerTitle = styled.div`
  ${tw`md:(w-[75%] px-6)`}
  ${tw`lg:(w-auto px-10)`}
  
  img {
    ${tw`w-1/2`}
    ${tw`md:w-auto`}
  }

  .title {
    ${tw`text-[30px] font-bold`}
    ${tw`md:text-3xl`}
    ${tw`lg:text-[42px]`}
  }

  .sub-title {
    ${tw`mt-0 text-sm`}
    ${tw`md:text-lg`}
    ${tw`lg:(mt-3 text-xl)`}
  }
`;

// Banner Counter 累計金額
export const SBannerCounter = styled.div`
  ${tw`mt-[43vw] flex justify-start gap-3 rounded-2xl bg-white bg-opacity-80 p-3`}
  ${tw`sm:(mt-[62vw] gap-6)`}
  ${tw`md:(mt-[1vw] gap-0 bg-transparent px-6 py-0)`}
  ${tw`lg:(mt-[50px] px-10)`}
  ${tw`xl:lg:mt-[70px]`}
`;

// Banner Counter 圓圈
export const SBannerCounterMain = styled.div`
  ${tw`relative flex w-[23%] flex-shrink-0 items-center justify-center`}
  ${tw`md:w-[112px]`}
  ${tw`xl:w-[137px]`}
`;

// Banner Counter 文字
export const SBannerCounterText = styled.div`
  ${tw`flex w-[77%] flex-col items-start justify-around`}
  ${tw`md:pl-4`}
  ${tw`lg:pl-[30px]`}
  
  p {
    ${tw`text-[4vw] leading-relaxed`}
    ${tw`sm:text-lg`}
    ${tw`lg:text-xl`}
  }

  h3 {
    ${tw`text-[7vw] font-bold text-[#3F3F3F]`}
    ${tw`sm:text-3xl`}
    ${tw`lg:text-5xl`}
  }

  h4 {
    ${tw`text-[4vw] leading-relaxed`}
    ${tw`sm:text-lg`}
    ${tw`lg:text-xl`}
  }
`;

// Banner 右側
export const SBannerRight = styled.div`
  ${tw`absolute left-0 top-0 z-[5] flex h-full w-full items-end justify-end`}
  ${tw`md:(relative z-20 col-span-5)`}
  ${tw`lg:col-span-6`}
  
  .kvPd {
    ${tw`absolute bottom-[22%] left-[5%] z-10 w-[43%]`}
    ${tw`md:(-left-[8vw] bottom-[2vw] w-2/3)`}
    ${tw`lg:(-left-[0px] bottom-[20px] max-w-[340px])`}
    ${tw`xl:(-left-[20px] bottom-[40px] max-w-[420px])`}
  }

  .ella {
    ${tw`relative z-20 w-full`}
    ${tw`md:w-2/3`}
    ${tw`lg:max-w-[340px]`}
    ${tw`xl:max-w-[450px]`}
  }
`;

// 圖示訊息列
export const SBannerMessage = styled.div`
  ${tw`relative z-10 mx-auto -mt-[1px] flex items-center justify-center rounded-none bg-black py-1 text-sm text-white`}
  ${tw`sm:py-2`}
  ${tw`md:py-3`}
  ${tw`lg:(max-w-[1250px] rounded-full text-xl)`}
  ${tw`xl:(max-w-[1800px] text-2xl)`}
  
  img {
    ${tw`mr-2 hidden w-3`}
    ${tw`md:(mr-3 block w-4)`}
    ${tw`lg:w-5`}
  }

  p {
    ${tw`text-center`}
  }
`;

// SVG
export const STimeSvg = styled.svg`
  ${tw`block h-full w-full -rotate-90`}

  circle {
    transition: stroke-dashoffset 1.8s linear;
    stroke: #d9d9d9;
    stroke-width: 24px;
  }

  circle.bar {
    stroke: #000000;
  }
`;
