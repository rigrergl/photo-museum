import Layout, {Page} from "../components/Layout";

const search = () => {
    return (
        <Layout currentPage={Page.SEARCH}>
            <p>Search</p>
        </Layout>
    );
};

export default search;
