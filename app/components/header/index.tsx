import { IconBook, IconSearch } from '@tabler/icons-react';
import { Autocomplete, Burger, Container, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './class.module.css';
import { useNavigate, useSearchParams } from 'react-router';
import React, { useEffect, useState } from 'react';

const links = [
  { link: '/', label: 'Home' },
  { link: '/favorites', label: 'Favorites' },
];

export function HeaderWithSearch() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [opened, { toggle }] = useDisclosure(false);
  const [search, setSearch] = useState<string>(searchParams.get("search") || "")
  const [searched, setSearched] = useState<string[]>([])

  const fetchQuerySearch = async () => {
    const request = await fetch('/api/books/searches');
    const response = await request.json();
    setSearched(response?.data || [])
  }
  
  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
    >
      {link.label}
    </a>
  ));

  const handleSearchParams = () => {
    searchParams.set('search', search)
    searchParams.set("page", '1')
    if(!search)
      searchParams.delete("search")
    fetchQuerySearch()
    navigate(`/?${searchParams.toString()}`)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === "Enter"){
      handleSearchParams();
    }
  }

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Group>
          {/* <Burger
            opened={opened}
            onClick={toggle}
            size="sm"
            hiddenFrom="xs"
            aria-label="Toggle navigation"
          /> */}
          <IconBook size={28} />
        </Group>

        <Group>
          <Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
            {/* {items} */}
          </Group>
          <Autocomplete
            className={classes.search}
            placeholder="Search"
            rightSection={<IconSearch size={16} stroke={1.5} onClick={handleSearchParams} />}
            data={searched}
            // visibleFrom="xs"
            value={search}
            onChange={(e) => setSearch(e)}
            onKeyDown={handleKeyDown}
          />
        </Group>
      </div>
    </header>
  );
}