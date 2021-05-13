import { Row, Col, Typography } from 'antd';
const { Title } = Typography;
export const TimeEntries: React.FC = () => {
  return (
    <div>
      <Title level={3}> Entries </Title>
      <Row>
        <Col span={24}></Col>
      </Row>
    </div>
  );
};
