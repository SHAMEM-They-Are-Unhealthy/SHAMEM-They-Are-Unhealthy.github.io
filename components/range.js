import "./range.css"

class Range extends HTMLElement {
    static get observedAttributes() {
        return ["number", "vid", "other-id", "min", "max", "value", "prefix", "suffix"];
    }

    constructor() {
        super();
    }

    connectedCallback() {
        if (this.getAttribute("number") != "") {
            this.innerHTML = `
            <div class="rangeDiv">
                <input type="range" class="range" other-id="${this.getAttribute("vid")}-text" min="${this.getAttribute("min")}" max="${this.getAttribute("max")}" value="${this.getAttribute("value")}" id="${this.getAttribute("vid")}" prefix="${this.getAttribute("prefix")}" suffix="${this.getAttribute("suffix")}" style="background: linear-gradient(to right, #f50 ${((this.getAttribute("value") - this.getAttribute("min")) / (this.getAttribute("max") - this.getAttribute("min"))) * 100}%, #ccc ${((this.getAttribute("value") - this.getAttribute("min")) / (this.getAttribute("max") - this.getAttribute("min"))) * 100}%)" />
                <label id="${this.getAttribute("vid")}-text" style="padding-left: 20px; padding-right: 20px;">${this.getAttribute("prefix") + this.getAttribute("value") + this.getAttribute("suffix")}</label> 
            </div>
            `;
        } else {
            if (this.getAttribute("other-id") != "") {
                this.innerHTML = `
                <div class="rangeDiv">
                    <input type="range" class="range" other-id="${this.getAttribute("other-id")}" min="${this.getAttribute("min")}" max="${this.getAttribute("max")}" value="${this.getAttribute("value")}" id="${this.getAttribute("vid")}" prefix="${this.getAttribute("prefix")}" suffix="${this.getAttribute("suffix")}" style="background: linear-gradient(to right, #f50 ${((this.getAttribute("value") - this.getAttribute("min")) / (this.getAttribute("max") - this.getAttribute("min"))) * 100}%, #ccc ${((this.getAttribute("value") - this.getAttribute("min")) / (this.getAttribute("max") - this.getAttribute("min"))) * 100}%)" /> 
                </div>
                `;
            } else {
                this.innerHTML = `
                <div class="rangeDiv">
                    <input type="range" class="range" other-id="" min="${this.getAttribute("min")}" max="${this.getAttribute("max")}" value="${this.getAttribute("value")}" id="${this.getAttribute("vid")}" prefix="${this.getAttribute("prefix")}" suffix="${this.getAttribute("suffix")}" style="background: linear-gradient(to right, #f50 ${((this.getAttribute("value") - this.getAttribute("min")) / (this.getAttribute("max") - this.getAttribute("min"))) * 100}%, #ccc ${((this.getAttribute("value") - this.getAttribute("min")) / (this.getAttribute("max") - this.getAttribute("min"))) * 100}%)" /> 
                </div>
                `;
            }
        }
    }
}

customElements.define('range-bar', Range);

document.addEventListener("DOMContentLoaded", function() {
    const sliders = document.getElementsByClassName("rangeDiv");
    for (let i = 0; i < sliders.length; i++) {
        const slider = sliders[i].children[0];
        const sliderValueExists = slider.getAttribute("other-id") != "";

        slider.addEventListener("input", (event) => {
            const tempSliderValue = Number(event.target.value);
            if (sliderValueExists) {
                document.querySelector("#"+slider.getAttribute("other-id")).textContent = slider.getAttribute("prefix") + tempSliderValue + slider.getAttribute("suffix");
            } 
            const progress = ((tempSliderValue - slider.min) / (slider.max - slider.min)) * 100;
            slider.style.background = `linear-gradient(to right, #f50 ${progress}%, #ccc ${progress}%)`;
            slider.style.setProperty("--thumb-rotate", `${(tempSliderValue/100) * 2160}deg`)
        })
    }
});