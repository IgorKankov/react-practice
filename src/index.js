// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './components/App';
// import reportWebVitals from './reportWebVitals';
// import 'semantic-ui-css/semantic.min.css'
// import './styles.scss'
// import {BrowserRouter} from "react-router-dom";
// import {Switch, Route} from "react-router";
// import {Provider} from "react-redux"

// import Home from "./components/router-lessons/home";
// import Contacts from "./components/router-lessons/contacts";
// import Posts from "./components/router-lessons/posts";
// import Post from "./components/router-lessons/post";
// import Error from "./components/router-lessons/error";
//
// ReactDOM.render(
//   <BrowserRouter>
//     <App>
//       <Switch>
//         <Route exact path='/' component={Home}/>
//         <Route path='/contacts' component={Contacts}/>
//         <Route exact path='/posts' component={Posts}/>
//         <Route path='/posts:id' component={Post}/>
//         <Route path='*' component={Error}/>
//       </Switch>
//     </App>
//   </BrowserRouter>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();



import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/redux-lesson/App';
import './styles.scss';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './components/redux-lesson/store';
import '@fortawesome/fontawesome-free/css/all.min.css';


ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));
registerServiceWorker();