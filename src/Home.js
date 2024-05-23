import React, { useEffect } from 'react';

function Home({ visits, incrementVisits, bannerId }) {
  useEffect(() => {
    incrementVisits();
  }, []); // Add an empty dependency array

  return (
    <div>
      <h1>Home</h1>
      <p>Banner ID: {bannerId}</p>
      <p>Home page visited {visits} times</p>
    </div>
  );
}

export default Home;