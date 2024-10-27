import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { AuthProvider } from './contexts/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { OverviewPage } from './pages/OverviewPage';
import { GuardsPage } from './pages/GuardsPage';
import { EventsPage } from './pages/EventsPage';
import { AnalyticsPage } from './pages/AnalyticsPage';

function App() {
  const [currentPath, setCurrentPath] = React.useState(window.location.pathname);

  React.useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const getPage = () => {
    switch(currentPath) {
      case '/':
        return <OverviewPage />;
      case '/guards':
        return <GuardsPage />;
      case '/events':
        return <EventsPage />;
      case '/analytics':
        return <AnalyticsPage />;
      default:
        return <OverviewPage />;
    }
  };

  return (
    <AuthProvider>
      <ProtectedRoute>
        <div className="min-h-screen bg-gray-50 flex">
          <Sidebar setCurrentPath={setCurrentPath} />
          <main className="flex-1 p-8 relative overflow-hidden">
            <Header />
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPath}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
              >
                {getPage()}
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </ProtectedRoute>
    </AuthProvider>
  );
}

export default App;