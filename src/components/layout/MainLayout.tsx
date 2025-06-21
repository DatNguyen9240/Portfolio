import { Outlet } from 'react-router-dom';
import Header from './Header';

export default function MainLayout() {
  return (
    <div>
      <Header />
      <main className="flex-grow bg-gradient-to-b">
        <Outlet />
      </main>
    </div>
  );
}
