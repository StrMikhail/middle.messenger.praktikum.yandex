import loginPage from './pages/loginPage/loginPage.hbs';
import registerPage from './pages/loginPage/registerPage.hbs';
import home from './pages/home/home.hbs';
import editPage from './pages/editProfile/edit.hbs';
import pageError from './pages/error/404.hbs';
import serverError from './pages/error/500.hbs';
import { create } from 'handlebars';

function render(html) {
    const app = document.querySelector('#app');
    app.innerHTML = html;
}
const ROUTES = {
    home: home,
    login: loginPage,
    registration: registerPage,
    edit: editPage,

    404: pageError,
    500: serverError,
};

window.goToPage = function (name) {
    const page = ROUTES[name];
    render(page());
};
window.addEventListener('DOMContentLoaded', () => {
    const context = { name: 'Jong DOng' };
    const html = create(context);
    render(ROUTES.edit(html));
});
