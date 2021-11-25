import { LightningElement, track } from 'lwc';

export default class Search extends LightningElement {
    @track searchInput = "";

    handleChange(event) {
        this.searchInput = event.target.value;
        console.log('searchInput:', this.searchInput)
    }
    handleSubmit(event) {
        window.alert(this.searchInput)
        event.preventDefault()
    }
}