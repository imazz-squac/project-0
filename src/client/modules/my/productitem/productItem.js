import { LightningElement, api } from 'lwc';

export default class ProductItem extends LightningElement {
    @api brand;
    @api model;
    @api type;
    @api capacity;
    @api img;

}