import './App.css';
import ControlledTinyMce from './components/ControlledTinyMce';
import TinyMceEditor from './components/TinyMceEditor';
import TinyMceForm from './components/TinyMceForm';
export const APIKEY = 'iqu8h16j5o5o5u7sgn6k25yrp2dh2co9m1pvza9h9ggl5p2h';

export default function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ display: 'flex', gap: '20px' }}>
        <ControlledTinyMce />
      </div>

      <div style={{ display: 'flex', gap: '20px' }}>
        <TinyMceEditor />
        <TinyMceForm />
      </div>
    </div>
  );
};