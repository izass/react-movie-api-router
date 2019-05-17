import React, { Component } from 'react'
import MoviesGrid from '../components/moviesGrid';
import axios from 'axios'

//var movies;

var url='http://www.omdbapi.com/?apikey=thewdb&type=movie&plot=full&page=1&s=';
var url2="https://api.themoviedb.org/3/search/movie?api_key=344db5c6830b31f30c9a1b6ba00bde07&language=en-US&page=1&include_adult=false&query="
var search=[];
var movieList=[];
//var it;

export default class MovieSearch extends Component {
    
    //it = this;
    constructor(props) {
        super(props);
        this.state = {
            movieSearch: this.props.location.state.query,
            onCall: true,
            //data: {},        
        }   
    }
     
    
    // componentDidMount () {
    //     this.setState({movieSearch: this.props.location.state.query});
    //     // const { handle } = this.props.match.params
    //     // const { fromNotifications } = this.props.location.state
    
    //     // fetch(`https://api.twitter.com/user/${handle}`)
    //     //   .then((user) => {
    //     //     this.setState(() => ({ user }))
    //     //   })
    // }
    componentDidMount() {
        var self =this;
        self.setState({movieSearch: this.props.location.state.query})
    }
    componentWillMount() {
        search=this.props.location.state.query;
        //console.log(search);
    }

    // searchMovie = () =>  {
    //     //search=this.props.Query;        
    //     movieList.splice(0,100);
    //     this.state.onCall=true; 
    //     search=this.props.location.state.query;
    //     console.log(search);       
    //     var self =this;
    //     if(search===undefined) {
    //         search = this.props.location.state.busca.toLowerCase();
    //     }          
    //         axios.get(url2+search).then(function(response){
    //             console.log(response.data);
    //             console.log(search);
    //             movieList.push(response.data.results);
    //             //self.setState({data: response.data});    
    //            // movieList.push(response.data.Search);
    //             // console.log(this.state.data);
    //             //console.log(movieList);
    //             self.setState({onCall: false});            
    //         })
    //         .catch(function(error) {
    //             console.log(error);
    //         });                      
    // }

    getData = () => {
        if(this.state.onCall) {
            return (
                this.searchMovie()                
            )    
        }else {
            return                             
        }        
    }

    renderBody = () => {  
        // if(this.state.movieSearch) 
        //     this.state.onCall=false;
        search=this.props.location.state.query;
        console.log(search);
        if(!search) {
            return (
                <div style={{color:"white", marginBottom:"50px"}}>vazio{console.log(this.state.MovieSearch)}</div> 
            )    
        }else { 
            console.log(search);
            return (
                <MoviesGrid data={search}/>
            )
        }        
    }

    render() {             
            return (                        
                <div class="container">                                                               
                    {/* {this.getData()}                     */}
                    <div class="container">
                        <header>
                            <h1 style={{color:"white", marginBottom:"50px"}}>Exibindo resultados para {this.props.location.state.busca}</h1>                              
                            {/* {console.log(search)}                         */}
                        </header>
                        {this.renderBody()}
                    </div>                    
                </div>
            );        
        
    }
}