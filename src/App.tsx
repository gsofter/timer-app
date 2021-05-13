import { createRenderer } from 'fela';
import { RendererProvider } from 'react-fela';
import { MainLayout } from './layouts/MainLayout';
import { TimeEntries } from './components/TimeEntries';
import TimeTracker from './components/TimeTracker';
import 'antd/dist/antd.css';
import './App.css';

const renderer = createRenderer();

function App() {
  return (
    <RendererProvider renderer={renderer}>
      <MainLayout>
        <TimeTracker />
        <TimeEntries />
      </MainLayout>
    </RendererProvider>
  );
}

export default App;
