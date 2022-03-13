import { useState } from "react"

const SearchForm = (props) => {
    const [search, setSearch] = useState("")
    const onChangeHandler =(event)=>{
        setSearch(event.target.value)
    }
    const submitHandler = (event) => {
        event.preventDefault()
        setSearch(event.target.text.value)
        event.target.text.value = ""
        props.onSearch(search)

    }
    return (
        <form onSubmit={submitHandler}>
            <input type="text" name="text"onChange={onChangeHandler}/>
            <button type="submit">Search</button>
        </form>
    )
}
export default SearchForm