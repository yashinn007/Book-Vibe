import React from "react";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router";

const BookCard = ({ book }) => {
  return (
    <Link
      to={`/bookDetails/${book.bookId}`}
      className="card bg-base-100 shadow-sm"
    >
      <figure className="p-6">
        <img
          src={book.image}
          alt={book.bookName}
          className="rounded-xl h-[250px]"
        />
      </figure>
      <div className="card-body">
        <div className="flex gap-2 items-center">
          {book.tags.map((tag, index) => (
            <div
              key={index}
              className="badge text-green-500 bg-green-100 font-semibold"
            >
              {tag}
            </div>
          ))}
        </div>
        <h2 className="card-title text-3xl font-bold">{book.bookName}</h2>
        <p className="font-semibold text-lg text-gray-600">{book.author}</p>

        <div className="card-actions justify-between border-t border-gray-300 pt-4 items-center">
          <div className="font-medium text-lg text-gray-600">
            {book.category}
          </div>
          <div className="font-medium text-lg text-gray-600 flex items-center gap-1.5">
            {book.rating} <FaRegStar></FaRegStar>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
