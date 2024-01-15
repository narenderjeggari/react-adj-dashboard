import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store';
import DashboardLayout from './features/dashboard/components/DashboardLayout/DashboardLayout';

function App() {
  return (
    <Provider store={store}>
      <div className="h-full">
        <DashboardLayout />
      </div>
    </Provider>
  );
}

export default App;
