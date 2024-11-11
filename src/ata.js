import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import List from './list';
import Store from './store';

const Ata = () => {
  return (
    <>
        <List />
      <div style={{ paddingTop: '8rem' }}>
        <Store />
      </div>
    </>
  );
};

export default Ata;
