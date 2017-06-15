import 'react';
import './main.css';
import component from './component';
import { bake } from './shake';

bake();

if (process.env.NODE_ENV === 'development') {
  console.log('hello from dev');
}

if (process.env.NODE_ENV === 'production') {
  console.log('hello from prod');
}

document.body.appendChild(component());
