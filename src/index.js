import {MDCTopAppBar} from '@material/top-app-bar/index';

const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);

import {MDCTemporaryDrawer} from '@material/drawer';

const drawer = new MDCTemporaryDrawer(document.querySelector('.mdc-drawer--temporary'));
document.querySelector('.menu').addEventListener('click', () => drawer.open = true);
document.querySelector('.close').addEventListener('click', () => drawer.open = false);
