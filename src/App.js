import React, { useState, useEffect } from 'react';
import data from './data';
import Article from './Article';
import { CiDark } from 'react-icons/ci'
import { MdDarkMode } from 'react-icons/md'

const getStorageTheme = () => {
  let theme = 'light-theme';
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  }
  return theme;
};

function App() {
  const [theme, setTheme] = useState(getStorageTheme());

  const toggleTheme = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
    } else {
      setTheme('light-theme');
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);
  return (
    <main>
      <nav>
        <div className="nav-center">
          <h1>Dark-Mode</h1>
          <div className="btn" onClick={toggleTheme}>
            {theme === 'light-theme' ? <CiDark size={40} /> : <MdDarkMode size={40} />}
          </div>
        </div>
      </nav>
      <section className="articles">
        {data.map((item) => {
          return <Article key={item.id} {...item} />;
        })}
      </section>
    </main>
  );
}

export default App;