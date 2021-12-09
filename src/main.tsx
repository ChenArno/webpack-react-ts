import React from 'react';
import ReactDOM from 'react-dom';
import '@/assets/css/index.less';
import { Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'dayjs/locale/zh-cn';
import { ConfigProvider } from 'antd';
import Routes from '@/Routes';
import store from '@/store';


console.log(process.env.REACT_APP_VERSION)

const render = () => {
  ReactDOM.render(
    // <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider locale={zh_CN}>
        <Routes />
      </ConfigProvider>
    </Provider>,
    // </React.StrictMode>,
    document.getElementById('root')
  );
}

render();

// 类型“NodeRequire”上不存在属性“context”  npm i -D @types/webpack-env
if (module.hot) {
  module.hot.accept('./Routes', () => {
    //因为在App里使用的是export default语法，这里使用的是require,默认不会加载default的，所以需要手动加上
    // const NextApp = require('./routes').default
    // 重新渲染到 document 里面
    render()
  })
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
