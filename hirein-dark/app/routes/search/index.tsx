import {useLoaderData, Link, useParams} from '@remix-run/react';
import type { LoaderFunction } from "@remix-run/node"; 


export const loader: LoaderFunction = async ({request}:any) =>{

    const url = new URL(request.url);
    const searchQuery = url.searchParams.get("query");
    const res = await fetch("https://jsonplaceholder.typicode.com/users");

    const data = {
        query: searchQuery,
        applications: await res.json()
    }

    return data
}

function search(){
//use loader and params

    const {query, applications} = useLoaderData(); 
//read query params

    return (
        <>
        Showing results for {query}
        <ul className="posts-list">
                {applications.map ((application:any) => 
                <li key ={application.id}>{application.name}</li>
                )}
        </ul>
        </>
    )
}

export default search