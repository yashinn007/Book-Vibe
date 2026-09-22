import { useContext, useMemo } from "react";
import { BookContext } from "../context/BookContext";
import BookCard from "../ui/BookCard";

const ListedReadList = ({ sortingType }) => {
  const { storedBooks } = useContext(BookContext);

  const filteredReadList = useMemo(() => {
    if (sortingType === "pages") {
      return [...storedBooks].sort((a, b) => a.totalPages - b.totalPages);
    }

    if (sortingType === "rating") {
      return [...storedBooks].sort((a, b) => a.rating - b.rating);
    }

    return storedBooks;
  }, [sortingType, storedBooks]);

  if (filteredReadList.length === 0) {
    return (
      <div className="h-[50vh] bg-gray-100 flex justify-center items-center">
        <h2 className="text-3xl font-bold">No read list data found</h2>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredReadList.map((book, index) => (
          <BookCard key={index} book={book}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default ListedReadList;
