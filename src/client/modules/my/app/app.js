import { LightningElement } from 'lwc';

export default class App extends LightningElement {
    darkMode = false;

    handleClick() {
        this.darkMode = !this.darkMode;
        console.log('darkMode:', this.darkMode)
    }
}
