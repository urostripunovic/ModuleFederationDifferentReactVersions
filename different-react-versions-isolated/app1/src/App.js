import React, { useEffect, useState } from 'react';
import { inject, cleanup } from 'app2/appInjector';

const parentElementId = 'parent';

const MFE = React.lazy(() => import("app2/app2Btn"))

const App = () => {

  const [count, setCount] = useState(0);

  function changeCount() {
    setCount(count => count + 1);
  }

  useEffect(() => {
    inject(parentElementId);
    return () => cleanup(parentElementId);
  }, []);

  // App2 will be injected in the div with parentElementId
  return (
    <div>
      <h1>Host Application - React Version {React.version}</h1>
      <h2>App 1</h2>
      <h2>Count from App 2 click {count}</h2>
      <div id={parentElementId}> </div>
      <React.Suspense fallback={<div> ...loading </div>}>
        MFE Loading
        <MFE />
      </React.Suspense>
      
    </div>
  );
};

export default App;
