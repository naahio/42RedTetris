import React from 'react';
import styles from './Loader.module.css';

interface LoaderProps {
  loading?: boolean;
}

const Loader: React.FC<LoaderProps> = ({ loading }) => {
  if (!loading) return null;

  return (
    <div className={styles.tetris}>
      <div className={styles.block1}></div>
      <div className={styles.block2}></div>
      <div className={styles.block3}></div>
      <div className={styles.block4}></div>
    </div>
  );
};

export default Loader;
