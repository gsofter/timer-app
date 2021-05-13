import React, { useState } from 'react';
import { useFela } from 'react-fela';
import { CloseOutlined } from '@ant-design/icons';
import { Input, Button, Typography, Row, Col, Dropdown, Select } from 'antd';
import CSS from 'csstype';
import Timer from 'react-compound-timer';
import moment, { Moment } from 'moment';
import { STUDENTS } from '../constants';
const { Title } = Typography;
export interface ITimeTracker {
  timer?: any;
  saveTime: Function;
}

export const TimeTracker: React.FC<ITimeTracker> = (props: ITimeTracker) => {
  const { reset, stop, start } = props.timer;
  const { saveTime } = props;
  const [startTime, setStartTime] = useState<Moment>(moment());
  const [tracking, setTracking] = useState<Boolean>(false);
  const [studentId, setStudentId] = useState<string | undefined>('');
  const [taskName, setTaskName] = useState<string | undefined>('');
  const { css } = useFela(props);

  const handleStart = () => {
    start();
    setStartTime(moment());
    setTracking(true);
  };

  const handleStop = () => {
    stop();
    reset();
    const request = {
      studentId,
      taskName,
      startTime,
      endTime: moment(),
    };
    saveTime(request);
    setTracking(false);
    setStudentId('');
    setTaskName('');
  };

  const handleDiscard = () => {
    stop();
    reset();
    setTracking(false);
  };

  const discardConfirmOverlay = (
    <div>
      Are you sure to Discard?
      <Button type="primary" onClick={handleDiscard}>
        Discard
      </Button>
    </div>
  );
  return (
    <Row className={css(styles.timeTracker)}>
      <Col sm={12} className="flex-row flex-between">
        <Select
          style={{ width: '50%', marginRight: '10px' }}
          value={studentId}
          onChange={(value) => setStudentId(value)}
        >
          {STUDENTS.map((st, index) => (
            <Select.Option value={st.id} key={st.id}>
              {st.name}
            </Select.Option>
          ))}
        </Select>
        <Input
          placeholder="What are you working on?"
          size="large"
          style={{ width: '50%' }}
          value={taskName}
          onChange={(event) => setTaskName(event.target.value)}
        />
      </Col>
      <Col sm={12} className={css(styles.flexEnd)}>
        <Title level={4} style={{ marginBottom: '0px', flex: '1', textAlign: 'center' }}>
          <Timer.Hours formatValue={(val) => `${val < 10 ? `0${val}` : val}`} />:
          <Timer.Minutes formatValue={(val) => `${val < 10 ? `0${val}` : val}`} />:
          <Timer.Seconds formatValue={(val) => `${val < 10 ? `0${val}` : val}`} />
        </Title>

        {!tracking ? (
          <Button type="primary" onClick={handleStart}>
            START
          </Button>
        ) : (
          <Button type="primary" danger onClick={handleStop}>
            STOP
          </Button>
        )}

        {tracking && (
          <Dropdown overlay={discardConfirmOverlay} trigger={['click']}>
            <Button icon={<CloseOutlined />}></Button>
          </Dropdown>
        )}
      </Col>
    </Row>
  );
};

const withTimer = (timerProps: any) => (WrappedComponent: any) => (wrappedComponentProps: ITimeTracker) =>
  (
    <Timer {...timerProps}>
      {(timerRenderProps: any) => <WrappedComponent {...wrappedComponentProps} timer={timerRenderProps} />}
    </Timer>
  );

export default withTimer({ startImmediately: false })(TimeTracker);

const styles: { [key: string]: (obj: any) => CSS.Properties } = {
  timeTracker: ({ theme }) => ({
    padding: '5px 10px',
    border: '1px solid #eee',
    backgroundColor: '#fff',
    borderRadius: '5px',
    marginBottom: '5px',
    width: '100%',

    '& .flex-row': {
      display: 'flex',
      flexDirection: 'row',
    },
    '& .flex-between': {
      justifyContent: 'space-around',
      alignItems: 'center',
    },
  }),
  flexEnd: ({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  }),
};
