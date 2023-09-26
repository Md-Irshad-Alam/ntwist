import { Autocomplete, Group, Burger, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link } from 'react-router-dom';

import classes from './Styles/Header.module.css'

const links = [
  { link: '/', label: 'Home' },
  { link: '/industries', label: 'Industries' },
  { link: '/soft', label: 'AI Software' },
  { link: '/blog', label: 'Blog' },
  { link: '/contact', label: 'Contact Us' },
];

export function HeaderSearch() {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      onClick={(event) => event.preventDefault()}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
            <img src="https://ntwist.com/wp-content/uploads/2022/03/favicon.png" alt="logo" className={classes.logo}/>
            <h2 className={classes.title}>NTWIST</h2>
        </Group>

        <Group>
          <Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
          <Link to='/' >Home</Link>
          <Link to='/indus' >Industries</Link>
          <Link to='/ai' >AI Software</Link>
          <Link to='/blog' >Blog</Link>
          <Link to='/cont' >Contact Us</Link>
          </Group>
          
        </Group>
      </div>
    </header>
  );
}