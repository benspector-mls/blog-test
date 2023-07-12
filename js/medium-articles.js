const username = '@shadmanc'

const getArticles = async () => {
  const res = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/' + username);
  const { feed, items } = await res.json();

  items.forEach(article => {
    console.log(article);
    const li = document.createElement('li');
    li.className = 'nav-item'
    li.innerText = article.title;
    li.addEventListener('click', () => {
      document.querySelector("#title").innerHTML = article.title;
      const pubDate = (new Date(article.pubDate)).toLocaleDateString()
      document.querySelector("#author-date").innerText = `${article.author} • ${pubDate}`;
      document.querySelector("#body").innerHTML = article.content;
      window.scrollTo(0, 0);
    })
    document.querySelector("#article-list").appendChild(li);
  });

  const [firstArticle] = items;
  document.querySelector("#title").innerHTML = firstArticle.title
  document.querySelector("#author-date").innerText = `${firstArticle.author} • ${(new Date(firstArticle.pubDate)).toLocaleDateString()}`
  document.querySelector("#body").innerHTML = firstArticle.content
}
getArticles();