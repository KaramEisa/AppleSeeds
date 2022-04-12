
const book = {
    bookName : "secrets of the world",
    author: "Karam Eisa",
   published : 2022,
    pages : 200 ,
    about : "nothing really"
}
function bookInfo() {
   console.log("The book " + book.bookName + " was written by " + book.author + " in the year " + book.published + " and it has " + book.pages + " pages, and its about " + book.about);
}


bookInfo();