import { LightningElement, api } from 'lwc';

export default class FooterSocials extends LightningElement {
   /* @api
    socials = [
        "https://www.dunkindonuts.com/content/dam/dd/img/icons/social/footer-social/twitter.svg",
        "https://www.dunkindonuts.com/content/dam/dd/img/icons/social/footer-social/facebook.svg",
        "https://www.dunkindonuts.com/content/dam/dd/img/icons/social/footer-social/instagram.svg",
        "https://www.dunkindonuts.com/content/dam/dd/img/icons/social/footer-social/youtube.svg",
    ] */

    @api
    socials = [
        "/resources/twitterIcon.svg"
    ]
}