import { LightningElement } from 'lwc';

export default class Container extends LightningElement {
    /*
    swapTabs(event){
        let activeTab = this.template.querySelector('.slds-is-active');
        let activeLink = activeTab.querySelector('a');
        let activeContent = this.template.querySelector('.slds-show');

        let targetTab = event.currentTarget;
        let targetLink = targetTab.querySelector('a');
        let targetControls = targetLink.getAttribute('aria-controls');
        let targetContent = this.template.querySelector(`#${targetControls}`);
        
        activeTab.classList.remove('slds-is-active');
        activeLink.toggleAttribute('aria-selected');
        activeContent.classList.remove('slds-show');
        activeContent.classList.add('slds-hide');

        targetTab.classList.add('slds-is-active');
        targetLink.toggleAttribute('aria-selected');
        targetContent.classList.remove('slds-hide');
        targetContent.classList.add('slds-show');

    }
    */
}