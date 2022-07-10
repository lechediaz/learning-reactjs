import './App.css';
import './styles.css';
import Card from './Card';

const info = [
  {
    title:
      'Thor: Love and Thunder’ hace de los cortos de Darryl canon en el MCU',
    category: 'Entretenimiento',
  },
  {
    title: '3 consejos para evitar spoilers en internet',
    category: 'Entretenimiento',
  },
  {
    title:
      'Google propone dividir su negocio publicitario ante señalamientos anticompetitivos',
    category: 'Apps & Software',
  },
];

function App() {
  return (
    <section className="container">
      {info.map((item) => (
        <Card article={item} />
      ))}
    </section>
  );
}

export default App;
