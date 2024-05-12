import { useState } from "react";
import type { RadioChangeEvent } from 'antd';
import { Radio } from 'antd';

const RadioButton: React.FC = () => {
    const [value, setValue] = useState(1);
  
    const onChange = (e: RadioChangeEvent) => {
      console.log('radio checked', e.target.value);
      setValue(e.target.value);
    };
  
    return (
      <Radio.Group onChange={onChange} value={value}>
        <Radio value={public}>A</Radio>
        <Radio value={2}>B</Radio>
      </Radio.Group>
    );
  };
  
  export  RadioButton;

function JoinGame() {
    const [value, setValue] = useState(1);

    const onChange = (e: RadioChangeEvent) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };
    return (
        <div className="flex flex-col">
            <div>
                <h2>Modes: </h2>
            </div>
            <div>
                <h2>Type: </h2>

            </div>
        </div>
    );
}

export default JoinGame;