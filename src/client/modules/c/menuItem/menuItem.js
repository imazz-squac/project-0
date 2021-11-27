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

    filtered;

    constructor(){
        super();
        this.display=true;
        this.filtered = [];
    }

    renderedCallback(){
        let imageContainer = this.template.querySelector('.item-image');
        if(imageContainer){
            imageContainer.style.backgroundImage = `url(${this.itemImage})`;
        }
        
    }

    @api filterChange(filter){
        let filtered = this.filtered.indexOf(filter);
        if(filtered!=-1){
            this.filtered.splice(filtered);
            if(this.filtered.length==0) this.display = true;
        }
        else if(this.tags.indexOf(filter)!=-1){
            this.display = false;
            this.filtered.push(filter);
        }
        //this.display = (this.tags.indexOf(filter)!=-1) ? !this.display:this.display;
    }
}