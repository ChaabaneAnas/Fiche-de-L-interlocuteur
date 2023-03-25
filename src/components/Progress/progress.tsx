import styles from './progress.module.css';
import { Circle } from 'rc-progress';
import { useContext } from 'react';
import { Context } from '../../context/context';

interface propTypes {
  type: string | null;
}

function Progress({ type }: propTypes) {
  const { graph } = useContext(Context)?.persons[0].Gisement!;

  let color: string, percent: number;
  switch (type) {
    case 'Biogaz':
      color = '#06a94d';
      percent = graph.bioGaz;
      break;
    case 'Obligation':
      color = '#1aa7ec';
      percent = graph.Obligations;
      break;
    case 'Electricité':
      color = '#e5de00';
      percent = graph.Electrcité;
      break;
    case 'Actions':
      color = '#d4af37';
      percent = graph.Actions;
      break;
    default:
      color = 'grey';
      percent = 0;
  }

  return (
    <div className={styles.progress}>
      <Circle
        style={{ width: '80px' }}
        percent={percent}
        trailWidth={10}
        strokeWidth={10}
        strokeColor={color}
      />
      <span>{percent}%</span>
    </div>
  );
}

export default Progress;
