import styles from './gisement.module.css';
import { SiHappycow } from 'react-icons/si';
import { GiGrain } from 'react-icons/gi';
import { BiRecycle, BiDroplet } from 'react-icons/bi';
import { useContext, useState } from 'react';
import { BsLightningCharge } from 'react-icons/bs';
import { BsOctagonHalf } from 'react-icons/bs';
import { TbSignature } from 'react-icons/tb';
import Progress from '../../components/Progress/progress';
import { Context } from '../../context/context';

function Gisement() {
  const { Gisement } = useContext(Context)?.persons[0]!;
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
          className={
            type === 'Biogaz'
              ? `${styles.BioGaz} ${styles.active}`
              : styles.BioGaz
          }
          onClick={() => {
            setType('Biogaz');
          }}
        >
          <BiDroplet className={styles.icon} />
          Biogaz
        </div>
        <div
          className={
            type === 'Obligation'
              ? `${styles.Obligation} ${styles.active}`
              : styles.Obligation
          }
          onClick={() => {
            setType('Obligation');
          }}
        >
          <TbSignature className={styles.icon} /> Obligations
        </div>
        <div
          className={
            type === 'Electricité'
              ? `${styles.Electricité} ${styles.active}`
              : styles.Electricité
          }
          onClick={() => {
            setType('Electricité');
          }}
        >
          <BsLightningCharge className={styles.icon} /> Electricité
        </div>
        <div
          className={
            type === 'Actions'
              ? `${styles.Actions} ${styles.active}`
              : styles.Actions
          }
          onClick={() => {
            setType('Actions');
          }}
        >
          <BsOctagonHalf className={styles.icon} /> Actions
        </div>
      </div>
    </div>
  );
}

export default Gisement;
