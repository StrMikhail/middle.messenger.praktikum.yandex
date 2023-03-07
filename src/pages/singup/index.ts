import { Button } from './../../components/Button/index';
import { Input } from './../../components/Input/index';
import { Navigation } from '../../components/Navigation';
import Block from '../../utils/Block';
import { checkValidate, submitForm } from '../../utils/submitForm';
import template from './index.hbs';
import styles from './styles.scss';

export class SignUp extends Block {
    constructor() {
        super({}); 

    }

    init() {
        const that = this.children;

//Navigation_______________________________________________________________________________________
        that.navigation = new Navigation();
//Submit button_______________________________________________________________________________________
        that.button_enter = new Button({
            label: 'Создать аккаунт',
            type: 'submit',
            className: 'button__classic',
            events: {
                click: (event) => submitForm(event, that, 'home')
            }
        });
//Name_______________________________________________________________________________________
        that.input_firstName = new Input({
            name: 'first_name',
            type: 'text',
            className: 'input__login',
            label: 'Имя',
            autocomplete: 'on',
            events: {
                focusin: () => {
                    (that.input_firstName as Input).clearError();
                },
                focusout: () => {
                    (that.input_firstName as Input)
                        .setError(checkValidate((that.input_firstName as Input).getData())!);
                }
            }
        });
//Surname_______________________________________________________________________________________
        that.input_secondName = new Input({
                name: 'second_name',
                type: 'text',
                className: 'input__login',
                label: 'Фамилия',
                autocomplete: 'on',
                events: {
                    focusin: () => {
                        (that.input_secondName as Input).clearError();
                    },
                    focusout: () => {
                        (that.input_secondName as Input)
                            .setError(checkValidate((that.input_secondName as Input).getData())!);
                    }
                }
            });
//Chatname_______________________________________________________________________________________
        that.input_chatName = new Input({
            name: 'chat_name',
            type: 'text',
            className: 'input__login',
            label: 'Имя в чате',
            autocomplete: 'on',
            events: {
                focusin: () => {
                    (that.input_chatName as Input).clearError();
                },
                focusout: () => {
                    (that.input_chatName as Input)
                        .setError(checkValidate((that.input_chatName as Input).getData())!);
                }
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
//Email_______________________________________________________________________________________
        that.input_email = new Input({
            name: 'email',
            type: 'text',
            className: 'input__login',
            label: 'Email',
            autocomplete: 'on',
            events: {
                focusin: () => {
                    (that.input_email as Input).clearError();
                },
                focusout: () => {
                    (that.input_email as Input)
                        .setError(checkValidate((that.input_email as Input).getData())!);
                }
            }
        });
//Phone_______________________________________________________________________________________
        that.input_phone = new Input({
            name: 'phone',
            type: 'text',
            className: 'input__login',
            label: 'Телефон',
            autocomplete: 'on',
            events: {
                focusin: () => {
                    (that.input_phone as Input).clearError();
                },
                focusout: () => {
                    (that.input_phone as Input)
                        .setError(checkValidate((that.input_phone as Input).getData())!);
                }
            }
        });
//Password_______________________________________________________________________________________
        that.password = new Input({
            name: 'password',
            type: 'text',
            className: 'input__login',
            label: 'Новый пароль',
            autocomplete: 'off',
            events: {
                focusin: () => {
                    (that.input_newPassword as Input).clearError();
                },
                focusout: () => {
                    (that.input_newPassword as Input)
                        .setError(checkValidate((that.input_newPassword as Input).getData())!);
                }
                }
        });
//_______________________________________________________________________________________
    }

    render() {
        return this.compile(template, {...this.props, styles});
    }
}
