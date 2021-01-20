import React, { ChangeEvent } from 'react';
import classes from './styles.module.scss';

interface Props {
    name: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Props> = ({
    name,
    value,
    onChange
}) => {
    return (
        <input
          className={ classes.app__input }
          name={ name }
          onChange={ onChange }
          type="text"
          value={ value }
        />
    );
}

export default Input;