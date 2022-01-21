import { useState, useEffect } from 'react';

const useOurTitleChanger = (newTitle) => {

  const [title, setTitle] = useState(newTitle);
  const whenTitleChanges = (event) => {
    setTitle(event.target.value);
  };

  useEffect(() => {
    document.title = title;
  }, [title]);

  return { whenTitleChanges, title };

};

export default useOurTitleChanger;