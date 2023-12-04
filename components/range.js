import "./range.css"

class Range extends HTMLElement {
    static get observedAttributes() {
        return ["number", "id", "other-id", "min", "max", "value", "prefix", "suffix"];
    }

    constructor() {
        super();
    }

    connectedCallback() {
        if (this.number != "") {
            this.innerHTML = `
            <div class="rangeDiv">
                <input type="range" class="range" min="${this.getAttribute("min")}" max="${this.getAttribute("max")}" value="${this.getAttribute("value")}" id="${this.getAttribute("id")}" /> 
            </div>
            <h1 id="${this.getAttribute("id")}-text">${this.getAttribute("value")}</h1>
            <script>
            console.log("a");
            const slider = document.querySelector("#${this.getAttribute("id")}")
            const sliderValue = document.querySelector("#${this.getAttribute("id")}-text")
            
            slider.addEventListener("input", (event) => {
                const tempSliderValue = Number(event.target.value); 
                sliderValue.textContent = "${this.getAttribute("prefix")}" + tempSliderValue + "${this.getAttribute("suffix")}"; 
                const progress = (tempSliderValue / slider.max) * 100;
                slider.style.background = \`linear-gradient(to right, #f50 \${progress}%, #ccc \${progress}%)\`;
                slider.style.setProperty("--thumb-rotate", \`\${(tempSliderValue/100) * 2160}deg\`)
            })
            </script>
            `;
        } else {
            if (this.otherId != "") {
                this.innerHTML = `
                <div class="rangeDiv">
                    <input type="range" class="range" min="${this.getAttribute("min")}" max="${this.getAttribute("max")}" value="${this.getAttribute("value")}" id="${this.getAttribute("id")}" /> 
                </div>
                <script>
                const slider = document.querySelector("#${this.getAttribute("id")}")
                const sliderValue = document.querySelector("#${this.getAttribute("otherId")}")
                
                slider.addEventListener("input", (event) => {
                    const tempSliderValue = Number(event.target.value); 
                    sliderValue.textContent = "${this.getAttribute("prefix")}" + tempSliderValue + "${this.getAttribute("suffix")}"; 
                    const progress = (tempSliderValue / slider.max) * 100;
                    slider.style.background = \`linear-gradient(to right, #f50 \${progress}%, #ccc \${progress}%)\`;
                    slider.style.setProperty("--thumb-rotate", \`\${(tempSliderValue/100) * 2160}deg\`)
                })
                </script>
                `;
            } else {
                this.innerHTML = `
                <div class="rangeDiv">
                    <input type="range" class="range" min="${this.getAttribute("min")}" max="${this.getAttribute("max")}" value="${this.getAttribute("value")}" id="${this.getAttribute("id")}" /> 
                </div>
                <script>
                const slider = document.querySelector("#${this.getAttribute("id")}")
                
                slider.addEventListener("input", (event) => {
                    const tempSliderValue = Number(event.target.value); 
                    const progress = (tempSliderValue / slider.max) * 100;
                    slider.style.background = \`linear-gradient(to right, #f50 \${progress}%, #ccc \${progress}%)\`;
                    slider.style.setProperty("--thumb-rotate", \`\${(tempSliderValue/100) * 2160}deg\`)
                })
                </script>
                `;
            }
        }
    }
}

customElements.define('range-bar', Range);