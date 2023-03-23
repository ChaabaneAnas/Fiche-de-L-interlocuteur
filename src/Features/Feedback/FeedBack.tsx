import { Tooltip } from '@mui/material';
import StarRating from '../../components/starRating';
import styles from './feedback.module.css';

const Objection = (): JSX.Element => {
  return (
    <div>
      <div>
        <h2>DIGESTAT</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div>
        <h2>FINNACIER</h2>
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
        <Tooltip title={<Objection />} arrow placement='right'>
          <div onFocus={Objection} className={styles.objBadge}>
            2
          </div>
        </Tooltip>
      </div>
    </div>
  );
}

export default FeedBack;
