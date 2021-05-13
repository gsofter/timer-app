import { Row, Col, Typography, Card, Button, Tag } from 'antd';
import moment, { Moment } from 'moment';
import { STUDENTS } from '../constants';
import { DeleteFilled } from '@ant-design/icons';
const { Title } = Typography;

interface ITimeEntriesProps {
  entries: Array<any>;
  removeTime: (id: string) => void;
}

const formatTime = (t: string | Moment) => {
  return moment(t).format('MM/ddd hh:mm:ss');
};

export const formatDuration = (sec: number, timeFormat?: string) => {
  return moment('2000/01/01 00:00:00').add(sec, 'seconds').format('HH:mm:ss');
};

const calcDiff = (a: string | Moment | Date, b: string | Moment | Date) => {
  return Math.floor(Math.abs(moment(b).valueOf() - moment(a).valueOf()) / 1000);
};

export const TimeEntries: React.FC<ITimeEntriesProps> = ({ entries, removeTime }) => {
  const getStudentName = (id: string) => {
    const st = STUDENTS.find((st) => st.id === id);
    if (st) return st.name;
    return '';
  };
  return (
    <>
      <Title level={3}> Entries </Title>
      <Row>
        <Col span={24}>
          {entries.map((entry: any) => {
            return (
              <Card
                key={entry.id}
                style={{ marginBottom: '5px' }}
                bodyStyle={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <Row style={{ width: '100%' }}>
                  <Col md={3}>{entry.taskName} </Col>
                  <Col md={3}>
                    <Tag color="blue">{getStudentName(entry.studentId)} </Tag>
                  </Col>
                  <Col md={6}> {formatTime(entry.startTime)}</Col>
                  <Col md={6}>{formatTime(entry.endTime)} </Col>
                  <Col md={3}>{formatDuration(calcDiff(entry.startTime, entry.endTime))} </Col>
                  <Col md={3}>
                    <Button type="primary" danger onClick={() => removeTime(entry.id)}>
                      <DeleteFilled />
                    </Button>
                  </Col>
                </Row>
              </Card>
            );
          })}
        </Col>
      </Row>
    </>
  );
};
