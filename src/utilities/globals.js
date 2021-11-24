//global variable declarations

//API Key stored in global variable
export const API_KEY = "13b153bf81036f771f08c5ec008eff23";
//bearer token stored in global variable
export const API_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxM2IxNTNiZjgxMDM2Zjc3MWYwOGM1ZWMwMDhlZmYyMyIsInN1YiI6IjYxMWJlNjdhMmUwNjk3MDA0NTk3OTNhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.asU8Zqla2xSU8gJtjPKsHAEiFO7_-DQTSIHINANnj-8";
export const App_Folder_Name = 'websites/groovy-movies';


/*
    This genre object was provided from the api call using this link (using my API key) inside this genres array
    is all the current TMDB genres.
*/
// https://api.themoviedb.org/3/genre/movie/list?api_key=13b153bf81036f771f08c5ec008eff23

const genres = [
    {
    id: 28,
    name: "Action"
    },
    {
    id: 12,
    name: "Adventure"
    },
    {
    id: 16,
    name: "Animation"
    },
    {
    id: 35,
    name: "Comedy"
    },
    {
    id: 80,
    name: "Crime"
    },
    {
    id: 99,
    name: "Documentary"
    },
    {
    id: 18,
    name: "Drama"
    },
    {
    id: 10751,
    name: "Family"
    },
    {
    id: 14,
    name: "Fantasy"
    },
    {
    id: 36,
    name: "History"
    },
    {
    id: 27,
    name: "Horror"
    },
    {
    id: 10402,
    name: "Music"
    },
    {
    id: 9648,
    name: "Mystery"
    },
    {
    id: 10749,
    name: "Romance"
    },
    {
    id: 878,
    name: "Science Fiction"
    },
    {
    id: 10770,
    name: "TV Movie"
    },
    {
    id: 53,
    name: "Thriller"
    },
    {
    id: 10752,
    name: "War"
    },
    {
    id: 37,
    name: "Western"
    }
];
export default genres;