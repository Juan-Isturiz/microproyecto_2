import { useEffect, useState,useContext } from "react"
import axios from "axios"
import MovieCompany from "../MoviewCompany/MovieCompany"
import styles from "./MovieView.module.css"
import MovieDetails from "../MovieDetails/MovieDetails"
import { AppContext } from '../Context/AppContext'
const MovieView = (props) => {
    const [moviedata, setmoviedata] = useState({
        original_title: '',
        genres: [{ name: '' }],
        original_language: '',
        budget: 0,
        overview: null,
        vote_average: 0,
        poster_path: null,
        production_companies: [{ name: '' }],
        release_date: null,
        status: ''

    })
    const {movieId} = useContext(AppContext)
    const gral_link = `https://api.themoviedb.org/3/movie/${movieId}?api_key=bb291031d3efe288820c538284501bf9`
    const getMovie = async (url) => {
        try {
            const data = await axios.get(url)
            setmoviedata(data.data)
        } catch (error) {
            alert(error)
        }
    }
    useEffect(() => {
        getMovie(gral_link)
    }, [])
    const genresRender = (arr) => {
        let genres = ''
        for (let index = 0; index < arr.length; index++) {
            genres += `${arr[index].name}`;
            if (index !== (arr.length - 1)) {
                genres += `, `;
            }

        }
        return genres

    }
    const getLanguage = () => {
        switch (moviedata.original_language) {
            case 'en':
                return ('English');
            case 'fr':
                return ('French');
            case 'es':
                return ('Spanish');
            case 'it':
                return ('Italian');
            case 'de':
                return ('German');
            case 'ru':
                return ('Russian');
            case 'zh':
                return ('Chinese');
            case 'ja':
                return ('Japanese');
            case 'ko':
                return ('Korean');
            default:
                return ("I ain't no no important language")
        }
    }
    return (
        <div className={styles.mainHeader}>
            <div>
                {moviedata.poster_path != null &&
                    <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2` + moviedata.poster_path} className={styles.mainHeader__img} />}
            </div>
            <div >
                <h1 className={styles.mainHeader__title}>
                    {moviedata.original_title}
                </h1>

                <p className={styles.mainHeader__graldata}>
                    {moviedata.release_date} ■ {genresRender(moviedata.genres)}
                </p>
                <div className={styles.mainHeader__text}>
                    <h1>Overview</h1>
                    <p>
                        {moviedata.overview}
                    </p>
                </div>
                <div className={styles.misc}>
                    <MovieDetails movieMisc={[
                        {title:'Language', value: getLanguage()},
                        {title :'Status', value: moviedata.status,},
                        {title: 'Budget', value:`${moviedata.budget}$`},
                        {title: 'Rating', value:moviedata.vote_average }
                        ]}/>
                    <MovieCompany productionCompany={moviedata.production_companies}></MovieCompany>
                </div>
            </div>
        </div>
    )
}
export default MovieView