import tw, { styled } from 'twin.macro';

// Bank 外層
export const SBank = styled.div`
  ${tw`relative overflow-hidden bg-[#f3f3f3]`}
`;

// Bank 格線
export const SBankGrid = styled.div`
  ${tw`relative z-30 mx-auto mt-[30px] grid max-w-[570px] grid-cols-3 gap-2 px-8`}
  ${tw`sm:(gap-3 px-3)`}
  ${tw`md:(mt-[70px] max-w-none gap-4 px-4)`}
  ${tw`xl:mt-[90px]`}
`;

// Bank 連結卡片
export const SBankLink = styled.a`
  ${tw`col-span-3 duration-300`}
  ${tw`md:col-span-1`}
  &:hover {
    ${tw`-translate-y-1 brightness-105`}
  }
`;
