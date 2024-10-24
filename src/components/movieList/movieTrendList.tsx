
import {  Paper,Grid } from '@mui/material';
import { MovieDataType } from '../../assets/data';
import MovieTrendCard from '../movieCard/movieTrend';

interface MovieTrendListProps {
    trendingList: MovieDataType[];
}

function MovieTrendList({ trendingList }: MovieTrendListProps) {
    return (
        <Grid container spacing={2}>
            {
                trendingList.map((movie) => (
                    <Grid item key={movie.id}>
                        <Paper elevation={0} sx={{ backgroundColor: "transparent" }}>
                            <MovieTrendCard movie={movie} />
                        </Paper>
                    </Grid>
                ))}
        </Grid>
    )
}

export default MovieTrendList