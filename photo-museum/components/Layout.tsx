import Link from "next/link";
import styles from '../styles/Layout.module.css'

export enum Page {
    GALLERY = 0,
    UPLOAD,
    SEARCH
}

type Props = {
    children: any,
    currentPage: Page //TODO: unused attribute. Use this to bold current page
}

const Layout = ({ children, currentPage }: Props) => {
    return (
        < div >
            <nav className={styles.navItem}>
                <Link href="/gallery">Gallery | </Link> 
                <Link href="/upload">Upload | </Link> 
                <Link href="/search">Search</Link>
            </nav>

            {children}
        </div >
    );
};

export default Layout;
