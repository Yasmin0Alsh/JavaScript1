var books = [
    {title: 'The Secret',
     author: 'Rhonda Byrne',
     alreadyRead: true
    },
    {title: 'The power of Habit',
    author: 'Charles Duhigg',
    alreadyRead: false
    },
    {title: 'The 7 Hbits Of Highly Effective People',
    author: 'Stephen R.Covey',
    alreadyRead: false
    }];
  
  for (var i = 0; i < books.length; i++) {
    var book = books[i];
    var bookInfo = book.title + '" by ' + book.author;
    if (book.alreadyRead) {
      console.log('You already read "' + bookInfo);
    } else {
      console.log('You still need to read "' + bookInfo);
    }
  }