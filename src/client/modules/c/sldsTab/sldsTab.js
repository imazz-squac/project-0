import { LightningElement, api } from "lwc";

export default class SldsTab extends LightningElement {
    @api
    tabName;

    @api
    label;

    @api
    active;

    @api
    disabled;

    @api
    controls;

    @api
    id;

    constructor(){
        super();
        
    }

    connectedCallback(){
        this.controls = `tab_default-${this.tabName}`;
        this.id = `tab_default-${this.tabName}__item`;
    }

    renderedCallback(){
        let tabItem = this.template.querySelector('li');
        let tabLink = this.template.querySelector('a');

        if(this.active){
            tabItem.classList.add('slds-is-active');
            tabItem.setAttribute('aria-selected','true');
        }

        if(this.disabled) tabItem.classList.add('disabled');

        //tabLink.setAttribute('aria-controls',);
        //tabLink.setAttribute('id',)
    }

    swapTabs(event){
        if(this.disabled) return;
        this.dispatchEvent(new CustomEvent('tabswap',{bubbles: true, composed: true, detail: this.tabName}));
    }

    @api removeActive(){
        let tabItem = this.template.querySelector('li');
        let tabLink = this.template.querySelector('a');
        tabItem.classList.remove('slds-is-active');
        tabLink.toggleAttribute('aria-selected');
    }

    @api addActive(){
        let tabItem = this.template.querySelector('li');
        let tabLink = this.template.querySelector('a');
        tabItem.classList.add('slds-is-active');
        tabLink.toggleAttribute('aria-selected');
    }
}

//aria-controls="tab_default-about" id="tab_default-about__item"