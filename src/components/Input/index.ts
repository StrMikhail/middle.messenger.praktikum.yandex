import Block from '../../utils/Block';
import template from './index.hbs';
import styles from './style.scss';

interface IInput {
  name: string
  type: string
  className: string
  label?: string
  placeholder?: string
  autocomplete?: 'on' | 'off'
  error?: string
  events?: {
    focusin: () => void,
    focusout: () => void
  }
}

export class Input extends Block {
  constructor(props: IInput) {
    super(props);
  }


  sendMessage(){
    const input = (this.element as HTMLInputElement);
    return (input.children[0] as HTMLInputElement ).value = '';
  }

  clearError(){
    if (!(this.element as HTMLInputElement).children[2]) {
      return (this.element as HTMLInputElement).children[1].textContent = '';
    }
    return (this.element as HTMLInputElement).children[2].textContent = '';
  }
  setError(value: string | null) {
    if (!(this.element as HTMLInputElement).children[2]) {
      return (this.element as HTMLInputElement).children[1].textContent = value;
  }
    return (this.element as HTMLInputElement).children[2].textContent = value;
  }


  public getData() {
    const input: any = (this.element as HTMLElement).querySelector('input');
    const name = input.name;
    const value = input.value;
    return {name, value};
  }

  render() {
    return this.compile(template, { ...this.props, styles });
  }
}
