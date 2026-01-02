import tw, { styled } from 'twin.macro';
import { SSectionContainer } from '../style';

// Youtuber 外層
export const SYoutuber = styled.div`
  ${tw`relative overflow-hidden bg-[#fdfdfd] pb-[50px]`}
  ${tw`md:pb-[80px]`}
  ${tw`xl:pb-[100px]`}
`;

// Youtuber section-container 覆寫 pb
export const SYoutuberSectionContainer = styled(SSectionContainer)`
  ${tw`!pb-0`}
`;

// Youtuber 左側照片區
export const SYoutuberPhoto = styled.div`
  ${tw`relative col-span-3 mr-[6vw] h-[40vw] overflow-hidden`}
  ${tw`md:(mr-0 h-[260px])`}
  ${tw`lg:h-[460px]`}
  border-radius: 0 9999px 9999px 0;
  img {
    ${tw`rounded-lg`}
  }
`;

// Youtuber 旋轉區塊
export const SRotateBlock = styled.div`
  ${tw`absolute -right-[20vw] -top-[20vw] h-[50vw] w-[155vw] rotate-[13deg]`}
  ${tw`md:(-right-[220px] -top-[150px] h-[400px] w-[1200px])`}
  ${tw`lg:(-right-[180px] -top-[180px] h-[500px] w-[1600px])`}
  ${tw`xl:(-right-[80px] h-[640px] w-[1700px])`}
`;

// Youtuber 內容區
export const SContentGrid = styled.div`
  ${tw`relative z-30 mx-auto mt-[30px] block grid-cols-5`}
  ${tw`md:(mt-[70px] grid)`}
  ${tw`xl:mt-[90px]`}
`;

// Youtuber 右側文字區
export const SSliderRight = styled.div`
  ${tw`relative col-span-2 mt-6`}
  ${tw`md:mt-0`}
`;

// Youtuber 右側文字內容
export const SSliderContent = styled.div`
  ${tw`static top-1/2 w-full text-center`}
  ${tw`md:(absolute -translate-y-1/2 pl-[20px] text-left)`}
  ${tw`lg:pl-[75px]`}
  h3 {
    ${tw`text-xl font-bold leading-tight line-clamp-1`}
    ${tw`md:text-[24px]`}
    ${tw`lg:text-[32px]`}
    ${tw`xl:text-[40px]`}
  }
  p {
    ${tw`mx-auto mt-2 h-10 w-3/4 max-w-[650px] text-sm font-bold line-clamp-2`}
    ${tw`md:(mx-0 h-14 w-auto)`}
    ${tw`lg:text-lg`}
    ${tw`xl:text-xl`}
  }
`;

// Youtuber 箭頭按鈕
export const SArrowBtn = styled.button`
  ${tw`w-12 duration-200 hover:opacity-70`}
  ${tw`md:w-[40px]`}
  ${tw`lg:w-[60px]`}
  ${tw`xl:w-[80px]`}
`;

// Youtuber 箭頭區
export const SArrowWrap = styled.div`
  ${tw`mt-3`}
  ${tw`md:mt-4`}
  ${tw`lg:mt-6`}
  button:first-of-type {
    ${tw`mr-4`}
    ${tw`md:mr-6`}
    ${tw`lg:mr-8`}
    ${tw`xl:mr-10`}
  }
`;
