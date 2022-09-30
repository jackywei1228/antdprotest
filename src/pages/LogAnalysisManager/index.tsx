import React from 'react';
import { PageContainer } from '@ant-design/pro-components';
import styles from './index.less';

export default function Page() {
  return (
    <PageContainer>
    <div>
      <h1 className={styles.title}>Page index</h1>
    </div>
    </PageContainer>
  );
}
