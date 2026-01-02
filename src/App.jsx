// packages
import { useEffect } from 'react';

// stores
import { useLaLaStore1 } from './stores/useLaLaStore';

// custom hooks & utils
import scrollToElement from './utils/scrollToElement';

// components
import Header from './components/basic/Header.jsx';
import Footer from './components/basic/Footer.jsx';
import Banner from './components/Banner/Banner.jsx';
import ScrollSpy from './components/ScrollSpy/ScrollSpy.jsx';
import Products from './components/Products/Products.jsx';
import Advantages from './components/Advantages/Advantages.jsx';
import Youtuber from './components/Youtuber/Youtuber.jsx';
import YTVideo from './components/YTVideo/YTVideo.jsx';
import Bank from './components/Bank/Bank.jsx';
import Active from './components/Active/Active.jsx';
import News from './components/News/News.jsx';
import Classic from './components/Classic/Classic.jsx';

function App() {
  const hasLeftNav = false; // 是否需要左選單?
  const getLalaData1 = useLaLaStore1((state) => state.getData); // 執行呼叫拉拉熊 1 資料方法

  // 取得拉拉熊 1 資料
  useEffect(() => {
    getLalaData1();
  }, []);

  // 判斷是否有網址 #id 錨點
  useEffect(() => {
    let retryCount = 0;
    const maxRetries = 30;

    const scrollHandler = () => {
      const anchor = window.location.hash.split('#')[1];
      if (!anchor) {
        return;
      } else {
        scrollToElement(anchor, 'instant');
      }

      if (retryCount < maxRetries) {
        retryCount++;
        requestAnimationFrame(scrollHandler);
      } else {
        console.warn('錨點 id 有誤');
      }
    };

    scrollHandler();
  }, []);
  return (
    <div>
      <Header />

      {/* ============ Main ============ */}
      <Banner />
      <ScrollSpy />
      <div id="products" data-title="新機上市">
        <Products />
      </div>
      <div id="advantages" data-title="官方影片">
        <Advantages />
      </div>
      <Youtuber />
      <YTVideo />
      <div id="bank" data-title="優惠攻略">
        <Bank />
      </div>
      <div id="active" data-title="登記抽好禮">
        <Active />
      </div>
      <div id="news" data-title="新聞專題">
        <News />
      </div>
      <div id="classic" data-title="重返經典">
        <Classic />
      </div>

      {/* ============ End Main ============ */}
      <Footer hasLeftNav={hasLeftNav} />
    </div>
  );
}
export default App;
