import styles from './body.module.css';
import EditableField from '../../components/editableField/EditableField';
import { useState } from 'react';
import { data } from '../../data';
import Gisement from '../Gisement/Gisement';

function Body() {
  const [adress, setAdress] = useState(data[0].adress);
  const [exploi, setExploi] = useState(data[0].exploitation);
  const [cuma, setCuma] = useState(data[0].CUMA);
  const [contactAssoc, setcontactAssoc] = useState(data[0].contactAssociés);

  return (
    <div className={styles.container}>
      <div className={`${styles.row} ${styles.row1}`}>
        <h5 className={styles.title}>Adress personnelle</h5>
        <div className={styles.content}>
          <EditableField initValue={adress.region} />
          <EditableField initValue={adress.département} />
          <EditableField initValue={adress.Commune} />
          <EditableField initValue={adress.Postal} />
        </div>
      </div>
      <div className={`${styles.row} ${styles.row2}`}>
        <h5 className={styles.title}>Exploitation</h5>
        <div className={styles.content}>
          <EditableField initValue={exploi.génération} />
          <div className={styles.badge}>
            <div></div>
            <span>OUI</span>
          </div>
          <EditableField initValue={exploi.présentation} />
          <EditableField initValue={exploi.suivi} />
          <EditableField initValue={exploi.qualification} />
        </div>
      </div>
      <div className={`${styles.row} ${styles.row3}`}>
        <div>
          <h5 className={styles.title}>CUMA</h5>
          <div className={styles.content}>
            <EditableField initValue={cuma.UMA} />
            <EditableField initValue={cuma.coopération} />
          </div>
        </div>
        <div>
          <h5 className={styles.title}>Contacts associés</h5>
          <div className={styles.content}>
            <EditableField initValue={contactAssoc.assoc} />
            <EditableField initValue={contactAssoc.contact} />
          </div>
        </div>
      </div>
      <div className={`${styles.row} ${styles.row1}`}>
        <h5 className={styles.title}>Gisement</h5>
        <Gisement />
      </div>
    </div>
  );
}

export default Body;
