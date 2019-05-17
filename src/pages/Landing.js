import React, { Component} from 'react'
import axios from 'axios'
import '../App.css'
import MoviesGrid from '../components/moviesGrid';

var moviesArray = [];
//var url1 = "http://www.omdbapi.com/?apikey=thewdb&type=movie&plot=full&t="
var url2front = "https://api.themoviedb.org/3/movie/";
var url2end = "?api_key=344db5c6830b31f30c9a1b6ba00bde07&language=en-US&append_to_response=videos,credits"

class Landing extends Component {            
    state = {
        movieMap: [
                 105,//"back+to+the+future            
                 82695,//"les+misérables"
                 299536,//"avengers+infinity+war"
                 68718,//"django+unchained"
                 27205,//"inception
                 670,//"oldboy"
        ],
        onCall:true,
    }

    testApi =() => {
        moviesArray.splice(0,6);
        this.state.onCall=true;
        var self = this;  
        // +self.state.movieMap[i].movie      
        for(var i=0; i<6; i++) {
            //console.log(i);
            axios.get(url2front+self.state.movieMap[i]+url2end).then(function(response){                
                moviesArray.push(response.data);
                self.setState({onCall:false});                
            })
            .catch(function(error) {
                console.log(error);
            });            
        }                     
    }

    getData = () => {
        if(this.state.onCall) {
            // this.testApi();    
            return (
                this.testApi() 
                // <div>Loading...</div>               
            )    
        }else return  
    }

    render() {
        this.getData();
        return(
            <div class="container">
                               
                <header 
                    class="jumbotron Header-image"
                    onClick={this.props}>  
                    <div class="Title">
                        <h1>My DemoApp</h1>
                    </div>                                      
                </header>                   
                <MoviesGrid data={moviesArray} />                
            </div>
        );
    }
}

export default Landing;