 const array = [
   {
     quote: 'Impossible is just an opinion.',
     author : 'Paulo Coelbo.'
   },

   {
     quote: 'Two things are infinite; the universe and human stupidity; and am not sure about the universe.',
     author : 'Albert Einsten.'
   },

   {
    quote: 'A room without books is like a body without a soul.',
    author : 'Mmarcus Tullius Cicero.'
  },

  {
    quote: 'You know you are in love when you cant fall asleep because reality is finally better than your dreams.',
    author : 'Dr Seuss.'
  },

  {
    quote: 'You only live once, but if you do it right, once is enough.',
    author : 'Mae West.'
  },

  {
    quote: 'Be the change that you wish to see in the world.',
    author : 'Mahatma Gandhi.'
  },

  {
    quote: 'If you want to know what a man is like, look at how he treats his inferiors, not his equals.',
    author : 'J.K Rowling.'
  },

  {
    quote: 'No can make feel inferior without your consent.',
    author : 'Eleanor Roosevelt'
  },

  {
    quote: 'If you tell the truth, you dont have to remember anything.',
    author : 'Mark Twain.'
  },

  {
    quote: 'A friend is someone who knows all about you but still loves you.',
    author : 'Elbert Hubbard'
  },

  {
    quote: 'Without muscle, life would be a mistake.',
    author : 'Friedrich Nietzsche.'
  },

  {
    quote: 'To produce a mighty book, you must choose a mighty theme.',
    author : ' Herman Melville'
  }
 ];

 const pressbtn = document.querySelector(".pressbtn");
 const quoteAuthor = document.querySelector(".quoteauthor");
 const quoteBlock = document.querySelector(".quoteblock") 
  pressbtn.addEventListener("click", generateQuote);

  function generateQuote() {
      let random = Math.floor(Math.random() * array.length); 
     quoteAuthor.innerHTML = array[random].author;
      quoteBlock.innerHTML = array[random].quote;
    };

