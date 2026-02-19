import { Link, useLocation, useNavigate, useParams } from "react-router"
import { Box, Image, Grid, Text, Group } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";

const BookDetail = () => {
  const navigate = useNavigate()
  const location = useLocation();
  const book = location.state || {};
  
  return <>
    <Box mb={20}>
      <Group gap={5} onClick={() => (navigate(-1))} style={{cursor: "pointer"}}>
        <IconArrowLeft />
        <Text>Go Back</Text>
      </Group>
    </Box>
    <Grid gutter={"md"} mb={5}>
      <Grid.Col span={{base: 12, sm: "content"}} content="center" ta="center">
        <Image src={book.formats["image/jpeg"]} alt={book.title} width={400} height={600} style={{marginTop: 20}} />
      </Grid.Col>
      <Grid.Col span={{base: 12, sm: "auto"}}>
        <h1>{book.title}</h1>
        <Group>
          <Text fz={13}>By: </Text>
          <Text fz={14} fw={600}>{book.authors.map((author: { name: string }) => author.name).join(" and ")}</Text>
        </Group>
        <Group>
          <Text fz={13}>Languages: </Text>
          <Text>{book.languages.join(", ")}</Text>
        </Group>
        <Group>
          <Text fz={13}>Downloads: </Text>
          <Text>{book.download_count}</Text>
        </Group>

        <Text pt={10}>{book.summaries.join(" ")}</Text>

      </Grid.Col>
    </Grid>
  </>
}

export default BookDetail;