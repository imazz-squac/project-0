import { LightningElement, track, api } from 'lwc';

export default class Search extends LightningElement {
    @track searchInput = "";
    @api darkmode;

    handleChange(event) {
        this.searchInput = event.target.value;
        console.log('searchInput:', this.searchInput)
        console.log('darkMode:', this.darkmode)
    }
    handleSubmit(event) {
        window.alert(this.searchInput)
        event.preventDefault()
    }
}