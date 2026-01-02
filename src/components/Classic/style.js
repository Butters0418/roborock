import tw, { styled } from 'twin.macro';

// Classic 外層
export const SClassic = styled.div`
  ${tw`relative overflow-hidden bg-black`}
`;

// Classic 格線
export const SClassicGrid = styled.div`
  ${tw`relative z-30 mx-auto mt-[30px] grid max-w-[570px] grid-cols-12 gap-2 px-2`}
  ${tw`sm:px-3`}
  ${tw`md:(mt-[70px] max-w-none gap-4 px-4)`}
  ${tw`xl:mt-[90px]`}
`;

// Classic 大圖
export const SGetp = styled.div`
  ${tw`col-span-12 mb-3 overflow-hidden rounded-xl border-none p-0`}
  ${tw`md:mb-4`}
  ${tw`xl:(mb-6 rounded-[24px])`}
`;

// Classic 卡片
export const SCard = styled.a`
  ${tw`rounded-xl border-4 border-solid border-white bg-white p-1 text-center duration-300`}
  ${tw`md:(rounded-[18px] border-[6px] p-2)`}
  ${tw`xl:(rounded-[24px] p-3)`}
  &:hover {
    ${tw`border-[#B0FB50]`}
    .btn span {
      ${tw`bg-white`}
    }
  }
`;

// Classic 文字區
export const STextContent = styled.div`
  ${tw`mt-1`}
  ${tw`md:mt-2`}
  ${tw`xl:mt-5`}
  h3 {
    ${tw`line-clamp-1 text-sm font-bold`}
    ${tw`md:text-lg`}
    ${tw`xl:text-xl`}
  }
`;

// Classic 價格區
export const SPdPrice = styled.h5`
  ${tw`mt-1 flex items-end justify-center text-lg font-bold leading-none text-[#FF0000]`}
  ${tw`md:(mt-1 text-[24px])`}
  ${tw`xl:(mt-2 text-[32px])`}
  .price1 {
    ${tw`mr-1 text-xs font-medium text-[#9A9A9A] line-through`}
    ${tw`md:(mr-2 text-base)`}
  }
  .price2 {
    small {
      ${tw`text-xs`}
      ${tw`md:text-lg`}
    }
  }
  span.dollar,
  span.chi {
    ${tw`pr-0.5 text-[16px] leading-[140%]`}
  }
`;

// Classic 按鈕
export const SBtn = styled.p`
  span {
    ${tw`mt-2 inline-flex items-center justify-center rounded-[28px] border-4 border-solid border-[#B0FB50] bg-[#B0FB50] px-3 py-1 text-xs font-bold duration-300`}
    ${tw`md:(mt-2 border-[4px] px-3 py-1 text-base)`}
    ${tw`xl:(mt-3 px-4 py-1)`}
  }
`;

// Classic Logo 卡片
export const SLogoCard = styled.a`
  ${tw`col-span-6 flex items-center justify-center`}
  ${tw`md:(col-span-3 hidden)`}
`;
