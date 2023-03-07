
import { Navigation } from '../../components/Navigation';
import Block from '../../utils/Block';
import template from './index.hbs';
import styles from './styles.scss';

export class Error_500 extends Block {
    constructor() {
        super({}); 

    }
    init() {
        this.children.navigation = new Navigation();

    }
    render() {
        return this.compile(template, {...this.props, styles});
    }
}
