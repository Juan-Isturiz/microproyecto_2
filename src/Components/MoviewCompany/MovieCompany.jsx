

const MovieCompany = (props) => {

    return (
        <ul>
            {props.productionCompany.map(company => (
                <li key={Math.random()}>
                    <p>{company.name}</p>
                    {typeof company.logo_path !== 'undefined' &&
                        <img src={"https://www.themoviedb.org/t/p/h50_filter(negate,000,666)" + company.logo_path} />
                    }
                </li>
            ))}
        </ul>
    )
}
export default MovieCompany