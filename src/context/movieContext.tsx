
import { createContext, useReducer, ReactNode, ReactElement } from "react";
import { MovieDataType, moviesData } from "../assets/data";



//define the state and action types
interface MovieState {
    movies: MovieDataType[]
}

//intial state
const intialMovieState: MovieState = {
    movies: moviesData
}

const enum REDUCER_ACTION_TYPE {
    TOGGLE_BOOKMARK,
}

interface MovieAction {
    type: REDUCER_ACTION_TYPE;
    id: string;
}


//reducer

const movieReducer = (state: MovieState, action: MovieAction): MovieState => {
    switch (action.type) {
        case REDUCER_ACTION_TYPE.TOGGLE_BOOKMARK:
            return {
                ...state,
                movies: state.movies.map((movie) =>
                    movie.id === action.id
                        ? { ...movie, isBookmarked: !movie.isBookmarked }
                        : movie
                )

            };
        default:
            throw new Error("Unhandled action type")
    }
}


//custom hook for using the movie context
const useMovieContext = (initState: MovieState) => {
    const [state, dispatch] = useReducer(movieReducer, initState)

    const toggleBookmark = (id: string) => {
        dispatch({ type: REDUCER_ACTION_TYPE.TOGGLE_BOOKMARK, id })
    }
    return { state, toggleBookmark }

}

//context creation
type MovieContextType = ReturnType<typeof useMovieContext>

const intialContextState: MovieContextType = {
    state: intialMovieState,
    toggleBookmark: () => { }
}

export const MovieContext = createContext<MovieContextType>(intialContextState)

type MovieProviderProps = { children: ReactNode }

export const MovieProvider = ({ children }: MovieProviderProps): ReactElement => {
    return (
        <MovieContext.Provider value={useMovieContext(intialMovieState)}>
            {children}
        </MovieContext.Provider>
    )
}