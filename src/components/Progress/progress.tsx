import styles from './progress.module.css';
import { Circle } from 'rc-progress';
import { data } from '../../data';

const { graph } = data[0].Gisement;

interface propTypes {
  type: string | null;
}

function Progress({ type }: propTypes) {
  let color: string, percent: number;

  switch (type) {
    case 'Biogaz':
      color = 'green';
      percent = graph.bioGaz;
      break;
    case 'Obligation':
      color = 'blue';
      percent = graph.Obligations;
      break;
    case 'Electricité':
      color = 'yellow';
      percent = graph.Electrcité;
      break;
    case 'Actions':
      color = 'orange';
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
