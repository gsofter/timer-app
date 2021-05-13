import React from 'react';
import { TimeEntries } from '../components/TimeEntries';
import TimeTracker from '../components/TimeTracker';
import { MainLayout } from '../layouts/MainLayout';
import { GET_TIME_ENTRIES } from '../graphql/query';
import { CREATE_TIME_ENTRY, REMOVE_TIME_ENTRY } from '../graphql/mutation';
import { useMutation, useQuery } from '@apollo/client';
import * as _ from 'lodash';
import { Spin, message } from 'antd';

export const HomePage: React.FC = () => {
  const { data, loading, refetch } = useQuery(GET_TIME_ENTRIES);
  const [createMutation] = useMutation(CREATE_TIME_ENTRY);
  const [removeMutation] = useMutation(REMOVE_TIME_ENTRY);
  const handleSaveTime = (request: any) => {
    createMutation({
      variables: { request },
    })
      .then(() => {
        refetch();
        message.success('Success');
      })
      .catch((e) => {
        message.error(e.message);
      });
  };

  const handleRemoveTime = (entryId: string) => {
    removeMutation({
      variables: { entryId },
    })
      .then(() => {
        refetch();
        message.info('Removed');
      })
      .catch((e) => {
        message.error(e.message);
      });
  };

  return (
    <Spin spinning={loading || !data}>
      <MainLayout>
        <TimeTracker saveTime={handleSaveTime} />
        <TimeEntries entries={_.get(data, 'getTimeEntries', [])} removeTime={handleRemoveTime} />
      </MainLayout>
    </Spin>
  );
};
