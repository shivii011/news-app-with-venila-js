//https://newsapi.org/v2/top-headlines?country=in&apiKey=d84dda5692be4d03a186eef0de5f9791
//https://newsapi.org/v2/top-headlines?sources=us&apiKey=d84dda5692be4d03a186eef0de5f9791

//initializing the parameters
let source = 'bbc-news';
let apiKey = 'd84dda5692be4d03a186eef0de5f9791';
//grab the news container
let newsAccordion = document.getElementById('newsAccordion');

//let git request
const xhr = new XMLHttpRequest();

xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        // console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element , index) {
            // console.log(articles[news]);
            let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                            <h2 class="mb-0">
                                <button class="btn btn-link collapsed show" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collaps${index}e">
                                <b>NEWS ${index+1} </b>${element["title"]}
                                </button>
                            </h2>
                            </div>
                            
                            <div id="collapse${index}" class="collapse show " aria-labelledby="heading${index}" data-parent="#accordionExample">
                            <div class="card-body">
                        ${element["content"]}.<a href = "${element['url']}">read more here </a>
                            </div>
                      </div>`     
                      newsHtml += news;  
                    
                    });
                    newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}
xhr.send()
