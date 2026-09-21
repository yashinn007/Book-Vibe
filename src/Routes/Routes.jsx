import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/Mainlayout";
import Homepage from "../pages/Homepage/Homepage";
import Books from "../pages/books/Books";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import BookDetails from "../pages/BookDetails/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      { index: true, element: <Homepage></Homepage> },
      { path: "/books", element: <Books></Books> },
      {
        path: "/bookDetails/:bookId",
        element: <BookDetails></BookDetails>,
        loader: () => fetch("/booksData.json"),
      },
    ],
    errorElement: <ErrorPage></ErrorPage>,
  },
]);
