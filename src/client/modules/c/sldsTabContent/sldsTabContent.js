import { LightningElement, api } from "lwc";

export default class SldsTabsContent extends LightningElement {

    @api
    show;

    @api
    tabName;

    @api
    id;

    @api
    labelledby;

    connectedCallback(){
        this.id = `tab_default-${this.tabName}`;
        this.labelledby = `tab_default-${this.tabName}__item`;
    }

    @api toggleShown(){
        let content = this.template.querySelector('div');
        content.classList.toggle('slds-hide');
        content.classList.toggle('slds-show');
    }
}