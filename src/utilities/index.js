
import Navigo from 'navigo'; // When using ES modules.

const router = new Navigo('/');
const render = (page, target) => {
    target.innerHTML = page();
  }

export { render ,router}