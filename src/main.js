
import HomePage from './pages/HomePage'
import Introduce from './pages/Introduce';
import { render,router } from './utilities'
const app = document.querySelector('#app')

router.on('/', () => render(HomePage, app));
router.on('/introduce', () => render(Introduce, app));

router.resolve();