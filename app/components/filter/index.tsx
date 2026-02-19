'use client';
import { Box, Button, Collapse, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconFilter2 } from "@tabler/icons-react";

export default function FilterComponent(){
  const [opened, {toggle}] = useDisclosure(false)
  return (<>
    <Box mb={5}>
      <Button size="xs" variant="subtle" onClick={toggle}>
        <IconFilter2 size={14} />&nbsp; Filter
      </Button>
    </Box>
    <Collapse in={opened} px={15}>
      <Box mb={20}>
        <Text fz={14} c={"dimmed"}>Filter Options</Text>
      </Box>
    </Collapse>
  </>);
}