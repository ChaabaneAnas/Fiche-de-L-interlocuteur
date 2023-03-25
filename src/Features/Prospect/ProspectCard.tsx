import { useContext } from 'react';
import { Context } from '../../context/context';
import styles from './prospectCard.module.css';
import { FaUserCircle } from 'react-icons/fa';
import { CiMail } from 'react-icons/ci';
import { BsTelephoneInbound } from 'react-icons/bs';
import { MdOutlineFax } from 'react-icons/md';
import Sline from '../../components/sLine/Sline';

export default function ProspectCard(): JSX.Element {
  const state = useContext(Context);
  const Person = state!.persons[0];

  let color;
  switch (Person.Qualité) {
    case 'Prospect':
      color = 'orange';
      break;
    case 'Lead':
      color = 'yellow';
      break;
    case 'Customer':
      color = 'green';
      break;
    default:
      color = 'orange';
  }
  return (
    <div className={styles.card}>
      <div className={styles.userInfos}>
        <div className={styles.infoPlaceholder}>
          <FaUserCircle className={styles.avatar} />
        </div>
        <div className={styles.infos}>
          <h2>{`${Person.Nom} ${Person.Prenom}`}</h2>
          <p>
            Qualité: <span style={{ color: color }}>{Person.Qualité}</span>
          </p>
          <p>Référence dossier: {Person.référence}</p>
          <p>id compte: {Person.id}</p>
        </div>
      </div>
      <Sline height='3rem' width='.1rem' color='green' position='center' />
      <div className={styles.status}>
        <h4>Statut: </h4>
        <div className={styles.statusItems}>
          <div className={`${styles.stat} ${styles.ro}`}>
            <div className={styles.item}>RO</div>
            <span>{Person.status.RO}</span>
          </div>
          <div className={`${styles.stat} ${styles.oc}`}>
            <div className={styles.item}>OC</div>
            <span>{Person.status.OC}</span>
          </div>
          <div className={`${styles.stat} ${styles.st}`}>
            <div className={styles.item}>ST</div>
            <span> {Person.status.ST} </span>
          </div>
          <div className={`${styles.stat} ${styles.r}`}>
            <div className={styles.item}>R+</div>
            <span> {Person.status.R} </span>
          </div>
        </div>
      </div>
      <Sline height='3rem' width='.1rem' color='green' position='center' />
      <div className={styles.contact}>
        <p className='centerY'>
          {' '}
          <CiMail className={styles.contactIcons} /> {Person.contact.email}{' '}
        </p>
        <p className='centerY'>
          {' '}
          <MdOutlineFax className={styles.contactIcons} />{' '}
          {Person.contact.bureau}{' '}
        </p>
        <p className='centerY'>
          {' '}
          <BsTelephoneInbound className={styles.contactIcons} />{' '}
          {Person.contact.mobile}{' '}
        </p>
      </div>
    </div>
  );
}
