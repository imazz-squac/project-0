import { LightningElement, api } from 'lwc';

export default class FilterCategory extends LightningElement {
    @api
    categoryName;

    @api
    options;
}