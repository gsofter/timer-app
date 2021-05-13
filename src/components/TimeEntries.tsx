import { Row, Col, Typography, Spin } from 'antd';
import { useQuery } from '@apollo/client';
import * as _ from 'lodash';

const { Title } = Typography;

interface ITimeEntriesProps {
  entries: Array<any>;
}

export const TimeEntries: React.FC<ITimeEntriesProps> = ({ entries }) => {
  return (
    <>
      <Title level={3}> Entries </Title>
      <Row>
        <Col span={24}>
          {entries.map((entry: any) => {
            return (
              <>
                <p> {entry.id} </p>
                <p> {entry.taskName} </p>
                <p> {entry.startTime} </p>
                <p> {entry.endTime} </p>
              </>
            );
          })}
        </Col>
      </Row>
    </>
  );
};
