import Landing from "./pages/Landing";
import MoviePage from "./pages/MoviePage";
import MovieSearch from "./pages/MovieSearch";

const routesConfig =[
    {
        path:"/",
        component:Landing,
        exact:true,
    },
    {
        path:"/moviePage",
        component:MoviePage,
        exact:true,
    },
    {
        path:"/movieSearch",
        component:MovieSearch,
        exact:true,
    },
]

export default routesConfig;