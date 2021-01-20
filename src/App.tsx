import React, { ChangeEvent, useState } from 'react';
import Input from './components/Input';
import "./styles/_global.scss";

const App: React.FC = () => {
  const [value, setValue] = useState<string>('');
  
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }
  return (
      <div>
          <h1>Template</h1>
          <Input
            name="home"
            onChange={ onChange }
            value={ value }
          />
      </div>
  );
}

export default App;
