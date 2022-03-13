
import styles from "./MovieCompany.module.css"
const MovieCompany = (props) => {
    let text ='Production '
    if(props.productionCompany.length<=1){
        text += 'Company'
    } else{
        text += 'Companies'
    }
    return (
        <div>
        <h3 className={styles.title}>{text}</h3>
        <ul className={styles.company_container}>
            {props.productionCompany.map(company => (
                <li key={Math.random()} className={styles.companyItem}>
                    <p className={styles.companyItem__text}>{company.name}</p>

                    {typeof company.logo_path !== 'undefined' &&
                        <img
                            src={"https://www.themoviedb.org/t/p/h50_filter(negate,000,666)" + company.logo_path}
                            className={styles.companyItem__img}
                        />
                    }
                </li>
            ))}
        </ul>
        </div>
    )
}
export default MovieCompany