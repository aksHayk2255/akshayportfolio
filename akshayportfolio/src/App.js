import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './components/home';

function App() {
  const [siteReady, setSiteReady] = useState(false);

  useEffect(() => {
    const minDisplay = new Promise((resolve) => {
      setTimeout(resolve, 600);
    });
    const windowLoaded = new Promise((resolve) => {
      if (document.readyState === 'complete') {
        resolve();
      } else {
        window.addEventListener('load', resolve, { once: true });
      }
    });

    let cancelled = false;
    Promise.all([minDisplay, windowLoaded]).then(() => {
      if (!cancelled) setSiteReady(true);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="app-shell">
      <div className="app-main" aria-hidden={!siteReady}>
        <Home />
      </div>
      {!siteReady && (
        <div
          className="site-loader"
          role="status"
          aria-live="polite"
          aria-busy="true"
        >
          <div className="site-loader__spinner" aria-hidden />
          <p className="site-loader__label">Loading Akshay's portfolio…</p>
        </div>
      )}
    </div>
  );
}

export default App;