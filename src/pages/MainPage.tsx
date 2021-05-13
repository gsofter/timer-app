import { Layout, Menu } from 'antd';
import { TimeEntries } from '../containers/TimeEntries';
import { useFela } from 'react-fela';
import CSS from 'csstype';
const { Header, Content, Footer } = Layout;

export const MainPage: React.FC = () => {
  const { css } = useFela();
  return (
    <Layout className={css(styles.layout)}>
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">Time Tracker</Menu.Item>
          <Menu.Item key="2">Teachers</Menu.Item>
          <Menu.Item key="3">Students</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">
          <TimeEntries />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>TimeTracker ©2021 Created by Steve</Footer>
    </Layout>
  );
};

const styles: { [key: string]: (obj: any) => CSS.Properties } = {
  layout: ({ theme }) => ({
    height: '100vh',
    '& .site-layout-content': {
      height: '100%',
      padding: '24px',
      background: '#fff',
    },
  }),
};
