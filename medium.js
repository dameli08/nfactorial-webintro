// fetch('https://jsonplaceholder.typicode.com/posts')
//       .then(response => response.json());
//       .then(json => console.log(json));

const postsfromAPI = [
    {
        id: 0,
        title: "7 Practical CSS Tips",
        body: "You not only learn more Python by implementing what you already know but, in the end, you can see how all your hard work pays off.",
        src: "./assets/1.png",
    },
    {
        id: 1,
        title: "7 Practical CSS Tips",
        body: `Recently, I’ve been automating tasks more than often due to my lack of time. Thanks to that I have 5 new projects that I classified as beginner, intermediate, and advanced. 
        You’ll find links to the full scripts and tutorials to solve each project. Also, I’m leaving a challenge to each of them to test your Python skills.To make things easier, I already created a template for a cover letter. Here’s how the template we’ll use looks...`,
        src: "./assets/2.png",
    },
    {
        id: 2,
        title: "7 Practical CSS Tips",
        body: `Recently, I’ve been automating tasks more than often due to my lack of time. Thanks to that I have 5 new projects that I classified as beginner, intermediate, and advanced. 
        You’ll find links to the full scripts and tutorials to solve each project. Also, I’m leaving a challenge to each of them to test your Python skills.To make things easier, I already created a template for a cover letter. Here’s how the template we’ll use looks...`,
        src: "./assets/3.png",
    },
];

let article = 
`<div class = "mainCol">
    <div class="main">
        <div id = "part">
            <div class="author">
                <img class = "height: 24px" src="./assets/auth.png">
                <p class="d-flex">Authors name</p>
                <p class="text-muted">in</p>
                <p>Topics Name - </p>
                <p class="text-muted">7 july</p>
            </div>
            <div class = "text">
            <a href="Article1.html"><h1 id = "title"></h1></a>
                <p id = "body"></p>
            </div>
            <div class = "btnTextBoxes">
                <div class="btnText">
                    <button class="radius: 100px ">Java Script</button>
                    <p>12 min read - Selected for you</p>
                
                </div>
                <img class = "padding-left: 40px" src="./assets/Actions.png">
            </div>
        </div>
        <div id = "img">
            <img src = "" alt = "article_img"></>
        </div>
        </div>
        <div>
            <hr class="hr_line">
        </div>
        
    </div>`;

const articles = document.getElementById("articles");
postsfromAPI.forEach((item) => {
    let newArticle = article.replace('id = "title">', `id = "title">${item.title}`);
    newArticle = newArticle.replace('id = "body">', `id = "body">${item.body}`);
    newArticle = newArticle.replace('src = ""', `src = "${item.src}"`);
    articles.innerHTML += newArticle;
});

// fetch('https://jsonplaceholder.typicode.com/todos')
//       .then(response => console.log(response.json()))
//       .then(json => console.log(json))