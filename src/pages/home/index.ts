import { Input } from './../../components/Input/index';
import Block from '../../utils/Block';
import template from './index.hbs';
import styles from './style.scss';
import { Button } from '../../components/Button';
import { Message } from '../../components/Message';
import { ChatItem } from '../../components/ChatItem';
import { chats, messages } from './data';
import { Profile } from '../../components/Profile';
import { Navigation } from '../../components/Navigation';
import { submitForm } from '../../utils/submitForm';

export class HomePage extends Block {
    constructor() {
        super({}); 
    }

    init() {
      const that = this.children;
//Navigation_______________________________________________________________________________________
      that.navigation = new Navigation();
//Profile_______________________________________________________________________________________
      that.profile = new Profile();
//Chat list_______________________________________________________________________________________
      that.chats_list = chats.map(chat => new ChatItem({
        name: chat.name,
        time: chat.time,
        unreaded: chat.unreaded,
      }));
//Messages list_______________________________________________________________________________________
      that.messages_list = messages.map(message => new Message({
        text: message.text,
        time: message.time,
        myself: message.myself
      }));
//Profile button_______________________________________________________________________________________      
      that.button_avatar = new Button({
        label: 'AV',
        className: 'button__input',
        events: {
          click: () => {
            console.log('open profile modal');
          }
        }
      });
//Submit button_______________________________________________________________________________________
      that.button = new Button({
        label: 'send',
        icon: true,
        type: 'submit',
        className: 'button__input',
        events: {
          click: (event) => {
            submitForm(event, that),
            (that.input as Input).sendMessage();
          }
        }
      });
//Clip Button_______________________________________________________________________________________
      that.clip_button = new Button({
        label: 'attach_file',
        icon: true,
        className: 'button__clip',
        events: {
          click: () => {
            console.log('OPEN MODAL');
          }
        }
      }); 
//Input message_______________________________________________________________________________________
      that.input = new Input({
        name: 'message',
        type: 'text',
        className: 'input__footer',
        placeholder: 'Введите сообщение...',
        autocomplete: 'off' ,
        events: {
          focusin: () => {
              (that.input as Input).clearError();
          },
          focusout: () => {
              (that.input as Input).clearError();
          }
        }
      });
//_______________________________________________________________________________________

  }
    render() {
        return this.compile(template, {...this.props, styles});
      }
}
