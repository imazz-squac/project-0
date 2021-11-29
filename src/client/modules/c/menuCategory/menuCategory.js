import { LightningElement, api, track } from 'lwc';

export default class MenuCategory extends LightningElement {
    @api
    categoryName;

    @api
    items;

    @api
    display;

    constructor(){
        super();
        this.display = true;
    }

    @api filterUpdate(filter){
        let menuItems = this.template.querySelectorAll('c-menu-item');
        let hasItemDisplayed = false;
        menuItems.forEach(function(item){ 
            item.filterChange(filter);
            if(item.display) hasItemDisplayed = true;
        });
        this.display = hasItemDisplayed;
    }
}