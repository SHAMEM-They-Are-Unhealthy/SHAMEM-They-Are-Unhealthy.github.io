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
        const smokingFreq = Number(params.smoking[0]);
        const smokingQuit = Number(params.smoking[1]);
        const BMI = weight / ((height / 100) * (height / 100)); //18.5-57.5

        let lifeExpectancy = 0;
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
        new Chart(document.getElementById("BMI-chart").getContext('2d'), {
            type: 'bar',
            data: {
                labels: ["18.5-25", "25-30", "30-40", "40-45", "45-50", "50-55", "55-60"],
                datasets: [{
                    label: "Life Expectancy",
                    data: [0, 2.2, 4.3, 6.5, 8.9, 9.8, 13.7],
                    backgroundColor: ["green", "green", "yellow", "yellow", "red", "red", "red"]
                }]
            },
            options: {
                legend: {display: false},
                title: {
                    display: true,
                    text: "BMI to life expectancy"
                },
                animation: {
                    easing: 'linear',
                    duration: 4000
                }
            }
        });

        document.getElementsByTagName("main")[0].style.display = "block";
        document.getElementById("loading").style.display = "none";
    } catch (err) {
        document.getElementById("error").style.display = "block";
        document.getElementById("loading").style.display = "none";
    }
});