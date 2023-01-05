import React from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import styled from 'styled-components';
import Link from 'next/link';

export default function Home() {

  const NavBar = styled.section`
  padding: 4em;
  background: papayawhip;
  width: 100%;

`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
    h2{
      font-size: 0.75em;
      color: green;
    }
`;

const NavButtons = styled.section`
  background: red;
  text-align: center;
  h3{
    flex-direction: column;
    width: 10em;
  }
`;

  return (
    <div>
      <Head>
        <title>Tom Horne</title>
        <meta name="description" content="Homepage of portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <NavBar>
          <Title>
            <h1>
              Tom Horne.
            </h1>
            <h2>Welcome to my portfolio</h2>
          </Title>

        <NavButtons>
            <h3>
              About Me
            </h3>

            <Link href="/projects">
              <h3>
                Projects
              </h3>
            </Link>

            <h3>
              Stuff
            </h3>
        </NavButtons>


        </NavBar>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Tom HORNE!</a>
        </h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>


      </main>

      <footer className={styles.footer}>
        <p>Created by Tom Horne</p>
      </footer>
    </div>
  )
}
