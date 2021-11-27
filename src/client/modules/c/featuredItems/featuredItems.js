import { LightningElement, api } from 'lwc';
import {featuredItems} from './featured.js';

export default class Container extends LightningElement {
    @api
    items;

    @api
    imageSrc;

    @api
    itemName;

    @api
    itemDescription;

    constructor(){
        super();
        this.items = featuredItems;
    }

    connectedCallback() {
        this.imageSrc= this.items[0].image;
        this.itemName= this.items[0].name;
        this.itemDescription= this.items[0].desc;
    }

    rotateItem(event){
        let target = event.currentTarget;
        let childNodeList = target.parentNode.children;
        let oldTarget = target.parentNode.querySelector('.slds-is-active');
        
        oldTarget.classList.remove('slds-is-active');
        oldTarget.setAttribute('aria-selected','false');


        for(let child in childNodeList){
            if(childNodeList[child]==target){
                let newItem = childNodeList[child];
                
                this.imageSrc = this.items[child].image;
                this.itemName = this.items[child].name;
                this.itemDescription= this.items[child].desc;

                let newLink = newItem.querySelector('a');

                newLink.classList.add('slds-is-active');
                newLink.setAttribute('aria-selected','true');
                
            }
        }
    }
}


/*

<div id="content-id-67" class="slds-carousel__panel" role="tabpanel" aria-hidden="false" aria-labelledby="indicator-id-70">
              <a href="#" class="slds-carousel__panel-action slds-text-link_reset" tabindex="0">
                <div class="slds-carousel__image">
                  <img src="/assets/images/carousel/carousel-01.jpg" alt="Visit App Exchange" />
                </div>
                <div class="slds-carousel__content">
                  <h2 class="slds-carousel__content-title">Visit App Exchange</h2>
                  <p>Extend Salesforce with the #1 business marketplace.</p>
                </div>
              </a>
            </div>
*/
