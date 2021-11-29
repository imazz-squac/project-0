import { LightningElement, api } from "lwc";

export default class SldsTabsNav extends LightningElement {
    @api
    tabs;

    swapTabs(event){
        console.log(event.detail);

        let tabs = this.template.querySelectorAll('c-slds-tab');
        let targetTab = this.template.querySelector(`.${event.detail}`);

        tabs.forEach(function(tab){
            tab.removeActive();
        });

        targetTab.addActive();

    }
}