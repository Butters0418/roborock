import tw, { styled } from 'twin.macro';

// Products 外層
export const SProducts = styled.div`
  ${tw`bg-black relative overflow-hidden`}
`;

// Products 格線
export const SContainer = styled.div`
  ${tw`relative z-20 mx-auto mt-[30px] grid grid-cols-2 gap-2 px-2`}
  ${tw`md:(mt-[70px] max-w-[660px] gap-3)`}
  ${tw`xl:(mt-[90px] max-w-[780px] gap-x-4 gap-y-5)`}
`;

// Products 卡片
export const SCard = styled.a`
  ${tw`rounded-xl border-4 border-solid border-white bg-white p-1 text-center duration-300`}
  ${tw`md:(rounded-[30px] border-[10px])`}
  ${tw`xl:(p-[12px])`}
  &:hover {
    ${tw`border-[#B0FB50]`}
    .btn span {
      ${tw`bg-white`}
    }
  }
`;

// Products 文字區
export const STextContent = styled.div`
  ${tw`mt-2`}
  ${tw`md:mt-3`}
  ${tw`xl:mt-5`}
  h3 {
    ${tw`line-clamp-1 text-sm font-bold`}
    ${tw`md:text-xl`}
    ${tw`xl:text-2xl`}
  }
`;

// Products 價格
export const SPdPrice = styled.h5`
  ${tw`mt-2 flex items-end justify-center text-xl font-bold leading-none text-[#FF0000]`}
  ${tw`md:(mt-2 text-[32px])`}
  ${tw`xl:(mt-3 text-[38px])`}
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

// Products 按鈕
export const SBtn = styled.p`
  span {
    ${tw`mt-2 inline-flex items-center justify-center rounded-[28px] border-4 border-solid border-[#B0FB50] bg-[#B0FB50] px-3 py-1 text-xs font-bold duration-300`}
    ${tw`md:(mt-3 border-[5px] px-3 py-1 text-sm)`}
    ${tw`xl:(mt-5 px-5 py-2 text-base)`}
  }
`;
