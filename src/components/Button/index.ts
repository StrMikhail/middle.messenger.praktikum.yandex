import Block from '../../utils/Block';
import template from './index.hbs';
import styles from './styles.scss';

interface IButton {
  type?: string;
  label: string;
  className: string,
  icon?: boolean,
  events: {
    click: (event: Event) => void;
  };
}

export class Button extends Block {
  constructor(props: IButton) {
    super({ type: 'button', ...props });
  }

  render() {
    return this.compile(template, { ...this.props, styles });
  }
}
