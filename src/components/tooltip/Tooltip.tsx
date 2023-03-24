import { useState } from 'react';
import styles from './Tooltip.module.css';

interface propTypes {
  Component: JSX.Element;
  children: any;
}

function Tooltip({ Component, children }: propTypes) {
  const [isvisible, setIsvisible] = useState(false);

  return (
    <div
      className={styles.container}
      onMouseEnter={() => setIsvisible(true)}
      onMouseLeave={() => setIsvisible(false)}
    >
      {children}
      {isvisible && Component}
    </div>
  );
}

export default Tooltip;
