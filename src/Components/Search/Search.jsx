import { useState,useEffect  } from "react";
import SearchResult from "../../Pages/SearchResult";
import SearchForm from "../SearchForm/SearchForm";
import MovieBox from "../MovieBox/MovieBox";

const Search =(props)=>{
    const [search, setSearch] = useState("")
    let url = "https://api.themoviedb.org/3/search/movie?api_key=bb291031d3efe288820c538284501bf9&query="
    const searchHandler =(query)=>{
        setSearch(`${url}${query}`)
    }
    useEffect(()=>{
        console.log(search)
    },[search])
    
    return(
        <div>
            <SearchForm onSearch={searchHandler} onClick={<MovieBox title="Search results..." home={false} url = {search} />}/>    
        </div>
    )
}
export default Search