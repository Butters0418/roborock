import tw, { styled } from 'twin.macro';

// YTVideo 外層
export const SYTVideo = styled.div`
  ${tw`relative overflow-hidden bg-cover bg-fixed bg-center`}
  background-image: url('/src/assets/layout/ytvideo/bg.jpg');
`;

// YTVideo 格線
export const SVideoGrid = styled.div`
  ${tw`relative z-30 mx-auto mt-[30px] block grid-cols-3 gap-1 px-0 text-left`}
  ${tw`md:(mt-[70px] grid max-w-none gap-x-3 gap-y-6 px-4)`}
  ${tw`xl:mt-[90px]`}
`;

// YTVideo 影片卡片
export const SVideoCard = styled.div`
  ${tw`col-span-1`}
  .text-wrapper {
    ${tw`p-2`}
    h3 {
      ${tw`text-base font-bold`}
      ${tw`md:text-lg`}
      ${tw`xl:text-xl`}
    }
    p {
      ${tw`mt-2 text-sm line-clamp-3`}
    }
  }
`;

// YTVideo Slider 覆寫
export const SSliderWrapper = styled.div`
  .slick-list {
    ${tw`px-[8vw]`}
  }
`;
