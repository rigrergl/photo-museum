import React, { ReactNode } from "react";
import Head from "next/head";
import styles from "../styles/Layout.module.css";

type Props = {
  children: any,
  currentPage: string,
}

const Layout = ({ children, currentPage} : Props) => {
  return (
    <div>
      <Head>
        <title>Photo Museum</title>
        <link rel="icon" href="TODO" />
      </Head>
      <div className={styles.container}>
        {children}

      </div>
    </div>
  );
};

export default Layout;