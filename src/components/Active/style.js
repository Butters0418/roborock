import tw, { styled } from 'twin.macro';

// Active 外層
export const SActive = styled.div`
  ${tw`relative overflow-hidden bg-white`}
`;

// Active 格線
export const SActiveGrid = styled.div`
  ${tw`relative z-30 mx-auto mt-[30px] grid max-w-[570px] grid-cols-2 gap-2 px-2`}
  ${tw`sm:(gap-3 px-3)`}
  ${tw`md:(mt-[70px] max-w-none gap-4 px-4)`}
  ${tw`xl:mt-[90px]`}
`;

// Active 連結卡片
export const SActiveLink = styled.a`
  ${tw`col-span-2 duration-300`}
  ${tw`md:col-span-1`}
  &:hover {
    ${tw`-translate-y-1 brightness-105`}
  }
`;

// Active 背景右側
export const SActiveBgR = styled.div`
  ${tw`absolute -top-[40%] left-1/2 z-[10] hidden h-[150%] bg-black bg-contain bg-no-repeat`}
  ${tw`md:(block w-[1200px] translate-x-[200px] bg-[800px_-1000px])`}
  ${tw`xl:(w-[1500px] translate-x-[400px] bg-[1000px_-1200px])`}
  background-image: url('/src/assets/layout/active/mask-rbg.png');
  mask: url('/src/assets/layout/active/mask-r.png') no-repeat;
  mask-size: contain;
  mask-position: 0 0;
`;

// Active 背景左側
export const SActiveBgL = styled.div`
  ${tw`absolute -top-[40%] left-1/2 z-[10] hidden h-[150%] bg-black bg-contain bg-no-repeat`}
  ${tw`md:(block w-[1000px] -translate-x-[1100px] bg-[-700px_900px])`}
  ${tw`xl:(w-[1200px] -translate-x-[1400px] bg-[-800px_1000px])`}
  background-image: url('/src/assets/layout/active/mask-lbg.png');
  mask: url('/src/assets/layout/active/mask-l.png') no-repeat;
  mask-size: contain;
  mask-position: 0 0;
`;
