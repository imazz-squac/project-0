import { LightningElement, api } from 'lwc';
import { seasonalItems } from './seaonal';

export default class Container extends LightningElement {
    @api
    items;

    constructor(){
        super();
        this.items = seasonalItems;
    }
}