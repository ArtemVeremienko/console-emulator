import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'
import {createGlobalStyle, ThemeProvider} from "styled-components";

const Global = createGlobalStyle`
* {
 margin: 0;
 padding: 0;
 box-sizing: border-box;
 font-family: Consolas, monospace;
 color: #fff;
}
`

const theme = {
    colors: {
        primary: 'green',
        secondary: 'red'
    },
    media: {
        phone: '(max-width: 425px)',
        tablet: '(max-width: 768px) and (min-width: 425px)'
    }
}

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Global />
        <App/>
    </ThemeProvider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
