import React, { useState } from 'react';
import './App.css';
import OurComponent from './components/OurComponent';

// import UpdateState from './components/state/UpdateState';
// import Props from './components/props/Props';
// import Lifecycle from './components/lifecycle/Lifecycle';

const App = () => {

  const [isVisible,setIsVisible] = useState(true);

  return (
    <div className="App">
      {/* <UpdateState /> */}
      {/* <Props /> */}
      {/* <Lifecycle /> */}
      <button onClick={() => {setIsVisible(!isVisible)}}>Toggle OurComponent</button>
      { isVisible && <OurComponent oneProp="thing 1" twoProp="thing 2"/> }
    </div>
  );
};

export default App;
