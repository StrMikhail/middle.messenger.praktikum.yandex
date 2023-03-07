
const EMAIL= new RegExp(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/);
const PHONE = new RegExp(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/);
const LOGIN = new RegExp(/^[a-z]+([-_]?[a-z0-9]+){0,2}$/i);
const NAME = new RegExp(/^[a-zA-Zа-яА-Я]+$/);
const PASSWORD = new RegExp(/^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d).*$/);


export function validation(value: string, name: string) {
    switch (name) {
        case "email":
            if(!value){
                return "Введите email";
            }
            if(!EMAIL.test(value)) {
                return 'Введите корректный email';
           }
            return null;

        case "phone":
            if(!value){
                return "Введите номер теоефона";
            }
            if(!PHONE.test(value)) {
                return 'Введите корректный номер телефона';
           }
            return null;

        case "login": 
            if(!value){
                return "Введите свой логи";
            }
            if(!LOGIN.test(value)) {
                return 'Логин должен состоять из литинских букв';
           }
            return null;
            
        case "chat_name": 
        case "first_name":
            if (!value) {
                return 'Введите свое имя';
            } 
            if (!NAME.test(value)) {
                return 'В имени не может быть цифр';
            }
           return;

        case "second_name":
            if (!value) {
                return 'Введите свою фамилию';
            } 
            if (!NAME.test(value)) {
                return 'В фамилии не может быть цифр';
            }
           return;

        case "message":
        if (!value) {
            return 'Невозможно отправить пустое сообщение';
        } 
        return;

        case "password":
            if (value.length === 0) {
                return 'Введите пароль';
            } 
            if (value.length < 8) {
                return 'Пароль должен быть больше 8 символов';
            }
            if (!PASSWORD.test(value)) {
                return "Пароль должен состоять из латинских букв и цифр";
            }
            
            return;
    }
}
