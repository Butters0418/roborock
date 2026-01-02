// react
import { useState, useCallback } from 'react';

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

// custom hooks
import useTitleAnimation from '../../hooks/useTitleAnimation';
import useWindowWidth from '../../hooks/useWindowWidth';

// images
import { titleTextYoutubeText } from '../../assets/layout';

// styles - 共用
import { SSectionContainer, SSectionTitle } from '../style';
// styles - 自用
import { SYTVideo, SVideoGrid, SVideoCard, SSliderWrapper } from './style';

const videoData = [
  {
    src: 'https://www.youtube.com/embed/B5uLsdNChEQ',
    thumbnail: 'https://img.youtube.com/vi/B5uLsdNChEQ/maxresdefault.jpg',
    title: '知名Youtuber 阿湯',
    text: 'Roborock 石頭科技 S8 Pro Ultra 嶄新登場，最接近完美的掃地機器人，10 合 1 全自動清潔座、五大清潔效能提升，就放手交給它吧！',
  },
  {
    src: 'https://www.youtube.com/embed/WWtn94MDH5g',
    thumbnail: 'https://img.youtube.com/vi/WWtn94MDH5g/maxresdefault.jpg',
    title: '知名Youtuber Joeman',
    text: '到底是平價便宜的產品吸引人，還是高貴奢華的產品令人嚮往，歡迎收看今天由 《Roborock 石頭科技》贊助播出的 JOE是要對決 !',
  },
  {
    src: 'https://www.youtube.com/embed/Ka3wtdYbwkA',
    thumbnail: 'https://img.youtube.com/vi/Ka3wtdYbwkA/maxresdefault.jpg',
    title: '知名Youtuber 黑手創意',
    text: '2023年要達到真正解放雙手就要買S8 Pro Ultra，10合1自動清潔座 x 5大清潔效能提升 x 3大貼心設計，就忘記清掃吧 !',
  },
  {
    src: 'https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FMuyao4%2Fvideos%2F214984887827058%2F',
    thumbnail: '',
    title: '知名Youtuber 木曜4超玩',
    text: '有了Roborock 石頭掃地機器人S8 Pro Ultra<br/>讓你成為優雅的女王',
  },
  {
    src: 'https://www.youtube.com/embed/CCGnyYTD9GQ',
    thumbnail: 'https://img.youtube.com/vi/CCGnyYTD9GQ/maxresdefault.jpg',
    title: '知名Youtuber 蕾菈 Lyla',
    text: '打造質感生活宅！<br/>跟蕾菈一起搬家換屋 斷。捨。離。',
  },
  {
    src: 'https://www.youtube.com/embed/O_bmnDodtr4',
    thumbnail: 'https://img.youtube.com/vi/O_bmnDodtr4/maxresdefault.jpg',
    title: '知名Youtuber 蔡阿嘎',
    text: '被告 S8 Pro Ultra 你還有沒有話想說<br/>有 ! 事實上我就是最接近完美的掃地機器人，可以退庭了',
  },
];

function YTVideo() {
  const textBg = useTitleAnimation();
  const windowWidth = useWindowWidth();
  const isDesktop = windowWidth > 766;

  // Lazy loading state for iframes
  const [loadedVideos, setLoadedVideos] = useState({});

  // 處理影片載入
  const handleVideoLoad = useCallback((index) => {
    setLoadedVideos((prev) => ({ ...prev, [index]: true }));
  }, []);

  // Render video card
  const renderVideoCard = useCallback(
    (item, index) => {
      const isLoaded = loadedVideos[index];
      const isFacebookVideo = item.src.includes('facebook');

      return (
        <SVideoCard key={index}>
          <div
            className={`aspect-h-9 aspect-w-16 relative ${
              isLoaded ? 'cursor-default' : 'cursor-pointer'
            }`}
            onClick={() => !isLoaded && handleVideoLoad(index)}
          >
            {isLoaded || isFacebookVideo ? (
              <iframe
                src={item.src}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={item.title}
                loading="lazy"
              ></iframe>
            ) : (
              <>
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute left-1/2 top-1/2 z-10 flex h-12 w-[68px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl bg-black/80">
                  <div className="ml-1 h-0 w-0 border-b-[10px] border-l-[16px] border-t-[10px] border-b-transparent border-l-white border-t-transparent"></div>
                </div>
              </>
            )}
          </div>
          <div className="text-wrapper">
            <h3>{item.title}</h3>
            <p dangerouslySetInnerHTML={{ __html: item.text }}></p>
          </div>
        </SVideoCard>
      );
    },
    [loadedVideos, handleVideoLoad],
  );

  return (
    <SYTVideo>
      <SSectionContainer>
        {/* title */}
        <SSectionTitle>
          <h3>YouTube首播開箱 搶先看</h3>
          <p ref={textBg}>
            <img src={titleTextYoutubeText} alt="YouTube首播開箱 搶先看" />
          </p>
        </SSectionTitle>

        <SVideoGrid>
          {isDesktop ? (
            <>{videoData.map((item, index) => renderVideoCard(item, index))}</>
          ) : (
            <SSliderWrapper>
              <Swiper slidesPerView={1.1} spaceBetween={8} touchRatio={1}>
                {videoData.map((item, index) => {
                  const isLoaded = loadedVideos[index];
                  const isFacebookVideo = item.src.includes('facebook');

                  return (
                    <SwiperSlide key={index}>
                      <div className="px-1">
                        <div
                          className={`aspect-h-9 aspect-w-16 relative ${
                            isLoaded ? 'cursor-default' : 'cursor-pointer'
                          }`}
                          onClick={() => !isLoaded && handleVideoLoad(index)}
                        >
                          {isLoaded || isFacebookVideo ? (
                            <iframe
                              src={item.src}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              title={item.title}
                              loading="lazy"
                            ></iframe>
                          ) : (
                            <>
                              <img
                                src={item.thumbnail}
                                alt={item.title}
                                className="h-full w-full object-cover"
                              />
                              <div className="absolute left-1/2 top-1/2 z-10 flex h-12 w-[68px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl bg-black/80">
                                <div className="ml-1 h-0 w-0 border-b-[10px] border-l-[16px] border-t-[10px] border-b-transparent border-l-white border-t-transparent"></div>
                              </div>
                            </>
                          )}
                        </div>
                        <div className="p-2">
                          <h3 className="text-base font-bold">{item.title}</h3>
                          <p
                            className="mt-2 line-clamp-3 text-sm"
                            dangerouslySetInnerHTML={{ __html: item.text }}
                          ></p>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </SSliderWrapper>
          )}
        </SVideoGrid>
      </SSectionContainer>
    </SYTVideo>
  );
}

export default YTVideo;
