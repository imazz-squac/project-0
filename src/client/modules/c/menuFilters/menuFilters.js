import { LightningElement, api } from 'lwc';
import {filters} from './filters.js';

export default class MenuFilters extends LightningElement {
    @api
    categories = filters;
}