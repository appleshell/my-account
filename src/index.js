import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd'
import { Provider } from 'react-redux'
import zh_CN from 'antd/lib/locale-provider/zh_CN'
import Routes from './router'
import './assets/style/index.css';
import './assets/style/reset.css'
import * as Sentry from '@sentry/browser'
import store from './redux/store'

Sentry.init({ dsn: 'https://b25cb2b55cbd41668f20bfd73a42896b@o383632.ingest.sentry.io/5213916' })

ReactDOM.render(
  <Provider store={store}>
    <ConfigProvider locale={zh_CN}>
      <Routes />
    </ConfigProvider>
  </Provider>
  , document.getElementById('root'));
