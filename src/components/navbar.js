import React, { Component} from 'react';
import { Link } from 'react-router-dom';
// import routesConfig from '../routerConfig';
// import MovieSearch from '../pages/MovieSearch';
// import Landing from '../pages/Landing';
import axios from 'axios'

//var search ="";
var url2="https://api.themoviedb.org/3/search/movie?api_key=344db5c6830b31f30c9a1b6ba00bde07&language=en-US&page=1&include_adult=false&query="
//var search=""
//var movieList=[];

class NavBar extends Component {

    // state = {
    //     collapseID: ''
    //   }
      
    // toggleCollapse = collapseID => () => {
    //     this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));
    // }

    state = {
        movieSearch: "",
        onCall: false,
        data: {}
    }   

    handleChange = event => {
        console.log(event.target.value);
        this.setState({ movieSearch: event.target.value });
        //console.log(this.state.movieSearch);
    }

    // handleSubmit = event => {
    //     event.preventDefault();
    
    //     const user = {
    //       name: this.state.name
    //     };
    
    //     axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
    //       .then(res => {
    //         console.log(res);
    //         console.log(res.data);
    //       })
    //   }

    searchMovie = () => {
        console.log("action");
        this.setState({onCall: true});
        var self =this;
        //search=this.state.movieSearch.toLowerCase(); 
        //this.setState({movieSearch:""})
        var map= [];                
        var search = this.state.movieSearch.toLowerCase();
        //console.log(this.setState.movieSearch);
         axios.get(url2+search).then(function(response){
            response.data.results.forEach(function(result){
                map.push(result.id);
            })
            console.log(map);
            self.setState({data:map});
            console.log(self.state.data);
            //console.log(search);
            //movieList.push(response.data.results);
            //self.setState({data: response.data});    
            // movieList.push(response.data.Search);
            // console.log(this.state.data);
            //console.log(movieList[0]);
            self.setState({onCall: false});             
        })
        .catch(function(error) {
            console.log(error);
            self.setState({onCall: false});
        });
        
    }

    getData = () => {
        if(this.state.onCall) {
            return  this.searchMovie();
                                             
        }else {
            //console.log(this.state.movieSearch.data);
            return 
        }        
    }

    render() {
        return (
            <div>
                <nav class="nav navbar-top">
                    <div class="container">
                        <div class="navbar-header">
                            <Link class="navbar-brand" to="/"><span class="glyphicon glyphicon-film" aria-hidden="true"></span> Home</Link>
                            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span class="sr-only">Toggle navigation</span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>            
                        </div>
                        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">              
                            <ul class="nav navbar-nav navbar-right">
                                <li><Link class="navbar-brand" to="/">Filmes</Link>   </li>         
                                <li><Link class="navbar-brand" to="/">Signup</Link>   </li>         
                                <li><Link class="navbar-brand" to="/">Logout</Link></li>
                            </ul>  
                            <div class="row navbar-form navbar-center App">
                                <form class="input-group" style={{borderRadius:"10px"}} >
                                    <input 
                                        type="text" 
                                        class="form-control"
                                        placeholder="Pesquisar"
                                        //value={this.state.searchMovie} 
                                        style={{border:"none"}}
                                        onChange={this.handleChange}
                                        />
                                    <div class="input-group-btn">
                                        <Link  
                                            to={{
                                                pathname:"/movieSearch",
                                                state: {
                                                    //query: this.state.movieSearch.toLowerCase(),
                                                    busca: this.state.movieSearch,
                                                    query: this.state.data,
                                                }
                                            }}                
                                            class="btn btn-default" 
                                            type="button" 
                                            style={{border:"none", height:"34px"}}
                                            onClick={this.getData()}
                                            >
                                            <span class="glyphicon glyphicon-search " aria-hidden="true"></span>
                                        </Link>
                                    </div>                                        
                                </form>
                            </div>                                                                                            
                        </div>           
                    </div>
                </nav>                            
            </div>
        );
    }
}

export default NavBar;
