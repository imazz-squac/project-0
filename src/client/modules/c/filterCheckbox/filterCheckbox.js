import { LightningElement, api } from 'lwc';

export default class FilterCheckbox extends LightningElement {
    @api
    id;
    
    @api
    labelText;
}