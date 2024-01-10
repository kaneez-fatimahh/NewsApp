let container = document.querySelector(".container");
const generalBtn = document.getElementById("General");
const sportsBtn = document.getElementById("sports");
const bussinessBtn = document.getElementById("business");
const entertainmentBtn = document.getElementById("entertainment");
const healthBtn = document.getElementById("health");
const technologyBtn = document.getElementById("technology");
const searchBtn = document.getElementById("searchBtn");
const newsQuery = document.getElementById("newsQuery");
const Heading = document.getElementById("heading");
const spinner = document.getElementById("spinner");

//API KEYS
const API_KEY = "552a804d44de4f1092760d3110d192f2";
const GeneralNews =
  "https://newsapi.org/v2/top-headlines?country=us&pageSize=100&apiKey=";
const bussinessNews =
  "https://newsapi.org/v2/top-headlines?country=us&pageSize=100&category=bussiness&apiKey=";
const sportsNews =
  "https://newsapi.org/v2/top-headlines?country=us&pageSize=100&category=sports&apiKey=";
const healthNews =
  "https://newsapi.org/v2/top-headlines?country=us&pageSize=100&category=health&apiKey=";
const entertainmentNews =
  "https://newsapi.org/v2/top-headlines?country=us&pageSize=100&category=entertainment&apiKey=";
const technologyNews =
  "https://newsapi.org/v2/top-headlines?country=us&pageSize=100&category=technology&apiKey=";
const searchNews = "https://newsapi.org/v2/everything?q=";

const FetchGeneralNews = async () => {
  container.innerHTML = "";
  let url = GeneralNews + API_KEY;
  let response = await fetch(url);
  articles = [];
  if (response.status >= 200 && response.status < 300) {
    let data = await response.json();
    console.log(data);
    articles = data.articles;
  } else {
    console.log(response.status);
  }
  hidespinner();
  display();
};

const fetchHealthNews = async () => {
  container.innerHTML = "";
  let url = healthNews + API_KEY;
  let response = await fetch(url);
  articles = [];
  if (response.status >= 200 && response.status < 300) {
    let data = await response.json();
    console.log(data);
    articles = data.articles;
  } else {
    console.log(response.status);
  }
  display();
};

const FetchBussinessNews = async () => {
  container.innerHTML = "";
  let url = bussinessNews + API_KEY;
  let response = await fetch(url);
  articles = [];
  if (response.status >= 200 && response.status < 300) {
    let data = await response.json();
    console.log(data);
    articles = data.articles;
  } else {
    console.log(response.status);
  }

  display();
};

const FetchSportsNews = async () => {
  container.innerHTML = "";
  let url = sportsNews + API_KEY;
  let response = await fetch(url);
  articles = [];
  if (response.status >= 200 && response.status < 300) {
    let data = await response.json();
    console.log(data);
    articles = data.articles;
  } else {
    console.log(response.status);
  }
  hidespinner();
  display();
};

const FetchEntertainmentNews = async () => {
  container.innerHTML = "";
  let url = entertainmentNews + API_KEY;
  let response = await fetch(url);
  articles = [];
  if (response.status >= 200 && response.status < 300) {
    let data = await response.json();
    console.log(data);
    articles = data.articles;
  } else {
    console.log(response.status, response.statusText);
  }
  hidespinner();
  display();
};

const FetchtechnologyNews = async () => {
  container.innerHTML = "";
  let url = technologyNews + API_KEY;
  let response = await fetch(url);
  articles = [];
  if (response.status >= 200 && response.status < 300) {
    let data = await response.json();
    console.log(data);
    articles = data.articles;
  } else {
    console.log(response.status, response.statusText);
    // let errorMsg = document.createElement("h4");
    // errorMsg.innerText = "Something went wrong";
    // container.appendChild(errorMsg);
  }
  hidespinner();
  display();
};

const FetchSearchNews = async () => {
  if (newsQuery.value == null) {
    return;
  }
  container.innerHTML = "";
  let url =
    searchNews + encodeURIComponent(newsQuery.value) + "&apikey=" + API_KEY;
  let response = await fetch(url);
  articles = [];
  if (response.status >= 200 && response.status < 300) {
    let data = await response.json();
    console.log(data);
    articles = data.articles;
  } else {
    console.log(response.status);
  }
  hidespinner();
  display();
};

//-------------display--------

let display = () => {
  if (articles.length == 0) {
    let msg = document.createElement("h5");
    msg.innerText = "No News Found";
    container.appendChild(msg);
  }

  articles.forEach((newsArticle) => {
    const publishedDate = new Date(newsArticle.publishedAt);
    const manageDate = publishedDate.toLocaleString("en-GB", {
      timeZone: "UTC",
    });
  
    let output = document.createElement("div");
    output.setAttribute(
      "class",
      "d-inline-flex col-lg-4 col-md-6 col-12 my-2 justify-content-center "
    );
    output.innerHTML = ` 
        <div class="card" style="width: 18rem;">
     <img src=${newsArticle.urlToImage} class="card-img-top" alt="...">
     <div class="card-body">
     <p class="card-text"><small class="text-body-secondary">${manageDate}</small></p>
       <h5 class="card-title text-start">${newsArticle.title} </h5>
       <p class="card-text text-start">${newsArticle.description}}</p>
       <a href=${newsArticle.url} target="_blank"class="btn btn-secondary">Read More</a>
     </div>
   </div>`;
    container.appendChild(output);
    
    if (newsArticle.description == "[Removed]") {
      output.remove();
    }
  });
};

sportsBtn.addEventListener("click", function () {
  Heading.innerText = "NewsAlerts-Sports";
  FetchSportsNews();
});

technologyBtn.addEventListener("click", function () {
  Heading.innerText = "NewsAlerts-Technology";
  FetchtechnologyNews();
});

bussinessBtn.addEventListener("click", function () {
  Heading.innerText = "NewsAlerts-Bussiness";
  FetchBussinessNews();
});

entertainmentBtn.addEventListener("click", function () {
  Heading.innerText = "NewsAlerts-Entertainment";
  FetchEntertainmentNews();
});

sportsBtn.addEventListener("click", function () {
  Heading.innerText = "NewsAlerts-Sports";
  FetchSportsNews();
});

healthBtn.addEventListener("click", function () {
  Heading.innerText = "NewsAlerts-Health";
  fetchHealthNews();
});

generalBtn.addEventListener("click", function () {
  Heading.innerText = "NewsAlerts-General";
  FetchGeneralNews();
});

searchBtn.addEventListener("click", function () {
  Heading.innerText = `NewsAlerts-${newsQuery.value}`;

  FetchSearchNews();
  newsQuery.value = "";
});

const hidespinner = () => {
  spinner.style.display = "none";
};

FetchGeneralNews();
