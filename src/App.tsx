import { Toaster } from 'sonner';
import { RouterProvider } from 'react-router-dom';
import { browserRouter } from './routes/browserRouter';

function App() {
  return (
    <div className="fade-in">
      <Toaster />
      <RouterProvider router={browserRouter} />
    </div>
  );
}

export default App;
