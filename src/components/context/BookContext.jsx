import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const BookContext = createContext();

const BookProvider = ({ children }) => {
  //BookDetails code for context API
  const [storedBooks, setStoredBooks] = useState([]);
  const [wishList, setWishList] = useState([]);

  const handelMarkAsRead = (currentBook) => {
    // step-1: store book Id or object
    // step-2: where to shore
    // step-3: array or collection
    // step-4: if the book is already exist then show a alert
    // step-5: if not then add the book in the array
    console.log("currentBook:", currentBook);

    const isExistBooks = storedBooks.find(
      (book) => book.bookId === currentBook.bookId,
    );
    if (isExistBooks) {
      toast.error("This book is already exist in read list");
      return;
    } else {
      setStoredBooks([...storedBooks, currentBook]);
      toast.success(`${currentBook.bookName} is added to list`);
    }
  };

  const handelWishList = (currentBook) => {
    // step-1: store book Id or object
    // step-2: where to shore
    // step-3: array or collection
    // step-4: if the book is already exist then show a alert
    // step-5: if not then add the book in the array

    const isExistInReadList = storedBooks.find(
      (book) => book.bookId == currentBook.bookId,
    );
    if (isExistInReadList) {
      toast.error("This book is already in read list");
      return;
    }

    const isExistBooks = wishList.find(
      (book) => book.bookId == currentBook.bookId,
    );
    if (isExistBooks) {
      toast.error("This book is already exist");
      return;
    } else {
      setWishList([...wishList, currentBook]);
      toast.success(`${currentBook.bookName} is added to wish list`);
    }
  };

  const data = {
    storedBooks,
    setStoredBooks,
    handelMarkAsRead,
    handelWishList,
    setWishList,
    wishList,
  };

  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};
export default BookProvider;
