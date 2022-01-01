import React from 'react';
import InputWrapper from './InputWrapper';

export default function Header(props) {
    return (
        <header>
            <h1>To Do List</h1>
            <h5>-----------------------------------by Tristan Bey Kusuma (2008561053)----------------------------------</h5>
            <InputWrapper {...props}/>
        </header>
    );
}
