import { preloadImages } from "/components/imagePreload.js";

document.addEventListener("DOMContentLoaded", function() {
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });

    try {
        const weight = Number(params.weight);
        const height = Number(params.height);
        const exercise = Number(params.exercise);
        const alcohol = Number(params.alcohol);
        const opioid = Boolean(params.opioid);
        const sleeping = Boolean(params.sleeping);
        const smoking = String(params.smoking);
        const BMI = weight / ((height / 100) * (height / 100)); //18.5-57.5

        if (weight > 180 || weight < 34 || height > 210 || height < 140 || exercise > 7 || exercise < 0 || alcohol > 3 || alcohol < 0) {
            throw "400 Error";
        }

        let lifeExpectancy = 81;

        /********************************************************************************************************************************************************/

        new Chart(document.getElementById("BMI-chart"), {
            type: 'bar',
            data: {
                labels: ["18.5-25", "25-30", "30-40", "40-45", "45-50", "50-55", "55-60"],
                datasets: [{
                    label: "Life Expectancy",
                    data: [lifeExpectancy-0, lifeExpectancy-2.2, lifeExpectancy-4.3, lifeExpectancy-6.5, lifeExpectancy-8.9, lifeExpectancy-9.8, lifeExpectancy-13.7],
                    backgroundColor: ["green", "green", "yellow", "yellow", "red", "red", "red"]
                }]
            },
            options: {
                legend: {display: false},
                title: {
                    display: true,
                    text: "Life Expectancy from BMI"
                },
                scales: {y: {min: 60}},
                animation: false
            }
        });
        let src = "https://cdn.pixabay.com/photo/2014/03/24/13/42/male-294095_1280.png"   
        if (BMI < 18.5) {
            document.getElementById("BMI").innerHTML = "You are classed as: Underweight - BMI: " + Math.round(BMI * 10) / 10;
            lifeExpectancy = 81;
            document.getElementById("BMI-info").innerHTML = "This life expectancy calculator may be off as you are too light";
            document.getElementById("BMI-img").className = "orangeImg";
        } else if (BMI < 25) {
            document.getElementById("BMI").innerHTML = "You are classed as: Normal weight - BMI: " + Math.round(BMI * 10) / 10;
            lifeExpectancy = (-0.383 * BMI) + 90;
            document.getElementById("BMI-info").innerHTML = "You are at the optimal body weight for your size, keep up the good work!";
            document.getElementById("BMI-img").className = "greenImg";
        } else if (BMI < 30) {
            document.getElementById("BMI").innerHTML = "You are classed as: Overweight - BMI: " + Math.round(BMI * 10) / 10;
            lifeExpectancy = (-0.383 * BMI) + 90;
            document.getElementById("BMI-info").innerHTML = "If you reduce your weight you can add up to " + (Math.round((81 - lifeExpectancy) * 10) / 10) + " years to your life!";
            src = "fat.png";
            document.getElementById("BMI-img").className = "orangeImg";
        } else if (BMI < 40) {
            document.getElementById("BMI").innerHTML = "You are classed as: Obese - BMI: " + Math.round(BMI * 10) / 10;
            lifeExpectancy = (-0.383 * BMI) + 90;
            document.getElementById("BMI-info").innerHTML = "Your life is going to be much shorter than average but if you reduce your weight you can add up to " + (Math.round((81 - lifeExpectancy) * 10) / 10) + " years to your life!";
            src = "fat.png";
            document.getElementById("BMI-img").className = "redImg";
        } else if (BMI > 57.5) {
            document.getElementById("BMI").innerHTML = "You are classed as: Extremely Obese - BMI: " + Math.round(BMI * 10) / 10;
            lifeExpectancy = 67.3;
            document.getElementById("BMI-info").innerHTML = "This calculator may be off as your weight is so large, however, if you reduce your weight you can add up to " + (Math.round((81 - lifeExpectancy) * 10) / 10) + " years to your life!";
            src = "fat.png";
            document.getElementById("BMI-img").className = "redImg";
        } else {
            document.getElementById("BMI").innerHTML = "You are classed as: Extremely Obese - BMI: " + Math.round(BMI * 10) / 10;
            lifeExpectancy = (-0.383 * BMI) + 90;
            document.getElementById("BMI-info").innerHTML = "It is vital that you start to lose weight now as it is probably the way to improve your life the most, if you reduce your weight you can add up to " + (Math.round((81 - lifeExpectancy) * 10) / 10) + " years to your life!";
            src = "fat.png";
            document.getElementById("BMI-img").className = "redImg";
        }
        document.getElementById("BMI-img").src = src;
        document.getElementById("BMI-LE").innerHTML = Math.round(lifeExpectancy);

        /********************************************************************************************************************************************************/

        const colours = ["lightblue", "lightblue", "lightblue", "lightblue", "lightblue"];
        colours[Math.round(exercise/8*5)] = "blue";
        const images = ['https://static.blueprintincome-prod.cloud/static/web/master-1.128-2-g561b65256/rassets/longevity-calc/exercise/01-4b401747c7370291d59092122ce6a24b215ad5230a41d0ab155dd8a310776410.png', 'https://static.blueprintincome-prod.cloud/static/web/master-1.128-2-g561b65256/rassets/longevity-calc/exercise/02-8694b575e55c5cab8269a999374250a011421307331575d79b5a55e58e5ab044.png', 'https://static.blueprintincome-prod.cloud/static/web/master-1.128-2-g561b65256/rassets/longevity-calc/exercise/03-4384fcd0ff7e240c84cdcc812483c5c83b87270651f611d39eb9230933809ce4.png', 'https://static.blueprintincome-prod.cloud/static/web/master-1.128-2-g561b65256/rassets/longevity-calc/exercise/04-4678cb9791b709c63098ed085fb7e5ca99907c7603653ccf6da241cee72d634f.png', 'https://static.blueprintincome-prod.cloud/static/web/master-1.128-2-g561b65256/rassets/longevity-calc/exercise/05-cd669821e521982e11bf56fcab35f554105bd3a1aed0ff4b8633ea8740a51136.png'].map(png => {
            const image = new Image();
            image.src = png;
            return image;
        });
        new Chart(document.getElementById("active-chart"), {
            type: 'bar',
            plugins: [{
                afterDraw: chart => {      
                    var ctx = chart.chart.ctx; 
                    var xAxis = chart.scales['x-axis-0'];
                    var yAxis = chart.scales['y-axis-0'];
                    xAxis.ticks.forEach((value, index) => {  
                        var x = xAxis.getPixelForTick(index);   
                        ctx.drawImage(images[index], x - 20, yAxis.bottom + 5, 40, 40);
                    });      
                }
            }],
            data: {
                labels: ["Less", " ", " ", " ", "More"],
                datasets: [{
                    label: "Life Expectancy",
                    data: [-2.2, 0.4, 3, 5.6, 6.9],
                    backgroundColor: colours
                }]
            },
            options: {
                responsive: true,
                legend: {display: false},
                title: {
                    display: true,
                    text: "Life Expectancy from Exercise"
                },
                animation: false,
                scales: {
                    yAxes: [{ticks: {beginAtZero: true}}],
                    xAxes: [{ticks: {padding: 35}}],
                }
            }
        });
        src = "https://cdn.pixabay.com/photo/2014/03/24/13/42/male-294095_1280.png"
        switch (exercise) {
            case 0: case 1:
                document.getElementById("active").innerHTML = "You are classed as: Inactive";
                document.getElementById("active-info").innerHTML = "Your life expectancy will be lower than average as you don't exercise enough";
                document.getElementById("active-img").className = "redImg";
                src = "fat.png";
                break;
            case 2: case 3: case 4:
                document.getElementById("active").innerHTML = "You are classed as: Active";
                document.getElementById("active-info").innerHTML = "Your life expectancy will be above average as you exercise";
                document.getElementById("active-img").className = "orangeImg";
                break;
            case 5: case 6: case 7:
                document.getElementById("active").innerHTML = "You are classed as: Very Active";
                document.getElementById("active-info").innerHTML = "Don't run yourself to death! You exercise so much that you have added " + (Math.round((1.3 * exercise - 2.2) * 10) / 10) + " years on to your life";
                document.getElementById("active-img").className = "greenImg";
                break;
        }
        lifeExpectancy = lifeExpectancy + (1.3 * exercise - 2.2);
        document.getElementById("active-img").src = src;
        document.getElementById("active-LE").innerHTML = Math.round(lifeExpectancy);

        /********************************************************************************************************************************************************/

        document.getElementById("alcohol-zero-text").innerHTML = Math.round(lifeExpectancy * 10) / 10;
        document.getElementById("alcohol-two-text").innerHTML = Math.round(lifeExpectancy * 10) / 10 + 2.3;
        document.getElementById("alcohol-seven-text").innerHTML = Math.round(lifeExpectancy * 10) / 10 + 3.1;
        document.getElementById("alcohol-eight-text").innerHTML = Math.round(lifeExpectancy * 10) / 10 + 1.8;
        switch (alcohol) {
            case 0:
                document.getElementById("alcohol").innerHTML = "You Never Drink";
                document.getElementById("alcohol-info").innerHTML = "Surprisingly if you do drink you could live longer! Check the source for more info.";
                document.getElementById("alcohol-img").className = "orangeImg";
                document.getElementById("alcohol-zero").classList.add("selected-alcohol");
                break;
            case 1:
                document.getElementById("alcohol").innerHTML = "You rarely drink";
                document.getElementById("alcohol-info").innerHTML = "Your life expectancy is actually above average. Check the source for more info.";
                document.getElementById("alcohol-img").className = "orangeImg";
                document.getElementById("alcohol-two").classList.add("selected-alcohol");
                lifeExpectancy += 2.3;
                break;
            case 2:
                document.getElementById("alcohol").innerHTML = "You moderately drink";
                document.getElementById("alcohol-info").innerHTML = "You have the highest life expectancy for some reason? Check the source for more info.";
                document.getElementById("alcohol-img").className = "greenImg";
                document.getElementById("alcohol-seven").classList.add("selected-alcohol");
                lifeExpectancy += 3.1;
                break;
            case 2:
                document.getElementById("alcohol").innerHTML = "You drink heavily";
                document.getElementById("alcohol-info").innerHTML = "Don't drink and drive! You have the a higher life expectancy than sober people but have a high risk of death through car crashes.";
                document.getElementById("alcohol-img").className = "orangeImgs";
                document.getElementById("alcohol-eight").classList.add("selected-alcohol");
                lifeExpectancy += 1.8;
                break;
        }
        document.getElementById("alcohol-LE").innerHTML = Math.round(lifeExpectancy);

        /********************************************************************************************************************************************************/

        new Chart(document.getElementById("opioid-chart"), {
            type: 'doughnut',
            data: {
                labels: ["Opioids", "Other Drugs"],
                datasets: [{
                    label: "Percentage deaths",
                    data: [45.7, 54.3],
                    backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)']
                }]
            },
            options: {
                legend: {display: true},
                title: {
                    display: true,
                    text: "Percentage of deaths from Drugs in 2021"
                }
            }
        }); 
        if (opioid) {
            document.getElementById("opioid").innerHTML = "You don't do drugs!";
            document.getElementById("opioid-info").innerHTML = "Very good, you can handle the pressure";
            document.getElementById("opioid-img").className = "greenImg";
        } else {
            document.getElementById("opioid").innerHTML = "You do drugs!";
            lifeExpectancy -= 4;
            document.getElementById("opioid-info").innerHTML = "It may be too late for you but if you quit you can add up to 4 years to your life!";
            document.getElementById("opioid-img").className = "redImg";
        }
        document.getElementById("opioid-LE").innerHTML = Math.round(lifeExpectancy);

        /********************************************************************************************************************************************************/

        new Chart(document.getElementById("sleep-chart"), {
            type: 'doughnut',
            data: {
                labels: ["<5", "6", "7", "8", ">9"],
                datasets: [{
                    label: "Percentage deaths",
                    data: [7.8, 20.5, 30.8, 32.5, 8.5],
                    backgroundColor: ['red', 'green', 'blue', 'yellow', 'purple']
                }]
            },
            options: {
                legend: {display: true},
                title: {
                    display: true,
                    text: "Percentage hours of sleep per night"
                }
            }
        }); 
        if (sleeping) {
            document.getElementById("sleep").innerHTML = "Well Done!";
            document.getElementById("sleep-info").innerHTML = "You live for 4.7 years longer than most!";
            document.getElementById("sleep-img").className = "greenImg";
            lifeExpectancy += 4.7;
        } else {
            document.getElementById("sleep").innerHTML = "Sleep for longer!";
            document.getElementById("sleep-info").innerHTML = "A good nights sleep can add up to 4.7 years to your life!";
            document.getElementById("sleep-img").className = "redImg";
        }
        document.getElementById("sleep-LE").innerHTML = Math.round(lifeExpectancy);

        /********************************************************************************************************************************************************/

        document.querySelectorAll("td[value=\"00\"]")[0].innerHTML = Math.round(lifeExpectancy * 10) / 10;
        document.querySelectorAll("td[value=\"11\"]")[0].innerHTML = Math.round((lifeExpectancy - 0.5) * 10) / 10;
        document.querySelectorAll("td[value=\"12\"]")[0].innerHTML = Math.round((lifeExpectancy - 3.1) * 10) / 10;
        document.querySelectorAll("td[value=\"13\"]")[0].innerHTML = Math.round((lifeExpectancy - 5.7) * 10) / 10;
        document.querySelectorAll("td[value=\"14\"]")[0].innerHTML = Math.round((lifeExpectancy - 6.2) * 10) / 10;
        document.querySelectorAll("td[value=\"21\"]")[0].innerHTML = Math.round((lifeExpectancy - 1.3) * 10) / 10;
        document.querySelectorAll("td[value=\"22\"]")[0].innerHTML = Math.round((lifeExpectancy - 4.1) * 10) / 10;
        document.querySelectorAll("td[value=\"23\"]")[0].innerHTML = Math.round((lifeExpectancy - 6.4) * 10) / 10;
        document.querySelectorAll("td[value=\"24\"]")[0].innerHTML = Math.round((lifeExpectancy - 7.9) * 10) / 10;
        document.querySelectorAll("td[value=\"31\"]")[0].innerHTML = Math.round((lifeExpectancy - 2.5) * 10) / 10;
        document.querySelectorAll("td[value=\"32\"]")[0].innerHTML = Math.round((lifeExpectancy - 5.7) * 10) / 10;
        document.querySelectorAll("td[value=\"33\"]")[0].innerHTML = Math.round((lifeExpectancy - 9.7) * 10) / 10;
        document.querySelectorAll("td[value=\"34\"]")[0].innerHTML = Math.round((lifeExpectancy - 10.3) * 10) / 10;
        const result = document.querySelectorAll("td[value=\"" + smoking + "\"]")[0];
        result.classList.add("selected");
        if (result.style.backgroundColor == "red") {
            document.getElementById("smoking-img").className = "redImg";
        } else if (result.style.backgroundColor == "yellow" || result.style.backgroundColor == "orange") {
            document.getElementById("smoking-img").className = "orangeImg";
        } else {
            document.getElementById("smoking-img").className = "greenImg";
        }
        switch (smoking) {
            case "00":
                document.getElementById("smoking").innerHTML = "You have never smoked!";
                document.getElementById("smoking-info").innerHTML = "You are at much lower risk of lung cancer and could've already added 10 years to your life!";
                break;
            case "11": case "12": case "21":
                document.getElementById("smoking").innerHTML = "You dont smoke much!";
                document.getElementById("smoking-info").innerHTML = "You are at much lower risk of lung cancer but you could add up to " + Math.round(lifeExpectancy - Number(result.innerHTML)) + " years to your life!";
                break;
            case "22": case "31": case "32":
                document.getElementById("smoking").innerHTML = "Pretty heavy smoker eh!";
                document.getElementById("smoking-info").innerHTML = "You are at a high risk of lung cancer but you could add up to " + Math.round(lifeExpectancy - Number(result.innerHTML)) + " years to your life if you continue!";
                break;
            case "13": case "23": case "33":
                document.getElementById("smoking").innerHTML = "Quitting is still fresh in your memory!";
                document.getElementById("smoking-info").innerHTML = "You are at a very high risk of lung cancer but you could add up to " + Math.round(lifeExpectancy - Number(result.innerHTML)) + " years to your life if you continue!";
                break;
            case "14": case "24": case "34":
                document.getElementById("smoking").innerHTML = "Damn! How are you still going?";
                document.getElementById("smoking-info").innerHTML = "You are at the highest risk of lung cancer but you could add up to " + Math.round(lifeExpectancy - Number(result.innerHTML)) + " years to your life if you quit!";
                break;    
        }
        lifeExpectancy = Number(result.innerHTML);
        document.getElementById("smoking-LE").innerHTML = Math.round(lifeExpectancy);

        /********************************************************************************************************************************************************/

        document.getElementById("lifeExpectancy").innerHTML = "You may live until you are: " + lifeExpectancy;
        document.getElementsByTagName("main")[0].style.display = "block";
        document.getElementById("loading").style.display = "none";
        document.getElementById("timeRemaining").innerHTML = String(lifeExpectancy) + " years left";
        document.getElementById("extraInfo").innerHTML = "You are a baby";

        document.getElementById("pdfDownload").addEventListener('click', function() {
            window.print();
        });

        document.getElementById("range").addEventListener('input', function() {
            if (lifeExpectancy - this.value >= 0) {
                document.getElementById("timeRemaining").innerHTML = String(Math.round((lifeExpectancy - this.value) * 10) / 10) + " years left";
            } else {
                document.getElementById("timeRemaining").innerHTML = "0 years left";
            }
            if (this.value < 18) {
                this.style.setProperty("--sliderImg", "url(https://emoji.aranja.com/static/emoji-data/img-apple-160/1f476.png)");
                document.getElementById("extraInfo").innerHTML = "You are a baby";
            } else if (this.value < lifeExpectancy - 10) {
                this.style.setProperty("--sliderImg", "url(https://emoji.aranja.com/static/emoji-data/img-apple-160/1f600.png)");
                document.getElementById("extraInfo").innerHTML = "You have finally reached adulthood";
            } else if (this.value < lifeExpectancy - 5) {
                this.style.setProperty("--sliderImg", "url(https://emoji.aranja.com/static/emoji-data/img-apple-160/1f614.png)");
                document.getElementById("extraInfo").innerHTML = "Getting close!";
            } else if (this.value < lifeExpectancy + 5) {
                this.style.setProperty("--sliderImg", "url(https://emoji.aranja.com/static/emoji-data/img-apple-160/1f622.png)");
                document.getElementById("extraInfo").innerHTML = "Dead!";
            } else if (this.value < lifeExpectancy + 10) {
                this.style.setProperty("--sliderImg", "url(https://emoji.aranja.com/static/emoji-data/img-apple-160/1f62e.png)");
                document.getElementById("extraInfo").innerHTML = "It's possible you would still be here!";
            } else if (this.value < 120) {
                this.style.setProperty("--sliderImg", "url(https://emoji.aranja.com/static/emoji-data/img-apple-160/1f635.png)");
                document.getElementById("extraInfo").innerHTML = "Good luck!";
            } else {
                this.style.setProperty("--sliderImg", "url(https://emoji.aranja.com/static/emoji-data/img-apple-160/2620-fe0f.png)");
                document.getElementById("extraInfo").innerHTML = "Seriously?";
            }
        });

        preloadImages(["https://emoji.aranja.com/static/emoji-data/img-apple-160/1f476.png", "https://emoji.aranja.com/static/emoji-data/img-apple-160/1f600.png", "https://emoji.aranja.com/static/emoji-data/img-apple-160/1f614.png", "https://emoji.aranja.com/static/emoji-data/img-apple-160/1f622.png", "https://emoji.aranja.com/static/emoji-data/img-apple-160/1f62e.png", "https://emoji.aranja.com/static/emoji-data/img-apple-160/1f635.png", "https://emoji.aranja.com/static/emoji-data/img-apple-160/2620-fe0f.png"]);
    } catch (err) {
        document.getElementById("error").style.display = "block";
        document.getElementById("loading").style.display = "none";
        console.log(err);
    }
});