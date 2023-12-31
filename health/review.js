document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('weight').addEventListener('change', function() {
        document.getElementById('weight-review').innerHTML = document.getElementById('weight-text').innerHTML;
    });

    document.getElementById('height').addEventListener('change', function() {
        document.getElementById('height-review').innerHTML = document.getElementById('height-text').innerHTML;
    });

    document.getElementById('exercise').addEventListener('change', function() {
        document.getElementById('exercise-review').innerHTML = document.getElementById('exercise-text').innerHTML.replace("workouts", "");
    });

    document.getElementById('alcohol').addEventListener('change', function() {
        document.getElementById('alcohol-review').innerHTML = document.getElementById('alcohol-text').innerHTML;
    });

    document.getElementById('opioid').addEventListener('change', function() {
        if (this.checked) {
            document.getElementById('opioid-review').innerHTML = "No";
        } else {
            document.getElementById('opioid-review').innerHTML = "Yes";
        }
    });

    document.getElementById('sleeping').addEventListener('change', function() {
        if (this.checked) {
            document.getElementById('sleeping-review').innerHTML = "8+ hours";
        } else {
            document.getElementById('sleeping-review').innerHTML = "<8 hours";
        }
    });

    document.getElementById('selected').addEventListener('change', function() {
        let x = "Never Smoked";
        let y = "";

        console.log("a");
        
        switch (this.value[0]) {
            case "1":
                x = "1/2 Pack";
                break;
            case "2":
                x = "1 Pack";
                break;
            case "3":
                x = "2 Packs";
                break;
        }

        switch (this.value[1]) {
            case "1":
                y = "Quit 10+ years";
                break;
            case "2":
                y = "Quit 1-9 years";
                break;
            case "3":
                y = "Quit <1 year";
                break;
            case "4":
                y = "Never Quit";
                break;
        }

        document.getElementById('smoking-review').innerHTML = x + `<br/>` + y;
    });

    document.querySelector('#submit').addEventListener('click', () => window.location = `results/?weight=${document.getElementById('weight').value}&height=${document.getElementById('height').value}&exercise=${document.getElementById('exercise').value}&alcohol=${document.getElementById('alcohol').value}&opioid=${document.getElementById('opioid').checked}&sleeping=${document.getElementById('sleeping').checked}&smoking=${document.getElementById('selected').value}`);
    document.querySelector('#disclaimer').addEventListener('click', () => {
        document.getElementById("overlay").style.visibility = "visible";
        document.getElementById("overlay").style.opacity = 1;
        document.getElementsByTagName("body")[0].style.overflow = "hidden";
    });
    document.getElementById("overlay").addEventListener('click', () => {
        document.getElementById("overlay").style.opacity = 0;
        document.getElementsByTagName("body")[0].style.overflow = "auto";
        setTimeout(function() {document.getElementById("overlay").style.visibility = "hidden";}, 200);
    });
});