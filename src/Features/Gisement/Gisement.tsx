import styles from './gisement.module.css';
import { SiHappycow } from 'react-icons/si';
import { GiGrain } from 'react-icons/gi';
import { BiRecycle } from 'react-icons/bi';
import { data } from '../../data';
import Progress from '../../components/Progress/progress';
import { useState } from 'react';

function Gisement() {
  const { Gisement } = data[0];
  const [type, setType] = useState<string | null>('Biogaz');
  return (
    <div className={styles.container}>
      <div className={`${styles.bovin} ${styles.item}`}>
        <div className={styles.placeHolder}>
          <SiHappycow className={styles.icon} />
        </div>
        <div className={styles.content}>
          <div>Bovin</div>
          <div>{Gisement.bovin ? Gisement.bovin : '--'}</div>
        </div>
      </div>
      <div className={`${styles.bettrave} ${styles.item}`}>
        <div className={styles.placeHolder}>
          <GiGrain className={styles.icon} />
        </div>
        <div className={styles.content}>
          <div>Bettrave</div>
          <div>{Gisement.bettrave ? Gisement.bettrave : '--'}ha</div>
        </div>
      </div>
      <div className={`${styles.autres} ${styles.item}`}>
        <div className={styles.placeHolder}>
          <BiRecycle className={styles.icon} />
        </div>
        <div className={styles.content}>
          <div>Autres</div>
          <div style={{ textAlign: 'center' }}>
            {Gisement.Autres ? Gisement.Autres : '--'}
          </div>
        </div>
      </div>
      <Progress type={type} />
      <div className={styles.grid}>
        <div
          className={styles.bioGaz}
          onClick={() => {
            setType('Biogaz');
          }}
        >
          Biogaz
        </div>
        <div
          className={styles.Obligation}
          onClick={() => {
            setType('Obligation');
          }}
        >
          Obligations
        </div>
        <div
          className={styles.Electricité}
          onClick={() => {
            setType('Electricité');
          }}
        >
          Electricité
        </div>
        <div
          className={styles.Actions}
          onClick={() => {
            setType('Actions');
          }}
        >
          Actions
        </div>
      </div>
    </div>
  );
}

export default Gisement;
