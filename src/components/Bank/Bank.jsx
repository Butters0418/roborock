// react
import { useState, useEffect } from 'react';

// stores
import { useLaLaStore1 } from '../../stores/useLaLaStore';

// custom hooks & utils
import useTitleAnimation from '../../hooks/useTitleAnimation';
import getDataById from '../../utils/getDataById';

// images
import { titleTextSection4Text } from '../../assets/layout';

// styles - 共用
import { SSectionContainer, SSectionTitle } from '../style';
// styles - 自用
import { SBank, SBankGrid, SBankLink } from './style';

function Bank() {
  const textBg = useTitleAnimation();

  // store data
  const newPdData = useLaLaStore1((state) => state.newPdData);
  const [bankData, setBankData] = useState([]);

  useEffect(() => {
    const idData = getDataById(newPdData, 53);
    idData.length !== 0 && setBankData(idData);
  }, [newPdData]);

  return (
    <SBank>
      <SSectionContainer>
        {/* title */}
        <SSectionTitle>
          <h3>優惠攻略</h3>
          <p ref={textBg}>
            <img src={titleTextSection4Text} alt="優惠攻略" />
          </p>
        </SSectionTitle>

        {/* content */}
        <SBankGrid>
          {bankData.length > 0 &&
            bankData.map((item, index) => (
              <SBankLink href={item.url} key={index}>
                <img src={item.imgSrc} alt={item.productName} />
              </SBankLink>
            ))}
        </SBankGrid>
      </SSectionContainer>
    </SBank>
  );
}

export default Bank;
