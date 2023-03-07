
import Block from '../../utils/Block';
import renderDOM from '../../utils/renderDOM';
import { Button } from '../Button';
import template from './index.hbs';
import styles from './style.scss';

export class Profile extends Block {
  constructor() {
    super({});
  }

  init() {

    this.children.button_close = new Button({
      label: 'close',
      icon: true,
      className: 'button__close',
      events: {
        click: () => {
          console.log('Закрыть');
          console.log(this.hide());
        }
      }
    });

    this.children.button_redact = new Button({
      label: 'Редактировать',
      className: 'button__contrast',
      events: {
        click: () => {
            renderDOM('edit');
        }
      }
    });

    this.children.button_logout = new Button({
      label: 'Выйти',
      // icon: true,
      // type: 'submit',
      className: 'button__danger',
      events: {
        click: () => {
          console.log('выход');
        }
      }
    });

  }
  render() {
    return this.compile(template, { ...this.props, styles });
  }
}
