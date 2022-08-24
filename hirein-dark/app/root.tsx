import { Outlet, Link, Links } from "@remix-run/react";
import globalStylesUrl from '~/styles/global.css';

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}

export const links = () => [{rel: 'stylesheet', href: globalStylesUrl}]

function Document({children, title}:any){
  return (
    <html lang="en">
      <head>
        <Links />
        <title>HireIn Search</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

function Layout({children}:any){
  return(
    <>
    <nav className ='navbar'>
      <Link to='/' className='logo' style={{fontStyle: 'italic'}}>
        HireIn
      </Link>
    
      <ul className="nav">
        <li>
          <Link to='/posts'>Posts</Link>
        </li>
      </ul>
    </nav>

    <div className="container">
      {children}
    </div>
    </>
  )
}

export function ErrorBoundary({error}:any){
  console.log('Error happened here :P')
  console.log(error)
  return (
      <Document>
        <Layout>
          <h1>Error</h1>
          <p>{error.message}</p>
        </Layout>
      </Document>
  )
}