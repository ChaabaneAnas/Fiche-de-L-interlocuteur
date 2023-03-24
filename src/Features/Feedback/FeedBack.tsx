import Tooltip from '../../components/tooltip/Tooltip';
import StarRating from '../../components/starRating';
import styles from './feedback.module.css';

const Objection = (): JSX.Element => {
  return (
    <div className={styles.tooltip}>
      <div className={styles.row1}>
        <h5>DIGESTAT</h5>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className={styles.row2}>
        <h5>FINNACIER</h5>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  );
};

function FeedBack(): JSX.Element {
  return (
    <div className={styles.container}>
      <p className='interet'>Intérét</p>
      <StarRating />
      <div className={styles.objection}>
        Objection{' '}
        <Tooltip Component={<Objection />}>
          <div className={styles.objBadge}>2</div>
        </Tooltip>
      </div>
    </div>
  );
}

export default FeedBack;
