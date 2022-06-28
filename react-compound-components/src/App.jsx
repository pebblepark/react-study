import { Toggle } from './components/toggle';

function App() {
  return (
    <Toggle onToggle={(on) => console.log(on)}>
      <Toggle.On>The button is on</Toggle.On>
      <Toggle.Off>The button is off</Toggle.Off>
      <Toggle.Button />
    </Toggle>
  );
}

export default App;
