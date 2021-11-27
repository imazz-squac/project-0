import { LightningElement, api, track } from 'lwc';

export default class MenuItem extends LightningElement {
    @api
    itemName;

    @api
    itemImage;

    @api
    itemDescription;

    @api
    tags;

    @api
    display;

    constructor(){
        super();
        this.display=true;
    }

    renderedCallback(){
        let imageContainer = this.template.querySelector('.item-image');
        if(imageContainer){
            imageContainer.style.backgroundImage = `url(${this.itemImage})`;
        }
        
    }

    @api filterChange(filter){
        this.display = (this.tags.indexOf(filter)!=-1) ? !this.display:this.display;
    }
}