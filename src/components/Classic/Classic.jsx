// react
import { useState, useEffect } from 'react';

// stores
import { useLaLaStore1 } from '../../stores/useLaLaStore';

// custom hooks & utils
import useTitleAnimation from '../../hooks/useTitleAnimation';
import getDataById from '../../utils/getDataById';
import formatPriceText from '../../utils/formatPriceText';

// images
import {
  titleTextSection7Text,
  classicGetp,
  classicRoborockLogo,
  pdCart,
} from '../../assets/layout';

// styles - 共用
import { SSectionContainer, SSectionTitle } from '../style';
// styles - 自用
import {
  SClassic,
  SClassicGrid,
  SGetp,
  SCard,
  STextContent,
  SPdPrice,
  SBtn,
  SLogoCard,
} from './style';

function Classic() {
  const textBg = useTitleAnimation();

  // store data
  const newPdData = useLaLaStore1((state) => state.newPdData);
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const idData = getDataById(newPdData, 220);
    idData.length !== 0 && setProductsData(idData);
  }, [newPdData]);

  return (
    <SClassic>
      <SSectionContainer>
        {/* title */}
        <SSectionTitle className="text-white">
          <h3>重返經典</h3>
          <p ref={textBg}>
            <img src={titleTextSection7Text} alt="重返經典" />
          </p>
        </SSectionTitle>

        <SClassicGrid>
          <SGetp>
            <img src={classicGetp} alt="下單抽p幣" />
          </SGetp>

          {productsData.length > 0 &&
            productsData
              .filter((item, index) => index < 7)
              .map((item, index) => {
                const marketPrice =
                  item.marketPrice.trim() === '' ? '' : `$${item.marketPrice}`;
                const priceHtml = formatPriceText(item.discountPrice);
                const colClass =
                  index < 3
                    ? 'col-span-6 md:col-span-4'
                    : 'col-span-6 md:col-span-3';

                return (
                  <SCard href={item.url} className={colClass} key={index}>
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

          {productsData.length > 7 && (
            <SLogoCard href={productsData[7].url}>
              <img src={classicRoborockLogo} alt="roborock" />
            </SLogoCard>
          )}
        </SClassicGrid>
      </SSectionContainer>
    </SClassic>
  );
}

export default Classic;
