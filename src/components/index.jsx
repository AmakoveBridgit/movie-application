import React, { useState, useEffect } from "react";
import { getMovies } from "../utils/utilities";
import "./style.css"
// import { BrowserRouter} from "react-router-dom";



import ImageContainer from "../atoms/ImageContainer";



const GetMovies = () => {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        (async () => {
            setLoading(true)
            const movies = await getMovies
                ();
            console.log({ movies });
            setLoading(false)
            setMovies(movies.results);

        })();
    }, []);

    if (loading) {
        return <h1>Loading movies...</h1>
    }
    return (
        <div className="container">
            {movies && !loading && movies.length > 0 &&
                movies.map((item) =>( 


                    <ImageContainer props={item}/>
               ) )}
            {movies && !loading && movies.length === 0 && (<h1>No movies found</h1>)}
        </div>
    )

}
export default GetMovies;