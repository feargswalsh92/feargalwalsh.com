import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

newFunction();
registerServiceWorker();
function newFunction() {
    (function (w, d, v3) {
        w.chaportConfig = { appId: '5c984a0d8102813e60ae8741' };
        if (w.chaport)
            return;
        v3 = w.chaport = {};
        v3._q = [];
        v3._l = {};
        v3.q = function () { v3._q.push(arguments); };
        v3.on = function (e, fn) {
        if (!v3._l[e])
            v3._l[e] = []; v3._l[e].push(fn);
        };
        var s = d.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = 'https://app.chaport.com/javascripts/insert.js';
        var ss = d.getElementsByTagName('script')[0];
        ss.parentNode.insertBefore(s, ss);
    })(window, document);
}

