const bookInput = document.querySelector(".bookInput")
const bookName = document.querySelector(".bookName")
const bookAuthor = document.querySelector(".bookAuthor")
const bookPages = document.querySelector(".bookPages")
const bookGenre = document.querySelector(".bookGenre")
const bookContainer = document.querySelector("#bookContainer")
const submitBook = document.querySelector("#submitBook")


let myLibrary = [];



function Book(nameParam, authorParam, pagesParam, genreParam) {
    this.name = nameParam,
        this.author = authorParam,
        this.pages = pagesParam,
        this.genre = genreParam,
        this.haveRead = false;


}


submitBook.addEventListener("click", () => {
    const bookItem = new Book(bookName.value, bookAuthor.value,bookPages.value, bookGenre.value)
    myLibrary.push(bookItem); 
        const bookCase = document.createElement("div");
        bookCase.className = "bookBox";
        bookCase.innerText = `${bookItem.name}\n ${bookItem.author} \n Number of Pages ${bookItem.pages} \n ${bookItem.genre} \n`;
        bookContainer.appendChild(bookCase);

        const removeBook = document.createElement("button");
        removeBook.innerText = "Remove Book";
        bookCase.appendChild(removeBook);
        removeBook.addEventListener("click", () => {
            bookCase.remove();
        })
        const readLabel = document.createElement("label");
        readLabel.innerText = "\n Have you read this book?"
        const haveReadBook = document.createElement("input");
        haveReadBook.setAttribute("type", "checkbox")
        haveReadBook.class = "haveReadBook";
        bookCase.appendChild(readLabel);
        bookCase.appendChild(haveReadBook);
        haveReadBook.addEventListener("change", () => {
            bookItem.haveRead = true;
        })

       
        localStorage.setItem("user",JSON.stringify(bookItem))
        

    });


