import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/books", "routes/books/index.tsx"),
  route("/books/:id", "routes/books/book-detail.tsx"),
  route("/favorites", "routes/books/favorites.tsx"),
] satisfies RouteConfig;
