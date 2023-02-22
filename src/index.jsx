import React from 'react';
import ReactDom from 'react-dom';
import { App } from './views/App';

const root = document.getElementById("root");
ReactDom.createRoot(root).render(<App/>);