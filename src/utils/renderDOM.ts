import { HomePage } from '../pages/home';
import { SignIn } from '../pages/signin';
import { SignUp } from '../pages/singup';
import { Error_404 } from '../pages/error_404';
import { Error_500 } from '../pages/error_500';
import { Edit } from '../pages/edit';

export const ROUTES = {
    home: HomePage,
    signin: SignIn,
    signup: SignUp,
    erro_404: Error_404,
    error_500: Error_500,
    edit: Edit
};

function renderDOM(route: keyof typeof ROUTES) {
    const root : Element | null = document.querySelector('body');
    const PageComponent = ROUTES[route];

    root!.innerHTML = '';

    const page = new PageComponent();

    
    root!.append(page.element!);

    page.dispatchComponentDidMount();
}

export default renderDOM;
