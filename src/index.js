import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import registerServiceWorker from './registerServiceWorker';

const config = {
    apiKey: "AIzaSyCdtGIVB2t4RoYihKtRsAOew7yqgbnNORM",
    authDomain: "fir-demo-8ace1.firebaseapp.com",
    databaseURL: "https://fir-demo-8ace1.firebaseio.com",
    projectId: "fir-demo-8ace1",
    storageBucket: "fir-demo-8ace1.appspot.com",
    messagingSenderId: "58012065822"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
