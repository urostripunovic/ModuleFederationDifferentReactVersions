import Button from './Button';
import React from 'react';

const App = (props) => (
  <div
    style={{ border: '1px red solid' }}
    data-e2e="SHARED__REACT_BLOCK"
  >
    <h1>Remote Application - React Version {React.version}</h1>
    <h2>App 2</h2>
    <Button />
  </div>
);

export default App;
