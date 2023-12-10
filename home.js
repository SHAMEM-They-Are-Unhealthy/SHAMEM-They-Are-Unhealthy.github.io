const healthAPI = "https://shamem.glitch.me/get_news";

function articlescall() {
    var liTitle = [];
    var liURL = [];

    fetch(healthAPI).then(response => {
        if (!response.ok) {
            console.log(response);
            throw new Error('Network response was not ok');
        }
        return response.json();
    }).then(data => {
        var count = data.pagination.count;
        localStorage.setItem('count', count);
        for (let i = 0; i < count; i++) {
            liTitle.push(data.data[i].title);
            liURL.push(data.data[i].url);
        }
        localStorage.setItem("liTitle", JSON.stringify(liTitle));
        localStorage.setItem("liURL", JSON.stringify(liURL));
    }).catch(error => {
        console.error('Error:', error);
    });

}

document.addEventListener("DOMContentLoaded", function() {
    articlescall();
    var title = localStorage.getItem("liTitle");
    var link = localStorage.getItem("liURL");
    const liTitle = JSON.parse(title);
    const liURL = JSON.parse(link);
    var count = localStorage.getItem('count');

    for(let i = 0; i < count; i++){
        document.getElementById('articles').innerHTML += `<div class="articles" onclick="window.open('${liURL[i]}', '_blank')"><br/><p>${liTitle[i]}</p><br/></div><hr/>`;
    }
});
