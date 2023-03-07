
import Block from '../../utils/Block';
import template from './index.hbs';
import styles from './style.scss';

interface IMessage {
  text: string
  time: string
  myself?: boolean
}

export class Message extends Block {
  constructor(props: IMessage) {
    super(props);
  }

  render() {
    return this.compile(template, { ...this.props, styles });
  }
}
