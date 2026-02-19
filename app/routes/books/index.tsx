import { Box, Button, Group, SimpleGrid, Text } from "@mantine/core";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import BookCard from "~/components/BookCard";
import FilterComponent from "~/components/filter";
import LoadingComponent from "~/components/Loading";
import type { Book } from "~/types/book";

const BookHome = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [hasMoreRecords, setHasMoreRecords] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [nextPage, setNextPage] = useState<number>(parseInt(searchParams.get('page') || '1'));
  const search_query = searchParams.get('search');
  
  const fetchBooks = async () => {
    setLoading(true)
    const booksRequest = await fetch(`/api/books?page=${nextPage}&search=${search_query || ''}`);
    const booksResponse = await booksRequest.json();
    const moreBooks = [...books, ...booksResponse?.data?.results]
    setBooks(moreBooks);
    setHasMoreRecords(!!booksResponse?.data?.next);
    setLoading(false);
  }

  useEffect(() => {
    fetchBooks();
  },[nextPage]);
  
  useEffect(() => {
    let manual_fetch = false;
    if(!!search_query){
      setBooks([]);
      setHasMoreRecords(false);
      if(nextPage > 1){
        setNextPage(1)
      }else{
        manual_fetch = true;
      }
    }else{
      manual_fetch = true
    }
    if(manual_fetch) fetchBooks()
  }, [search_query])

  return <Box mb={10} pos="relative">
    {loading && <LoadingComponent />}
    <FilterComponent />
    {search_query && <Group mb={10}>
      <Text>Search result for "{search_query}"</Text>
    </Group>}
    {books.length === 0 && <Text>No records found.</Text>}
    <SimpleGrid
      cols={{base: 1, xs: 2, sm: 3, md: 3, lg: 4}}
    >
      {books.map((book: Book) => <BookCard key={book.id} book={book} />)}
    </SimpleGrid>
    {hasMoreRecords && <Box mt={40} ta={"center"}>
      <Button
        w={"50%"}
        onClick={() => setNextPage(nextPage + 1)}
        loading={loading}
      >
        Load More
      </Button>
    </Box>}
  </Box>
}

export default BookHome;