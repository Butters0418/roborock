import tw, { styled } from 'twin.macro';

// scroll section
export const SScrollSection = styled.div`
  ${tw`relative flex h-screen overflow-hidden`}
`;

// 基礎 gate style
const GateBase = styled.div`
  ${tw`absolute flex h-1/2 w-full items-center justify-center`}
  ${tw`lg:h-full lg:w-1/2`}

  h3 {
    ${tw`text-3xl font-bold`}
    ${tw`md:text-5xl`}
    ${tw`xl:text-7xl`}
  }

  p {
    ${tw`mt-6 w-4/5 text-center text-lg font-bold leading-snug`}
    ${tw`md:mt-12 md:w-2/3 md:text-2xl`}
    ${tw`lg:w-1/2 lg:text-left`}
    ${tw`xl:w-2/5 xl:text-4xl`}
  }

  video {
    ${tw`h-full w-full object-cover`}
  }
`;

// Gate 內容區塊
export const SGateContent = styled.div`
  ${tw`flex flex-col items-center justify-center`}
`;

// Video mask
export const SVideoMask = styled.div`
  ${tw`absolute left-0 top-0 z-10 h-full w-full bg-black opacity-0`}
`;

// 左1 - 字
export const SGateLeft1 = styled(GateBase)`
  ${tw`bottom-0 left-0 z-10 translate-x-full bg-slate-200`}
  ${tw`lg:translate-x-0 lg:translate-y-full`}
`;

// 右1 - 影
export const SGateRight1 = styled(GateBase)`
  ${tw`bottom-0 right-auto top-0 z-10`}
  ${tw`lg:right-0`}
`;

// 左2 - 影
export const SGateLeft2 = styled(GateBase)`
  ${tw`left-0 top-0 z-20 translate-x-full`}
  ${tw`lg:-translate-y-full lg:translate-x-0`}
`;

// 右2 - 字
export const SGateRight2 = styled(GateBase)`
  ${tw`bottom-0 right-0 z-20 -translate-x-full bg-black`}
  ${tw`lg:translate-x-0 lg:translate-y-full`}

  h3, p {
    ${tw`text-white`}
  }
`;

// 左3 - 字
export const SGateLeft3 = styled(GateBase)`
  ${tw`bottom-0 left-0 z-30 translate-x-full bg-slate-200`}
  ${tw`lg:translate-x-0 lg:translate-y-full`}
`;

// 右3 - 影
export const SGateRight3 = styled(GateBase)`
  ${tw`right-0 top-0 z-30 -translate-x-full`}
  ${tw`lg:-translate-y-full lg:translate-x-0`}
`;

// 左4 - 影
export const SGateLeft4 = styled(GateBase)`
  ${tw`left-0 top-0 z-40 translate-x-full`}
  ${tw`lg:-translate-y-full lg:translate-x-0`}
`;

// 右4 - 字
export const SGateRight4 = styled(GateBase)`
  ${tw`bottom-0 right-0 z-40 -translate-x-full bg-black`}
  ${tw`lg:translate-x-0 lg:translate-y-full`}

  h3, p {
    ${tw`text-white`}
  }
`;

// Video PD (中央產品圖)
export const SVideoPd = styled.div`
  ${tw`absolute left-1/2 top-1/2 z-50 w-[30%] max-w-[520px] -translate-x-1/2 -translate-y-1/2`}
  ${tw`md:w-1/5`}
`;
