
import Block from '../../utils/Block';
import renderDOM from '../../utils/renderDOM';
import { Button } from '../Button';
import template from './index.hbs';
import styles from './style.scss';


export class Navigation extends Block {
  constructor() {
    super({});
  }

  init() {

    this.children.button_home = new Button({
      label: 'HOME',
      className: 'button__input',
      events: {
        click: () => {
          renderDOM('home');
        }
      }
    });

    this.children.button_login = new Button({
      label: 'LOGIN',
      className: 'button__input',
      events: {
        click: () => {
          renderDOM('signin');
        }
      }
    });
    this.children.button_register = new Button({
      label: 'REGISTER',
      className: 'button__input',
      events: {
        click: () => {
          renderDOM('signup');
        }
      }
    });
    this.children.button_404 = new Button({
      label: '404',
      className: 'button__input',
      events: {
        click: () => {
          renderDOM('erro_404');
        }
      }
    });
    this.children.button_500 = new Button({
      label: '500',
      className: 'button__input',
      events: {
        click: () => {
          renderDOM('error_500');
        }
      }
    });
    this.children.button_edit = new Button({
      label: 'EDIT',
      className: 'button__input',
      events: {
        click: () => {
          renderDOM('edit');
        }
      }
    });
  }

  render() {
    return this.compile(template, { ...this.props, styles });
  }
}
