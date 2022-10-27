import React from 'react';
import ReactDom  from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Counter from './components/counter';


const App = () => {
   return (<Counter />);
};

ReactDom.render(<App />, document.getElementById('root'));