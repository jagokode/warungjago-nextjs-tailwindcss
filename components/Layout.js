import Head from 'next/head';
import Link from 'next/link';

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title ? `${title} - warungjago` : 'warungjago'}</title>
        <meta name="description" content="ecommerce, toko, shopping, warung" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 items-center px-4 justify-between shadow-md">
            <Link href="/">
              <a className="text-lg font-bold">warungjago</a>
            </Link>
            <div>
              <Link href="/cart">
                <a className="p-2">Cart</a>
              </Link>
              <Link href="/login">
                <a className="p-2">Login</a>
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex shadow-inner h-10 items-center justify-center">
          Hak Cipta &copy; 2022 warungjago
        </footer>
      </div>
    </>
  );
};

export default Layout;
