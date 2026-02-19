import { Button, Container, Group, Text, Title } from '@mantine/core';
import { Illustration } from './Illustration';
import classes from './index.module.css';
import { Link } from 'react-router';

export function ErrorBoundaryComponent({message, details, stack}:{ message: string, details: string, stack: string | undefined }) {
  return (
    <Container className={classes.root}>
      <div className={classes.inner}>
        <Illustration className={classes.image} />
        <div className={classes.content}>
          <Title className={classes.title}>{message}</Title>
          <Text c="dimmed" size="lg" ta="center" className={classes.description}>
            {details}
          </Text>
          <Group justify="center">
            <Button size="sm" component={Link} to={"/"}>Take me back to home page</Button>
          </Group>
        </div>
      </div>
    </Container>
  );
}