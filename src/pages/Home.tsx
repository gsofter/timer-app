import React from 'react';
import { TimeEntries } from '../components/TimeEntries';
import TimeTracker from '../components/TimeTracker';
import { MainLayout } from '../layouts/MainLayout';
import { GET_TIME_ENTRIES } from '../graphql/query';
import { useQuery } from '@apollo/client';
import * as _ from 'lodash';
import { Spin } from 'antd';

export const HomePage: React.FC = () => {
  const { data, loading, error } = useQuery(GET_TIME_ENTRIES);
  return (
    <Spin spinning={loading || !data}>
      <MainLayout>
        <TimeTracker />
        <TimeEntries entries={_.get(data, 'getTimeEntries', [])} />
      </MainLayout>
    </Spin>
  );
};
