// TODO: import useLocation from react-router-dom
import { useSearchParams, useLocation } from 'react-router-dom';

function Search() {

  // TODO: create a variable to use the location hook
  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const query  = params.get('q');

  console.log(searchParams);

  // TODO: use URLSearchParams to get the query parameter from the URL

  // TODO: get the value of the query "q" parameter

  return (
    <div>
      <h1>Search Page</h1>
      {/* TODO: display the query parameter */}
      <h1>Search Results for: {query}</h1>
    </div>
  );
}

export default Search;
