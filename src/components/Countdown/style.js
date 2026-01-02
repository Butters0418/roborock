import tw, { styled } from 'twin.macro';

// Countdown 外層
export const SCountdownWrap = styled.div`
  ${tw`relative z-10 px-7 py-[30px]`}
  ${tw`md:(px-0 py-[50px])`}
  ${tw`xl:py-[70px]`}
`;

// 大標題
export const SCountdownTitle = styled.h3`
  ${tw`container mx-auto text-center text-[4vw] font-bold leading-normal`}
  ${tw`md:text-3xl`}
  ${tw`lg:text-4xl`}
`;

// 內容區塊
export const SCountdownContent = styled.div`
  ${tw`mx-auto text-center`}
  ${tw`md:max-w-[520px]`}
  ${tw`xl:max-w-[620px]`}
  
  p {
    ${tw`mt-0 text-sm text-[#8A8A8A]`}
    ${tw`md:(mt-1 text-xl)`}
  }
`;

// 時間格子容器
export const SCountdownGrid = styled.div`
  ${tw`mt-3 grid grid-cols-4 gap-x-3`}
  ${tw`sm:gap-x-6`}
  ${tw`md:mt-5`}
`;

// 單一時間單位容器
export const STimeUnit = styled.div`
  ${tw`relative`}
`;

// 時間單位中心內容
export const STimeUnitCenter = styled.div`
  ${tw`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}

  h3 {
    ${tw`text-[20px] font-bold leading-tight`}
    ${tw`sm:text-[30px]`}
    ${tw`md:text-[36px]`}
  }

  p {
    ${tw`text-[12px] font-normal leading-none`}
    ${tw`md:text-[18px]`}
  }
`;

// 時鐘 SVG 樣式
export const STimeSvg = styled.svg`
  ${tw`block h-full w-full -rotate-90`}

  circle {
    transition: stroke-dashoffset 1s linear;
    stroke: #d9d9d9;
    stroke-width: 24px;
  }

  circle.bar {
    stroke: #000000;
  }
`;
