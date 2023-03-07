
import Block from '../../utils/Block';
import template from './index.hbs';
import styles from './style.scss';

interface IChatItem {
  name: string
  time: string
  className?: string
  unreaded?: number
  // placeholder: string
}

export class ChatItem extends Block {
  constructor(props: IChatItem) {
    super(props);
  }

  render() {
    return this.compile(template, { ...this.props, styles });
  }
}
