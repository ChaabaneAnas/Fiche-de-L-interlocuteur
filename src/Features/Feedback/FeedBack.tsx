import Tooltip from '../../components/tooltip/Tooltip';
import { Rating } from '@mui/material';
import styles from './feedback.module.css';
import { useState } from 'react';

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
  const [value, setValue] = useState<null | number>(null);
  function handleChange(e: React.ChangeEvent<{}>, newValue: number | null) {
    setValue(newValue);
  }
  return (
    <div className={styles.container}>
      <p className='interet'>Intérét</p>
      <Rating value={value} onChange={handleChange} precision={0.5} max={3} />
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
