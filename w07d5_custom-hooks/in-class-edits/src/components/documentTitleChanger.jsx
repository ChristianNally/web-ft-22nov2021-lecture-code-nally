import React from 'react';
import useOurTitleChanger from '../hooks/useOurTitleChanger';

// Step 1: write a component with whatever functionality it needs
// Step 2: make a new file inside a ./hooks/ directory
// Step 3: have that new file export a function whose name starts with use e.g. useMyCustomHookName
// Step 4: factor out all the functionality from your component into the new custom hook.
// Step 5: call your new hook
// Step 6: make sure the new hook's function returns all the values and functions you'll need
//          in your component

const DocumentTitleChanger = () => {

  const { whenTitleChanges, title } = useOurTitleChanger('monkeyFuzz');

  return (
    <div>
      <input 
        value={title}
        onChange={whenTitleChanges}
      />
    </div>
  );
};

export default DocumentTitleChanger;
