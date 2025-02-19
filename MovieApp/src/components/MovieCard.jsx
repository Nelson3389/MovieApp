import React from 'react'

const MovieCard = ({ movie:
    { title, Vote_average,poster_path, release_date, original_language }
}) => {
    return (
        <div className="movie-card">
            <p className="text-white">{title}</p>
        </div>
    )
}
export default MovieCard
