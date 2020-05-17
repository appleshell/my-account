import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd'
import zh_CN from 'antd/lib/locale-provider/zh_CN'
import Routes from './router'
import './assets/style/index.css';
import './assets/style/reset.css'
import * as Sentry from '@sentry/browser'

Sentry.init({ dsn: 'https://b25cb2b55cbd41668f20bfd73a42896b@o383632.ingest.sentry.io/5213916' })

ReactDOM.render(
  <ConfigProvider locale={zh_CN}>
    <Routes />
  </ConfigProvider>
  , document.getElementById('root'));
