import { LightningElement, api, track } from 'lwc';
import { menu } from './menu.js';

export default class MenuPage extends LightningElement {

    @api
    menuItems = menu;

    updateFilters(event){
        let items = this.template.querySelectorAll('c-menu-category');

        items.forEach(function(item){
            item.filterUpdate(event.detail);
        });
    }
}