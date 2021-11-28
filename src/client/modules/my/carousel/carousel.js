import '@lwc/synthetic-shadow';
import { LightningElement } from 'lwc';

export default class Carousel extends LightningElement {

    selectElement(index){
        
        // Store all indicators
        let indicators = this.template.querySelectorAll('.slds-carousel__indicator');
        // Store all panels
        let panels = this.template.querySelectorAll('.slds-carousel__panel');
        // Store selected indicator
        let sIndicator = index.target;
        // Store selected panel
        let sPanelContentId = index.target.getAttribute('aria-controls')
        let sPanel = this.template.querySelector(`#${sPanelContentId}`)
        // Store carousel
        let carousel = this.template.querySelector('.slds-carousel__panels')
      
        // Set all indicators anchors aria-selected attribute to false, 
        // Set all indicators anchors tabindex attribute to -1
        // Remove 'slds-is-active' from all indicators anchors class 
        indicators.forEach(i=>{
            i.querySelector(['a']).setAttribute('aria-selected', 'false');
            i.querySelector(['a']).setAttribute('tabindex', '-1');
            i.querySelector(['a']).classList.remove('slds-is-active')
        })
        // Selected indicator’s anchor has aria-selected="true"
        // Selected indicator’s anchor has tabindex="0"
        sIndicator.setAttribute('aria-selected','true');
        sIndicator.setAttribute('tabindex', '0');
        sIndicator.classList.toggle('slds-is-active')
        // Each tab panel has an aria-hidden attribute whose value is toggled based on which panel is visible
        panels.forEach(p=>{
            p.querySelector(['a']).setAttribute('aria-hidden', 'true');
            p.querySelector(['a']).setAttribute('tabindex', '-1');
        })
        // Selected panels’s anchor has aria-hidden="true"
        // Selected panels’s anchor has tabindex="0"
        sPanel.setAttribute('aria-hidden','false');
        sPanel.setAttribute('tabindex', '0');
        // Update transformX style for carousel
        switch(sPanel.getAttribute('id')){
            case 'content-id-61-4':
                carousel.style.transform = `translateX(0%)`;
                break;
            case 'content-id-62-4':
                carousel.style.transform = `translateX(-100%)`;
                break;
            case 'content-id-63-4':
                carousel.style.transform = `translateX(-200%)`;
                break;
            default:
                console.log('error switching panels...')
                break;
        }

        // When the Carousel is set to auto-play, the HTML for the pause button is required to precede the HTML of the tab set

    }

}