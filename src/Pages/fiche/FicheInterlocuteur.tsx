import Body from '../../Features/body/body';
import FeedBack from '../../Features/Feedback/FeedBack';
import ProspectCard from '../../Features/Prospect/ProspectCard';
import styles from './fiche.module.css';
import { actionInterface } from '../../GlobalTypes';

interface propTypes {
  dispatch: React.Dispatch<actionInterface>;
}

function FicheInterlocuteur({ dispatch }: propTypes): JSX.Element {
  return (
    <div className={styles.container}>
      <ProspectCard />
      <Body dispatch={dispatch} />
    </div>
  );
}

export default FicheInterlocuteur;
