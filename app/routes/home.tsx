import BookHome from "./books/index";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Book Explorer App" },
    { name: "description", content: "Welcome to Book Explorer" },
  ];
}

export default function Home() {
  return <>
    <BookHome />
  </>;
}
