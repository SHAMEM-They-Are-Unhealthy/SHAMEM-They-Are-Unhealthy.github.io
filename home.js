const healthAPI = "https://newsapi.org/v2/top-headlines?country=gb&category=health&apiKey=2953adaae8b944819cc46a649510105a";

function articlescall(){
    var liTitle = [];
    var liURL = [];

    fetch(healthAPI).then(response => {
        if (!response.ok) {
            console.log(response);
            throw new Error('Network response was not ok');
        }
        return response.json();
    }).then(data => {
        var count = data.articles.length;
        localStorage.setItem('count', count);
        for (let i = 0; i < count; i++) {
            liTitle.push(data.articles[i].title);
            liURL.push(data.articles[i].url);
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
        document.getElementById('articles').innerHTML += "<div class='articles' onclick='window.location.href=\""+liURL[i]+"\"'><br><p>"+liTitle[i]+"</p><br></div><hr>";
    }
});
