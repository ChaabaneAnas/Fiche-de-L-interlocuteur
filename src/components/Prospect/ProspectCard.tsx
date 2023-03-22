import { person } from '../../GlobalTypes';
import styles from './prospectCard.module.css';
import { FaUserCircle } from 'react-icons/fa';
import { CiMail } from 'react-icons/ci';
import { BsTelephoneInbound } from 'react-icons/bs';
import { MdOutlineFax } from 'react-icons/md';
import Sline from '../sLine/Sline';

interface propTypes {
  person: person;
}

export default function ProspectCard({ person }: propTypes): JSX.Element {
  let color;
  switch (person.Qualité) {
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
          <h2>{`${person.Nom} ${person.Prenom}`}</h2>
          <p>
            Qualité: <span style={{ color: color }}>{person.Qualité}</span>
          </p>
          <p>Référence dossier: {person.référence}</p>
          <p>id compte: {person.id}</p>
        </div>
      </div>
      <Sline height='3rem' width='.1rem' color='green' position='center' />
      <div className={styles.status}>
        <h4>Statut: </h4>
        <div className={styles.statusItems}>
          <div className={`${styles.stat} ${styles.ro}`}>
            <div className={styles.item}>RO</div>
            <span>{person.status.RO}</span>
          </div>
          <div className={`${styles.stat} ${styles.oc}`}>
            <div className={styles.item}>OC</div>
            <span>{person.status.OC}</span>
          </div>
          <div className={`${styles.stat} ${styles.st}`}>
            <div className={styles.item}>ST</div>
            <span> {person.status.ST} </span>
          </div>
          <div className={`${styles.stat} ${styles.r}`}>
            <div className={styles.item}>R+</div>
            <span> {person.status.R} </span>
          </div>
        </div>
      </div>
      <Sline height='3rem' width='.1rem' color='green' position='center' />
      <div className={styles.contact}>
        <p className='centerY'>
          {' '}
          <CiMail className={styles.contactIcons} /> {person.contact.email}{' '}
        </p>
        <p className='centerY'>
          {' '}
          <MdOutlineFax className={styles.contactIcons} />{' '}
          {person.contact.bureau}{' '}
        </p>
        <p className='centerY'>
          {' '}
          <BsTelephoneInbound className={styles.contactIcons} />{' '}
          {person.contact.mobile}{' '}
        </p>
      </div>
    </div>
  );
}
