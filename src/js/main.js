import './toggleMenu.js';
import { Router } from './router.js';

const router = new Router();

router.add('/', '/src/pages/home.html');
router.add('/universe', '/src/pages/universe.html');
router.add('/explore', '/src/pages/explore.html');
router.add(404, '/src/pages/404.html');

router.handle();

window.onpopstate = () => router.handle();
window.route = () => router.route();
