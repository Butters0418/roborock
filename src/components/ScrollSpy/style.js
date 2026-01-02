import tw, { styled } from 'twin.macro';

export const SScrollSpy = styled.div`
  ${tw`sticky top-0 z-50 overflow-scroll bg-white bg-opacity-90 shadow-sm h-9`}
  ${tw`md:h-12`}
`;

export const SScrollSpyUl = styled.ul`
  ${tw`flex max-w-[1100px] mx-auto`}
`;

export const SScrollSpyLink = styled.li`
  ${tw`flex-[100px] shrink-0 p-1`}
  button {
    ${tw`w-full rounded-md py-1 text-center text-sm font-bold`}
    ${tw`md:text-lg`}
  }
`;
