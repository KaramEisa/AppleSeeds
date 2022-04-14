
   

//* Write a JavaScript function that receives the following library object as 
//* an input and displays the books that can be read (the reading status is true). 
//* Log the book name, author name and reading status .



var library = [
    {
      author: "Bill Gates",
      title: "The Road Ahead",
      readingStatus: true,
    },
    {
      author: "Steve Jobs",
      title: "Walter Isaacson",
      readingStatus: true,
    },
    {
      author: "Suzanne Collins",
      title: "Mockingjay: The Final Book of The Hunger Games",
      readingStatus: false,
    },
  ];
  
  const readable = (data) => {
    data.forEach((e) => {
      if (e.readingStatus === true) {
        console.log(
          `\rBook Name: ${e.title}\rAuthor Name: ${e.author}\rReading Status: ${e.readingStatus}\r`
        );
      }
    });
  };
  readable(library);