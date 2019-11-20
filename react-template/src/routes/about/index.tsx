import React from 'react';
import { Button } from 'antd';
import styles from './index.less';

const About: React.FC = () => {
  return (
    <div className={styles.About}>
      <Button type="primary">About</Button>
    </div>
  );
}

export default About;
