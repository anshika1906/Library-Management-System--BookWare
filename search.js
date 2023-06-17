document.addEventListener("DOMContentLoaded", function() {
    var searchInput = document.getElementById("searchInput");
    var searchResults = document.getElementById("searchResults");
  
    var data = [
      "'To Kill a Mockingbird' by Harper Lee",
"'1984' by George Orwell",
"'The Great Gatsby' by F. Scott Fitzgerald",
"'Pride and Prejudice' by Jane Austen",
"'The Lord of the Rings' by J.R.R. Tolkien",
"'Harry Potter and the Philosopher's Stone' by J.K. Rowling",
"'The Catcher in the Rye' by J.D. Salinger",
"'The Hobbit' by J.R.R. Tolkien",
"'The Chronicles of Narnia' by C.S. Lewis",
"'The Da Vinci Code' by Dan Brown",
"'The Hunger Games' by Suzanne Collins",
"'To Kill a Mockingbird' by Harper Lee",
"'The Alchemist' by Paulo Coelho",
"'The Diary of a Young Girl' by Anne Frank",
"'The Kite Runner' by Khaled Hosseini",
"'Gone Girl' by Gillian Flynn",
"'A Game of Thrones' by George R.R. Martin",
"'The Girl on the Train' by Paula Hawkins",
"'The Fault in Our Stars' by John Green",
"'The Help' by Kathryn Stockett",
"'Last Hope' by James Lopez",
"'Think Outside The Box' by Leah Helford",
"'Crack The Code' by Patrick C Harless",
"'Fair To Hope' by Sam Reed",
"Follow Me To Ground' by Sue Rainsford",
"'The Gravity Of Us' by Phil Stamper",
"'A Mind Of Leader' by Kevin Anderson",
"'Peace Through The Storms' by Ken Gire"

    ];
  
    searchInput.addEventListener("input", function() {
      var searchText = searchInput.value.toLowerCase();
      var filteredData = data.filter(function(item) {
        return item.toLowerCase().includes(searchText);
      });
  
      renderSearchResults(filteredData);
    });
  
    function renderSearchResults(results) {
      searchResults.innerHTML = "";
  
      if (results.length === 0) {
        searchResults.innerHTML = "<li>No results found.</li>";
        return;
      }
  
      results.forEach(function(result) {
        var li = document.createElement("li");
        li.textContent = result;
        searchResults.appendChild(li);
      });
    }
  });
  