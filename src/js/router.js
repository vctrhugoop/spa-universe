export class Router {
  routes = {};

  add(routeName, page) {
    this.routes[routeName] = page;
  }

  route(event) {
    const menuItem = document.querySelectorAll('.menuItem');
    event = event || window.event;
    event.preventDefault();

    for (let i = 0; i < menuItem.length; i++) {
      menuItem[i].classList.remove('active');
    }
    event.target.classList.add('active');

    window.history.pushState({}, '', event.target.href);

    this.handle();
  }

  handle() {
    const { pathname } = window.location;
    const route = this.routes[pathname] || this.routes[400];
    fetch(route)
      .then(data => data.text())
      .then(html => {
        document.getElementById('app').innerHTML = html;
      });
  }
}
