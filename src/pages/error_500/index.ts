
import { Navigation } from '../../components/Navigation';
import Block from '../../utils/Block';
import template from './index.hbs';
import styles from './styles.scss';

export class Error_500 extends Block {
    constructor() {
        super({}); 
        // this.element?.setAttribute('id', 'app')
        
        // this.element?.classList.add('form_page__form-input')
    }
    init() {
        this.children.navigation = new Navigation();

    }
    // init() {
    //     this.children.input_login = new Input( {
    //         id: 'some',
    //         name: 'login'
    //     }),
    //     this.children.input_password = new Input( {
    //         id: 'some',
    //         name: 'password',
    //         label:'>'
    //     })
    // }
    render() {
        // console.log(styles)
        return this.compile(template, {...this.props, styles});
    }
}
