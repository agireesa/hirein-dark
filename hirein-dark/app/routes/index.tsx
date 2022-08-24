import { redirect } from '@remix-run/node';


function Home() {

  return (
    <div>
      <h1>Welcome to HireIn 2.0</h1>
      <div className='page-content'>
        <form method='GET' action='/search'>
            <div className="form-control" id='searchBar'>
                <label htmlFor='search'>Search by Applicant name</label>
                <span>
                  <input type='text' name='query' id='search' autoComplete="off"/>
                </span>
            </div>
            <button type='submit' className='btn'>Search</button>
        </form>
      </div>
    </div>
  )
}

export default Home
