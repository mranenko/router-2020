import Route from './route.js';

/* HTML content templates */
import About from '../templates/about.js';
import Contact from '../templates/contact.js';
import Welcome from '../templates/welcome.js';


export default class Router {
  static routerLinkClass = 'router-link';
  static routerLinkActiveClass = 'router-link-active';
  static routes = [
    new Route({
      isDefault: true,
      path: '',
      title: 'Welcome',
      template: Welcome.template,
    }),

    new Route({
      path: 'about',
      title: 'About',
      template: About.template,
    }),

    new Route({
      path: 'contact',
      title: 'Contact',
      template: Contact.template,
    }),
  ];


  static initialize() {
    /* load default (home) route data */
    const defaultRoute = Router.getDefaultRoute();
    Router.setActive(defaultRoute.path);
    defaultRoute.load();

    window.onload = () => {
      const routerLinks = Router.getRouterLinks();

      /* router link click handlers */
      routerLinks.forEach(routerLink => {
        routerLink.addEventListener('click', event => {
          event.preventDefault();

          const href = Router.getHref(routerLink);
          const route = Router.getRoute(href);

          route.load();
          route.push();
          Router.setActive(href);
        });
      });
    };

    /* browser history back/forward button click handlers */
    window.addEventListener('popstate', event => {
      const path = event.state ? event.state.path : '';
      const route = path ? Router.getRoute(path) : Router.getDefaultRoute();

      route.load();
      Router.setActive(path);
    });
  }


  /**
   * Return all router link elements
   */

  static getRouterLinks() {
    return document.querySelectorAll(`.${Router.routerLinkClass}`);
  }


  /**
   * Return a route object corresponding to the path specified
   */

  static getRoute(path) {
    return Router.routes.find(route => (route.path === path)) || Router.getDefaultRoute();
  }


  /**
   * Return a default (home) route object (or the first item in the routes collection)
   */

  static getDefaultRoute() {
    return Router.routes.find(route => (route.isDefault === true)) || Router.routes[0];
  }


  /**
   * Return the 'href' attribute without leading or trailing '/', if any
   */

  static getHref(anchorElement) {
    if (!(anchorElement  instanceof HTMLAnchorElement) || !anchorElement.hasAttribute('href')) {
      return '';
    }

    let href = anchorElement.getAttribute('href');
    href = href.replace(/(^\/)|(\/$)/g, '');

    return href;
  }


  /**
   * Add CSS class to link(s) corresponding to current route
   */

  static setActive(path) {
    const routerLinks = Router.getRouterLinks();

    routerLinks.forEach(routerLink => {
      if (Router.getHref(routerLink) === path) {
        routerLink.classList.add(Router.routerLinkActiveClass);
      }
      else {
        routerLink.classList.remove(Router.routerLinkActiveClass);
      }
    });
  }
}
