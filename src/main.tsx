import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return <div>Hello world</div>;
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
