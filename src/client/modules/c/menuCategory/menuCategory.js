import { LightningElement, api, track } from 'lwc';

export default class MenuCategory extends LightningElement {
    @api
    categoryName;

    @api
    items;

    @api filterUpdate(filter){
       let menuItems = this.template.querySelectorAll('c-menu-item');

       menuItems.forEach(function(item){
           item.filterChange(filter);
       });
    }

}