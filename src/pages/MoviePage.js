import React, { Component } from 'react'
import YouTube from 'react-youtube'
import { Link, Route } from 'react-router-dom'

var director;
var cast;
var year;
var genre;

export default class MoviePage extends Component {    

    catchDirector = (iten) => {
        director ="";
        iten.forEach(function(people){
            if(people.department ==="Directing" && people.job==="Director"){                
                if(director === "")
                    director = people.name;                
                else
                    director = director+", "+people.name;
            }
            else {                
                return 
            }                
        });
    }

    catchCast = (iten) => {        
        cast ="";
        for (var i=0; i<5; i++) {
            if(cast === "")
                    cast = iten[i].name;                
                else
                    cast = cast+", "+iten[i].name;
        } 
    }

    catchYear = (iten) => {
        year="";
        year = iten.substring(0,4);
    }

    catchGenres = (iten) => {
        genre="";
        iten.forEach(function(target){            
            if(genre === "")
                    genre = target.name;                
                else
                    genre = genre+", "+target.name;
        })        
    }

    render() {
        var element = this.props.location.state.movie;
        this.catchDirector(element.credits.crew);
        this.catchCast(element.credits.cast);
        this.catchYear(element.release_date);
        this.catchGenres(element.genres);

        return (
            <div class="container" style={{color:"white", marginTop:"30px"}}>
                <div class="row">
                    <div class="col-md-12">
                        <div class="col-md-4">
                            <div class="thumbnail">
                                <img src={"https://image.tmdb.org/t/p/w500/"+element.poster_path}/>                                     
                                {/* <img src="https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_SX300.jpg"/> */}
                            </div> 
                            <div class="col-md-12" style={{color:"white", marginBottom:"20px"}}>
                                <div class="col-md-6" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                                    <span class="glyphicon glyphicon-heart" aria-hidden="true" style={{fontSize:"1.9em"}}></span>
                                </div>
                                <div class="col-md-6" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                                    <span class="glyphicon glyphicon-eye-open" aria-hidden="true" style={{fontSize:"1.9em"}}></span>
                                </div>                                
                            </div>   
                        </div>
                                          
                        <div class="col-md-8"> 
                            <h1>{element.title}</h1>                            
                            <h3>{year} Dirigido por {director}</h3>
                            <p>{element.overview}</p>
                            <h3>Elenco</h3>
                            <p>{cast}</p>
                            <h3>Genero</h3>
                            <p>{genre}</p>
                            <p>{element.runtime} min</p>
                            <h3>Mais detalhes</h3>
                            <a href={"https://www.imdb.com/title/"+element.imdb_id}
                            >https://www.imdb.com/title/{element.imdb_id}</a>                            
                        </div>
                    </div>                    
                </div>
                <div> 
                    <span >
                        <h3>Trailer</h3>
                        <hr></hr>
                    </span>                        
                                        
                    <div class="container App" style={{marginBottom:"30px"}}>
                        <YouTube                            
                            videoId={element.videos.results[0].key}                        
                            onReady={this._onReady}
                        />
                    </div>                    
                </div>
            </div>
        );
    }
}