let post = new Post("a", "b", "c");
function Post(title, author, body) {
  this.title = title;
  this.author = author;
  this.body = body;
  this.view = 0;
  this.comments = [];
  isLive = false;
}

console.log(post);
