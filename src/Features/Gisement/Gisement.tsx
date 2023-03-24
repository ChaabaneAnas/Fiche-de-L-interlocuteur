import styles from './gisement.module.css';
import { CircularProgress } from '@mui/material';
import { SiHappycow } from 'react-icons/si';
import { GiGrain } from 'react-icons/gi';
import { BiRecycle } from 'react-icons/bi';

function Gisement() {
  return (
    <div className={styles.container}>
      <div className={`${styles.bovin} ${styles.item}`}>
        <div className={styles.placeHolder}>
          <SiHappycow className={styles.icon} />
        </div>
        <div className={styles.content}>
          <div>Bovin</div>
          <div>300</div>
        </div>
      </div>
      <div className={`${styles.bettrave} ${styles.item}`}>
        <div className={styles.placeHolder}>
          <GiGrain className={styles.icon} />
        </div>
        <div className={styles.content}>
          <div>Bettrave</div>
          <div>100ha</div>
        </div>
      </div>
      <div className={`${styles.autres} ${styles.item}`}>
        <div className={styles.placeHolder}>
          <BiRecycle className={styles.icon} />
        </div>
        <div className={styles.content}>
          <div>Autres</div>
          <div style={{ textAlign: 'center' }}>--</div>
        </div>
      </div>
      <div className={styles.progress}>
        <CircularProgress />
      </div>
      <div className={styles.grid}></div>
    </div>
  );
}

export default Gisement;
