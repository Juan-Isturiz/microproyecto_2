import { useState } from "react"
import styles from "./SearchForm.module.css"

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
        // console.log(search)

    }
    return (
        <div className={styles.Container}>
            <form onSubmit={submitHandler}>
                <input type="input" name="text"onChange={onChangeHandler} placeholder="Movie title"/>
                <button type="submit">Search</button>
            </form>
        </div>
    )
}
export default SearchForm