//将js文件从html中拆出来，会有跨域问题
import React from 'react';
import ReactDOM from 'react-dom/client'; 
import App from "./App"

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);