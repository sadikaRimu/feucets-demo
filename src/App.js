import logo from './logo.svg';
import './App.scss';
import './custom.scss';
import Button from 'react-bootstrap/Button';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes';
//import { Button } from 'bootstrap';

function App() {
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
