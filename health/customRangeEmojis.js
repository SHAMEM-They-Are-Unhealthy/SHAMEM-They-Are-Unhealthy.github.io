document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('weight').addEventListener('input', function() {
        if (this.value < 100) {
            this.style.setProperty("--sliderImg", "url(https://emoji.aranja.com/static/emoji-data/img-apple-160/1f600.png)");
        } else if (this.value < 150) {
            this.style.setProperty("--sliderImg", "url(https://emoji.aranja.com/static/emoji-data/img-apple-160/1f62e.png)");
        } else {
            this.style.setProperty("--sliderImg", "url(https://emoji.aranja.com/static/emoji-data/img-apple-160/1f635.png)");
        }
    });

    document.getElementById('height').addEventListener('input', function() {
        if (this.value < 150) {
            this.style.setProperty("--sliderImg", "url(https://emoji.aranja.com/static/emoji-data/img-apple-160/1f602.png)");
        } else if (this.value < 180) {
            this.style.setProperty("--sliderImg", "url(https://emoji.aranja.com/static/emoji-data/img-apple-160/1f62e.png)");
        } else {
            this.style.setProperty("--sliderImg", "url(https://emoji.aranja.com/static/emoji-data/img-apple-160/1f62d.png)");
        }
    });

    document.getElementById('exercise').addEventListener('input', function() {
        if (this.value < 150) {
            this.style.setProperty("--sliderImg", "url(https://emoji.aranja.com/static/emoji-data/img-apple-160/1f602.png)");
        } else if (this.value < 180) {
            this.style.setProperty("--sliderImg", "url(https://emoji.aranja.com/static/emoji-data/img-apple-160/1f62e.png)");
        } else {
            this.style.setProperty("--sliderImg", "url(https://emoji.aranja.com/static/emoji-data/img-apple-160/1f62d.png)");
        }
    });

    document.getElementById('alcohol').addEventListener('input', function() {
        if (this.value == 0) {
            this.style.setProperty("--sliderImg", "url(https://emoji.aranja.com/static/emoji-data/img-apple-160/1f602.png)");
        } else if (this.value == 1) {
            this.style.setProperty("--sliderImg", "url(https://emoji.aranja.com/static/emoji-data/img-apple-160/1f62e.png)");
        } else if (this.value == 2) {
            this.style.setProperty("--sliderImg", "url(https://emoji.aranja.com/static/emoji-data/img-apple-160/1f62d.png)");
        } else {
            this.style.setProperty("--sliderImg", "url(https://emoji.aranja.com/static/emoji-data/img-apple-160/1f635.png)");
        }
    });
});