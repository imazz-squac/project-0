import { LightningElement, api } from 'lwc';

export default class SocialIcon extends LightningElement {
    @api
    iconLink;

    renderedCallback(){
        //this.template.querySelector('.social-icon').style.maskImage = `url({iconLink})`;
    }
}

