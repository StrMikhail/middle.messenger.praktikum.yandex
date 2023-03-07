import { Input } from './../components/Input/index';
import renderDOM, { ROUTES } from './renderDOM';
import { validation } from './validation';

interface ICheckVBalidate{
    value: string
    name: string
}
 

export function submitForm(event: Event, data: any, redirect?: keyof typeof ROUTES) {
    event.preventDefault();

    const childrens = Object.values(data).filter(i=> i instanceof Input);
    const inputsArray = childrens.filter(input => (input as Input));

    const input_size = inputsArray.length;
    let valid_counter = 0;

    inputsArray.forEach(input => {
        const error = checkValidate((input as Input).getData());
        if (error) {
            return (input as Input).setError(error);
        }
        ++valid_counter;
    });
    
    if(valid_counter === input_size) {
        if (redirect ) {
            renderDOM(redirect);
        }
        sendData(inputsArray);
    }

}

export function checkValidate(data: ICheckVBalidate) {
    return validation(data.value, data.name);
}

function sendData(data: any) {
    const submitData = {};
    data.map(input => { 
        const x = (input as Input).getData();
        submitData[x.name] = x.value;

    });
    console.log(submitData);
}
