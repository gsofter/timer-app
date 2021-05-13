import { Row, Col, Typography, Card } from 'antd';
import moment, { Moment } from 'moment';
import { STUDENTS } from '../constants';
import momentDurationFormatSetup from 'moment-duration-format';
const { Title } = Typography;

interface ITimeEntriesProps {
  entries: Array<any>;
}

const formatTime = (t: string | Moment) => {
  return moment(t).format('MM DDD hh:mm:ss');
};

export const formatDuration = (sec: number, timeFormat?: string) => {
  const seconds = Math.abs(sec);
  const duration = moment.duration(seconds, 'seconds') as any;
  return duration.format('HH:mm:ss', { trim: false });
};

const calcDiff = (a: string | Moment | Date, b: string | Moment | Date) => {
  return Math.floor(Math.abs(moment(b).valueOf() - moment(a).valueOf()) / 1000);
};

export const TimeEntries: React.FC<ITimeEntriesProps> = ({ entries }) => {
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
                  <Col md={6}> {getStudentName(entry.studentId)}</Col>
                  <Col md={6}> {formatTime(entry.startTime)}</Col>
                  <Col md={6}>{formatTime(entry.endTime)} </Col>
                  <Col md={3}>{formatDuration(calcDiff(entry.startTime, entry.endTime))} </Col>
                </Row>
              </Card>
            );
          })}
        </Col>
      </Row>
    </>
  );
};
