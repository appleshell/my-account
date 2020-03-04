import React from 'react';
import ReactDOM from 'react-dom';
import { LocaleProvider } from 'antd'
import zh_CN from 'antd/lib/locale-provider/zh_CN'
import Routes from './router'
import './assets/style/index.css';
import './assets/style/reset.css'



ReactDOM.render(
    <LocaleProvider locale={zh_CN}>
      <Routes/>
    </LocaleProvider>
  , document.getElementById('root'));
