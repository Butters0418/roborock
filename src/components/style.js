import tw, { styled } from 'twin.macro';

// ============ 共用 Section 版身 ============
export const SSectionContainer = styled.div`
  ${tw`relative z-20 mx-auto py-[40px] text-center`}
  ${tw`md:(max-w-[900px] py-[60px])`}
  ${tw`xl:(max-w-[1100px] py-[80px])`}
`;

// ============ 共用 Section 標題 ============
export const SSectionTitle = styled.div`
  ${tw`relative text-xl font-bold`}
  ${tw`md:text-3xl`}
  ${tw`xl:text-[40px]`}
  h3 {
    ${tw`relative z-20`}
  }
  p {
    ${tw`absolute left-1/2 top-1/2 z-10 w-[150%] -translate-x-1/2 -translate-y-1/2`}
    ${tw`md:w-full`}
  }
`;
