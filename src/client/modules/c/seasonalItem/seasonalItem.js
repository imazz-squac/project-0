import { LightningElement, api } from "lwc";

export default class SeasonalItem extends LightningElement {
    @api
    imagePath;

    @api
    imageAlt;

    @api
    itemDescription;

    @api
    itemName;
}