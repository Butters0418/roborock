// custom hooks & utils
import useTitleAnimation from '../../hooks/useTitleAnimation';

// images
import { titleTextSection6Text } from '../../assets/layout';

// styles - 共用
import { SSectionContainer, SSectionTitle } from '../style';
// styles - 自用
import {
  SNews,
  SNewsContent,
  SNewsItem,
  SNewsLink,
  SNewsText,
  SNewsSource,
} from './style';

const newsData = [
  {
    text: 'Roborock S8系列石頭掃拖機器人正式發表',
    source: '聯合新聞網',
    link: 'https://www.kocpc.com.tw/archives/487609',
  },
  {
    text: '開箱評測 | 掃地機界最強擔當「石頭掃地機器人S8 Pro Ultra 」無比強大10合1清潔座!',
    source: '雲爸的私處',
    link: 'https://dacota.tw/blog/post/roborock-s8-pro-ultra',
  },
  {
    text: 'S8 Pro Ultra掃地機器人推10合1功能 業績可望成長3成',
    source: '中時新聞網',
    link: 'https://www.chinatimes.com/realtimenews/20230410004882-260405?chdtv',
  },
  {
    text: '石頭掃地機器人 S8 Pro Ultra 快速動眼看！',
    source: 'T客邦',
    link: 'https://www.techbang.com/posts/105341-stone-sweeping-robot-s8-pro-ultra-quick-eye-look-what-are-the',
  },
  {
    text: '石頭科技在台推出結合人工智慧技術與10合1全自動清潔功能的S8 Pro Ultra掃地機器人',
    source: 'yahoo!運動',
    link: 'https://tw.sports.yahoo.com/news/roborock-launched-the-s8-pro-ultra-sweeping-robot-in-taiwan-that-combines-artificial-intelligence-technology-and-10-in-1-fully-automatic-cleaning-function-121955212.html',
  },
  {
    text: '由樂視達集團總代理的 S8 Pro Ultra ⾸購活動，4/11 於各⼤通路搶先開賣囉！',
    source: '硬是要學',
    link: 'https://www.soft4fun.net/product-test-report/roborock-s8-series-reivew.htm',
  },
  {
    text: '世界上沒有最完美的人，但你可以選擇最接近完美的掃地機器人',
    source: 'PChome 新聞',
    link: 'https://news.pchome.com.tw/features/20230417125118009708/t1_k0/expense/pchome/20230417/index-16816990843105099013.html?utm_source=portal_ec_event&utm_medium=石頭_新聞專題&utm_campaign=石頭早鳥',
  },
];

function News() {
  const textBg = useTitleAnimation();

  return (
    <SNews>
      <SSectionContainer>
        {/* title */}
        <SSectionTitle>
          <h3>新聞專題</h3>
          <p ref={textBg}>
            <img src={titleTextSection6Text} alt="新聞專題" />
          </p>
        </SSectionTitle>

        {/* content */}
        <SNewsContent>
          {newsData.map((item, index) => (
            <SNewsItem key={index}>
              <SNewsLink href={item.link}>
                <SNewsText>{item.text}</SNewsText>
                <SNewsSource>{item.source}</SNewsSource>
              </SNewsLink>
            </SNewsItem>
          ))}
        </SNewsContent>
      </SSectionContainer>
    </SNews>
  );
}

export default News;
