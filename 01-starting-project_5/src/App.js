import React, {useState, useCallback} from 'react';
import Button from './components/UI/Button/Button';

import './App.css';
import DemoOutput from './components/Demo/DemoOutput';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log('APP RUNNING');

  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle){
      setShowParagraph((prevState) => {
        return !prevState;
      })
    }
  }, [allowToggle]);
  // useCallback vai checkar se a função não mudou, e vai usar sempre a mesma função, a não ser que alguma dependency mude
  // isto, em conjunto com o React.memo, vai fazer com que por exemplo o Button não dê re-render

  const allowToggleHandler = () => {
    setAllowToggle(true);
  }

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph}/>
      <Button onClick={allowToggleHandler}>Allow Toggling!</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
