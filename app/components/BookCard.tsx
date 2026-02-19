import { Badge, Button, Card, Text, Image as MantineImage, Box, Anchor, NavLink } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import { useMemo } from "react";
import { Link } from "react-router";
import type { Book as BookProps, Person } from "~/types/book";

export default function BookCard(
  {
    book
  }:
  {
    book: BookProps
  }
) {
  const authors = useMemo(() => {
    return book.authors.map((author: Person) => author.name).join(" and ");
  }, [book])
  const languages = useMemo(() => {
    return book.languages.join(", ");
  }, [book])
  return (
    <Card withBorder radius={0} pos={"relative"}>
      <Badge color="blue" size="sm" variant="white" radius={0} pos={"absolute"} top={0} right={0}>
        {book.download_count} downloads
      </Badge>
      <Card.Section p={10} display={"flex"}>
        <Box h={250} w={"auto"} pos={"relative"} mx={"auto"}>
          <MantineImage alt={book.title} src={book.formats["image/jpeg"]} height={"100%"} width={"auto"} />
        </Box>
      </Card.Section>
      <Text fw={500} fz={14} lh={1} mt={10} lineClamp={2}>{book.title}</Text>
      <Text fw={500} fz={12} lh={1} mt={10}>By: {authors}</Text>
      <Text fw={500} fz={12} lh={1} mt={5} mb={10}>Languages: {languages}</Text>
      <Card.Section>
        &nbsp;
      </Card.Section>
      <Button
        pos={"absolute"}
        bottom={0}
        left={0}
        variant='light'
        fullWidth
        radius={"xs"}
        rightSection={<IconArrowRight size={24} />}
        component={Link}
        to={`/books/${book.id}`}
        state={book}
      >
        View Details
      </Button>
    </Card>
  );
}