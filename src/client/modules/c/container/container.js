import { LightningElement , api } from 'lwc';
import { pages } from './pages';

export default class Container extends LightningElement {
    @api
    tabs;

    constructor(){
        super();
        this.tabs = pages;
    }

    swapTabs(event){
        let targetContent = this.template.querySelector(`.${event.detail}`);
        let hiddenContent = this.template.querySelector('.slds-show');

        hiddenContent.classList.add('slds-hide');
        hiddenContent.classList.remove('slds-show');
        targetContent.classList.remove('slds-hide');
        targetContent.classList.add('slds-show');
    }
    
}