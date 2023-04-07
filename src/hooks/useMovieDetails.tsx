import { useEffect, useState } from "react";
import movieDB from "../api/movieDB";
import { MovieFull } from "../interfaces/movieInterface";
import { Cast, CreditsResponse } from "../interfaces/creditsInterface";

interface MovieDetails {
    isLoading: boolean;
    movieFull?: MovieFull;
    cast: Cast[];
}
const useMovieDetails = ( movieID: number ) => {

    const [ state, setState ] = useState<MovieDetails>({
        isLoading: true,
        movieFull: undefined,
        cast: []
    })

    const getMovieDetails = async() => {

        const movieDetailsPromise = movieDB.get<MovieFull>(`/${ movieID }`)
        const castPromise = movieDB.get<CreditsResponse>(`/${ movieID }/credits`)
    
        Promise.all([ movieDetailsPromise, castPromise ]).then((resp) => {
            setState({
                isLoading: false,
                movieFull: resp[0].data,
                cast: resp[1].data.cast
            })
        }).catch( console.log )
    
    } 

    useEffect(() => {
        getMovieDetails();
    }, [])
    

    return {
        ...state
    }
}

export default useMovieDetails