const style = document.createElement('link');  
style.rel = 'stylesheet';
style.href = './assets/styles/style.css';

const googleapis = document.createElement('link');
googleapis.rel = 'preconnect';
googleapis.href = 'http://fonts.googleapis.com';

const gstatic = document.createElement('link');
gstatic.rel = 'preconnect';
gstatic.href ='http://fonts.gstatic.com';
gstatic.crossOrigin = '';



style.setAttribute('rel','stylesheet');
style.setAttribute('href','./assets/styles/style.css');

document.head.appendChild(style);