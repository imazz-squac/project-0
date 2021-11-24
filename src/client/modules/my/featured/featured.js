import { LightningElement } from 'lwc';

export default class Featured extends LightningElement {
    productArray = [
        {
            imgSource: "../../../resources/featured_products/pharaoh.jpg",
            make: "NERF ULTRA",
            model: "PHARAOH"
        }, {
            imgSource: "../../../resources/featured_products/basr.jpeg",
            make: "NERF FORTNITE",
            model: "BASR-L"
        }, {
            imgSource: "../../../resources/featured_products/motostryke.jpg",
            make: "NERF MEGA",
            model: "MOTOSTRYKE"
        }, {
            imgSource: "../../../resources/featured_products/Commander.jpg",
            make: "NERF ELITE 2.0",
            model: "COMMANDER"
        }, {
            imgSource: "../../../resources/featured_products/elite.jpg",
            make: "NERF ELITE",
            model: "ELITE 2.0 TURBINE"
        }
    ]


}