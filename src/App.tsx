import { createRenderer } from 'fela';
import { RendererProvider } from 'react-fela';
import { HomePage } from './pages/Home';
import 'antd/dist/antd.css';
import './App.css';

const renderer = createRenderer();

function App() {
  return (
    <RendererProvider renderer={renderer}>
      <HomePage />
    </RendererProvider>
  );
}

export default App;
