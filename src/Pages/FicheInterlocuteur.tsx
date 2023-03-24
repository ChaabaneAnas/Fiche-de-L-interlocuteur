import Body from '../Features/body/body';
import FeedBack from '../Features/Feedback/FeedBack';
import ProspectCard from '../Features/Prospect/ProspectCard';
import { data } from '../data';

import styles from './fiche.module.css';

function FicheInterlocuteur() {
  return (
    <div className={styles.container}>
      <ProspectCard person={data[0]} />
      <FeedBack />
      <Body />
    </div>
  );
}

export default FicheInterlocuteur;
