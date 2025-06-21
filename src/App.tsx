import ErrorBoundary from './pages/Error/Error';
import { Suspense } from 'react';
import './styles/GlobalStyle/index.css';
import Loading from './components/common/loading';
import { RouterProvider } from 'react-router-dom';
import { RouterConfig } from './routes/RouterConfig';
import { Toaster } from 'sonner';
import ClickSpark from './components/ui/ClickSpark';

function App() {
  const router = RouterConfig();

  return (
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
        <Toaster />
        <ClickSpark sparkColor="#2563eb">
          <RouterProvider router={router} />
        </ClickSpark>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
