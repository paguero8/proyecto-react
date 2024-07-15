/* eslint-disable react/prop-types */

const Movie = ({title}) => {
    return(
        <div>
            <img src="https://via.placeholder.com/150" alt="movie"/>
            <h3>{title}</h3>
        </div>

    )
}

export { Movie }