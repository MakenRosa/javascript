import './App.css';
import OutraLista from './components/OutraLista';



function App() {
  const meusItens = ['React', 'Angular', 'Vue', 'Svelte'];
  return (
    <div className="App">
      <OutraLista itens={meusItens} />
      <OutraLista itens={[]} />
      </div>
  );
}

export default App;
