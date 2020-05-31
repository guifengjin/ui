import React from 'react';
import Test from './components/Test'
import Button, { ButtonType, ButtonSize } from './components/Button'

function App() {
  return (
    <div className="App">
      <Test />

      <Button onClick={() => console.log(123)}>Nice</Button>
      <Button disabled>button</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large} >button</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Small} disabled >button</Button>
      
      <Button btnType={ButtonType.Link} href="http://www.baidu.com">button</Button>
      <Button btnType={ButtonType.Link} disabled>button</Button>   
    </div>
  );
}

export default App;
