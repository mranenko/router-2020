import Router from './modules/router.js';


export default class App {
  static title = 'Vanilla JS Router';
  static root = document.getElementById('root');


  static initialize() {
    Router.initialize();
  }


  static setTitle(title) {
    document.title = title ? `${title} - ${App.title}` : App.title;
  }


  static setTemplate(template) {
    if (App.root) {
      App.root.innerHTML = template;
    }
  }
}


App.initialize();
