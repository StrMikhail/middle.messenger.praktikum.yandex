// import { Input } from './../../components/Input/index';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Navigation } from '../../components/Navigation';
import Block from '../../utils/Block';
import template from './index.hbs';
import styles from './styles.scss';
import renderDOM from '../../utils/renderDOM';
import { validation } from '../../utils/validation';
import { checkValidate, submitForm } from '../../utils/submitForm';


export class SignIn extends Block {
    constructor() {
        super({}); 
    }

    init() {

      const that = this.children;
//Navigation_______________________________________________________________________________________
      that.navigation = new Navigation();
//Register button_______________________________________________________________________________________
      that.button_register = new Button({
          label: 'Зарегестрироваться',
          type: 'submit',
          className: 'button__contrast',
          events: {
            click: () => {
              renderDOM('signup');
            }
          }
        });
//Submit button_______________________________________________________________________________________
        that.button_enter = new Button({
          label: 'Войти',
          type: 'submit',
          className: 'button__classic',
          events: {
            click: (event) => submitForm(event, that, 'home')
          }
        });
//Login_______________________________________________________________________________________
        that.input_login = new Input({
          name: 'login',
          type: 'text',
          className: 'input__login',
          label: 'Логин',
          autocomplete: 'on',
          events: {
              focusin: () => {
                  (that.input_login as Input).clearError();
              },
              focusout: () => {
                  (that.input_login as Input)
                      .setError(checkValidate((that.input_login as Input).getData())!);
              }
            }
      });
//Password_______________________________________________________________________________________
        that.input_password = new Input({
            name: 'password',
            type: 'password',
            className: 'input__login',
            label:'Пароль',
            autocomplete: 'off',
            events: {
                focusin: () => {
                    (that.input_password as Input).clearError();
                },
                focusout: () => {
                    (that.input_password as Input)
                        .setError(checkValidate((that.input_password as Input).getData())!);
                }
              } 
        });
//_______________________________________________________________________________________
    }

    render() {
        return this.compile(template, {...this.props, styles});
    }
    
}
