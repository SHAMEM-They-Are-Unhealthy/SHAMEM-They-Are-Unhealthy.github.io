import "./range.css"

const slider = document.querySelector("#range")
const sliderValue = document.querySelector("#currentAge")

slider.addEventListener("input", (event) => {
    const tempSliderValue = Number(event.target.value); 
    sliderValue.textContent = tempSliderValue + " years old"; 
    const progress = (tempSliderValue / slider.max) * 100;
    slider.style.background = `linear-gradient(to right, #f50 ${progress}%, #ccc ${progress}%)`;
    slider.style.setProperty("--thumb-rotate", `${(tempSliderValue/100) * 2160}deg`)
})