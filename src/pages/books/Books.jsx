import React, { useContext } from "react";
import { BookContext } from "../../components/context/BookContext";

const Books = () => {
  const { storedBooks, wishList } = useContext(BookContext);
  console.log("storedBooks:", storedBooks, "wishList:", wishList);

  return (
    <div className="container mx-auto">
      read list: {storedBooks.length} <br />
      wish list: {wishList.length}
    </div>
  );
};

export default Books;
// storedBooks;
