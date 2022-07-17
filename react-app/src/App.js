import './App.css';
import './styles.css';
import Card from './Card';
import ContadorClase from './ContadorClase';
import Contador from './Contador';
import ProductCreator from './components/ProductCreator/ProductCreator';

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
    <div>
      <h2>Cards</h2>
      <section className="container">
        {info.map((item) => (
          <Card article={item} />
        ))}
      </section>
      <h2>Contador (Clase)</h2>
      <ContadorClase />
      {/* <ContadorClase /> */}
      <h2>Contador (Función)</h2>
      <Contador />
      {/* <Contador /> */}
      <ProductCreator />
    </div>
  );
}

export default App;
