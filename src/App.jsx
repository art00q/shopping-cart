import Cart from './components/Cart/Cart';
import Main from './components/Main/Main';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { init } from './storage/cart';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />
  },
  {
    path: '/cart',
    element: <Cart />
  }
]);

function App() {
  init();

  return <RouterProvider router={router} />;
}

export default App;
