import TimeTracker from '../components/TimeTracker';
import { Row, Col, Typography } from 'antd';
const { Title } = Typography;
export const TimeEntries: React.FC = () => {
  return (
    <div>
      <Title level={3}> TimeTracker </Title>
      <Row>
        <Col span={24}>
          <TimeTracker />
        </Col>
      </Row>
    </div>
  );
};
