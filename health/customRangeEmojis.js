import { preloadImages } from "/components/imagePreload.js"

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
        if (this.value < 2) {
            this.style.setProperty("--sliderImg", "url(https://emoji.aranja.com/static/emoji-data/img-apple-160/1f625.png)");
        } else if (this.value < 5) {
            this.style.setProperty("--sliderImg", "url(https://emoji.aranja.com/static/emoji-data/img-apple-160/1f600.png)");
        } else {
            this.style.setProperty("--sliderImg", "url(https://emoji.aranja.com/static/emoji-data/img-apple-160/1f62e.png)");
        }
    });

    document.getElementById('alcohol').addEventListener('input', function() {
        if (this.value == 0) {
            this.style.setProperty("--sliderImg", "url(https://emoji.aranja.com/static/emoji-data/img-apple-160/1f600.png)");
        } else if (this.value == 1) {
            this.style.setProperty("--sliderImg", "url(https://emoji.aranja.com/static/emoji-data/img-apple-160/1f62e.png)");
        } else if (this.value == 2) {
            this.style.setProperty("--sliderImg", "url(https://emoji.aranja.com/static/emoji-data/img-apple-160/1f62d.png)");
        } else {
            this.style.setProperty("--sliderImg", "url(https://emoji.aranja.com/static/emoji-data/img-apple-160/1f635.png)");
        }
    });

    window.addEventListener( "pageshow", function ( event ) {
        var historyTraversal = event.persisted || (typeof window.performance != "undefined" && window.performance.navigation.type == 2);
        if (historyTraversal) {
          window.location.reload();
        }
      });

    preloadImages(["https://emoji.aranja.com/static/emoji-data/img-apple-160/1f600.png", "https://emoji.aranja.com/static/emoji-data/img-apple-160/1f62e.png", "https://emoji.aranja.com/static/emoji-data/img-apple-160/1f635.png", "https://emoji.aranja.com/static/emoji-data/img-apple-160/1f602.png", "https://emoji.aranja.com/static/emoji-data/img-apple-160/1f62d.png", "https://emoji.aranja.com/static/emoji-data/img-apple-160/1f625.png"]);
});