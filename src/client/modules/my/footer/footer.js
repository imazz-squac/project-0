import { LightningElement } from 'lwc';

export default class Footer extends LightningElement {
    footerLinks = [
        {
        text: "WHERE TO BUY |",
        link: "https://shop.hasbro.com/en-us/where-to-buy"
        },{
            text: "SITE MAP |",
            link: "https://nerf.hasbro.com/en-us/sitemap"
        },{
            text: "CONSUMER CARE |",
            link: "https://consumercare.hasbro.com/en-us"
        },{
            text: "CORPORATE |",
            link: "https://hasbro.gcs-web.com/corporate"
        },{
            text: "PRIVACY POLICY |",
            link: "https://docs.hasbro.com/en-us/legal/privacy"
        },{
            text: "TERMS AND CONDITIONS OF USE |",
            link: "https://docs.hasbro.com/en-us/legal/terms"
        },{
            text: "CALIF. PRIVACY RIGHTS & NOTICES |",
            link: "https://docs.hasbro.com/en-us/legal/privacy#H"
        },{
            text: "DO NOT SELL MY PERSONAL INFORMATION |",
            link: "https://docs.hasbro.com/en-us/legal/privacy#right-to-opt"
        },{
            text:  "RESPONSIBLE DISCLOSURE POLICY",
            link: "https://docs.hasbro.com/upload/legal/responsible_disclosure_2020.pdf"
        },
    ]
}