// react
import { useState, useEffect } from 'react';

// gsap
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// stores
import { useLaLaStore1 } from '../../stores/useLaLaStore';

// custom hooks & utils
import useTitleAnimation from '../../hooks/useTitleAnimation';
import getDataById from '../../utils/getDataById';
import formatPriceText from '../../utils/formatPriceText';

// images
import { titleTextSection1Text, pdPd1, pdCart } from '../../assets/layout';

// styles - 共用
import { SSectionContainer, SSectionTitle } from '../style';
// styles - 自用
import {
  SProducts,
  SContainer,
  SCard,
  STextContent,
  SPdPrice,
  SBtn,
} from './style';

// register plugins
gsap.registerPlugin(ScrollTrigger);

function Products() {
  const textBg = useTitleAnimation();

  // store data
  const newPdData = useLaLaStore1((state) => state.newPdData);
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const idData = getDataById(newPdData, 42);
    if (idData.length !== 0) {
      setProductsData(idData);
    }
  }, [newPdData]);

  // 當產品資料載入且圖片渲染完成後，重新計算 ScrollTrigger 位置
  useEffect(() => {
    if (productsData.length > 0) {
      // 等待圖片載入完成後再 refresh
      const images = document.querySelectorAll('img');
      let loadedCount = 0;
      const totalImages = images.length;

      const checkAllLoaded = () => {
        loadedCount++;
        if (loadedCount === totalImages) {
          ScrollTrigger.refresh();
        }
      };

      images.forEach((img) => {
        if (img.complete) {
          checkAllLoaded();
        } else {
          img.addEventListener('load', checkAllLoaded);
          img.addEventListener('error', checkAllLoaded);
        }
      });

      // 沒有圖片，直接 refresh
      if (totalImages === 0) {
        ScrollTrigger.refresh();
      }
    }
  }, [productsData]);

  return (
    <SProducts>
      <SSectionContainer>
        <SSectionTitle className="text-white">
          <h3>S8系列嶄新上市</h3>
          <p ref={textBg} className="md:max-w-[970px] xl:max-w-[1200px]">
            <img
              className="mx-auto"
              src={titleTextSection1Text}
              alt="超早鳥優惠方案"
            />
          </p>
        </SSectionTitle>

        <SContainer>
          {productsData.length > 0 &&
            productsData.map((item, index) => {
              const marketPrice =
                item.marketPrice.trim() === '' ? '' : `$${item.marketPrice}`;
              const priceHtml = formatPriceText(item.discountPrice);

              return (
                <SCard href={item.url} key={index}>
                  <img
                    src={item.imgSrc}
                    alt={item.productName}
                    className="mx-auto"
                  />
                  <STextContent>
                    <h3>{item.productName}</h3>
                    <SPdPrice>
                      <span className="price1">{marketPrice}</span>
                      <span
                        className="price2"
                        dangerouslySetInnerHTML={{ __html: priceHtml }}
                      />
                    </SPdPrice>
                    <SBtn className="btn">
                      <span>
                        立即前往購買
                        <img
                          className="ml-2 h-4 w-4 md:ml-3 md:h-6 md:w-6"
                          src={pdCart}
                          alt="cart"
                        />
                      </span>
                    </SBtn>
                  </STextContent>
                </SCard>
              );
            })}
        </SContainer>
      </SSectionContainer>
    </SProducts>
  );
}

export default Products;
