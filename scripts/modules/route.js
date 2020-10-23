import App from '../app.js';


export default class Route {
  constructor({isDefault, path, title, template}) {
    this.isDefault = isDefault ? isDefault : false;
    this.path = path;
    this.title = title;
    this.template = template;
  }


  /**
   * Load template and set page title corresponding to this route
   */

  load() {
    App.setTitle(this.title);
    App.setTemplate(this.template);
  }


  /**
   * Push route data to browser history
   */

  push() {
    window.history.pushState(
      { path: this.path, title: this.title },
      this.title,
      this.path
    );
  }
}
