import { LightningElement, api } from 'lwc';

export default class FilterCheckbox extends LightningElement {
    @api
    id;
    
    @api
    labelText;

    @api
    tag;

    updateFilters(event){
        let uFilter = this.tag;
        this.dispatchEvent(new CustomEvent('filterupdate',{bubbles: true, composed: true, detail: this.tag}));
    }
}