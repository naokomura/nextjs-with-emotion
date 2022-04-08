import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import { css } from "@emotion/react";
import { styles } from "../styles/home";

const Foo = styled.a`
  color: red;
  background: #ccc;
`;

const testStyle = css`
  background: #ddd;
  font-size: 24px;
`;

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
          <span> with Emotion</span>
        </h1>
        <Foo>Styled Components</Foo>
        <div css={testStyle}>
          <p>こんにちは、pタグさん。</p>
        </div>
        <button css={styles.sampleButton}>Button Label</button>

        <p>
          Get started by editing <code>pages/index.tsx</code>
        </p>
      </main>
    </div>
  );
};

export default Home;
