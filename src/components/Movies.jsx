/* eslint-disable react/prop-types */

const Movie = ({title, poster}) => {
    return(
        <div>
            <img src={poster} alt="movie"/>
            <h3>{title}</h3>
        </div>
    )
}

export { Movie }