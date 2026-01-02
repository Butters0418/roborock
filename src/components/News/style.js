import tw, { styled } from 'twin.macro';

// News 外層
export const SNews = styled.div`
  ${tw`relative overflow-hidden bg-[#f3f3f3]`}
`;

// News 內容區
export const SNewsContent = styled.div`
  ${tw`relative z-30 mt-[30px] px-2`}
  ${tw`sm:px-3`}
  ${tw`md:(mt-[70px] px-4)`}
  ${tw`xl:mt-[90px]`}
`;

// News 項目
export const SNewsItem = styled.div`
  ${tw`border-b py-4 px-2`}
  ${tw`md:(py-[36px] pl-[30px])`}
  ${tw`xl:py-[42px]`}
  &:first-of-type {
    ${tw`border-t`}
  }
`;

// News 連結
export const SNewsLink = styled.a`
  ${tw`block justify-between border-[#D9D9D9] duration-300`}
  ${tw`md:flex`}
  &:hover {
    ${tw`text-[#767676]`}
  }
`;

// News 文字
export const SNewsText = styled.div`
  ${tw`w-full text-left text-base font-bold line-clamp-2`}
  ${tw`md:(w-3/4 text-xl line-clamp-1)`}
`;

// News 來源
export const SNewsSource = styled.div`
  ${tw`mt-3 whitespace-nowrap text-left text-sm`}
  ${tw`md:(mt-0 text-right text-base)`}
`;
