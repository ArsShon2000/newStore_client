import Layout from "@/components/layout/Layout";
import CatalogPage from "@/components/templates/Catalog/CatalogPage";
import useRedirectByCheck from "@/hooks/useRedirectByCheck";
import Head from "next/head";

export default function Catalog() {
  const { shouldLoadContent } = useRedirectByCheck()
  return (
    <>
      <Head>
        <title>Hamsters | {shouldLoadContent ? 'Каталог' : ''}</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg" sizes="32x32" href="/img/logo.svg" />
      </Head>
      { shouldLoadContent && <Layout>
        <main>
          <CatalogPage />
          <div className="overlay" />
        </main>
      </Layout>}
    </>
  );
}
