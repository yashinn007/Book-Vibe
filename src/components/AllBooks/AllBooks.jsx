import React, { use } from "react";
import BookCard from "../ui/BookCard";

const booksPromise = fetch("/booksData.json").then((res) => res.json());

const AllBooks = () => {
  const books = use(booksPromise);
  //   console.log(books);
  return (
    <div className="py-12 container mx-auto">
      <h2 className="font-bold text-3xl text-center mb-8">Books</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {books.map((book) => (
          //    ------cart------
          <BookCard key={book.bookId} book={book}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
