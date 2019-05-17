import React, { Component} from 'react'
import '../App.css'
import { Link, Route } from 'react-router-dom';

export default class MoviesGrid extends Component {

    renderBody = () => { 
        console.log(this.props.data);       
        if(!this.props.data) {
            return (
                <div style={{color:"white", marginBottom:"50px"}}>       vazio
                </div> 
            )    
        }else 
        { 
            console.log(this.props.data);
            return (
                <div class="row text-center GridMovies" >
                    {this.props.data.map((iten)=>{
                        return <div class="col-md-4 col-sm-6">
                                    <Link    
                                        to={{
                                            pathname:"/moviePage",
                                            state: {
                                                movie: iten,
                                            }
                                        }}                                        
                                        class="thumbnail" 
                                        style={{border:"4px solid #4000ff", borderRadius:"0", padding:"0"}}
                                        >
                                        <img src={"https://image.tmdb.org/t/p/w500/"+iten.poster_path}/>    
                                        <div class="caption">
                                            <h4>{iten.title}</h4>  
                                            <div class="col-md-12" style={{color:"white", marginBottom:"20px", marginTop:"20px"}}>
                                            <div class="col-md-6" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                                                <span class="glyphicon glyphicon-heart" aria-hidden="true" style={{fontSize:"1.9em"}}></span>
                                            </div>
                                            <div class="col-md-6" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                                                <span class="glyphicon glyphicon-eye-open" aria-hidden="true" style={{fontSize:"1.9em"}}></span>
                                            </div>                                
                                        </div>                  
                                        </div>                                    
                                    </Link>
                                    
                                </div>    
                    })}                
                </div>
            )
        }        
    }

    render() {                
            return (   
                <div>
                    {this.renderBody()}                        
                </div>                
                // <div class="row text-center GridMovies" >
                // {console.log("chegou")}
                // {console.log(this.props.data)}                       
                //     {this.props.data.map((iten)=>{
                //         return <div class="col-md-4 col-sm-6">
                //                     <Link    
                //                         to={{
                //                             pathname:"/moviePage",
                //                             state: {
                //                                 movie: iten,
                //                             }
                //                         }}                                        
                //                         class="thumbnail" 
                //                         style={{border:"4px solid #4000ff", borderRadius:"0", padding:"0"}}
                //                         >
                //                         <img src={"https://image.tmdb.org/t/p/w500/"+iten.poster_path}/>    
                //                         <div class="caption">
                //                             <h4>{iten.title}</h4>  
                //                             <div class="col-md-12" style={{color:"white", marginBottom:"20px", marginTop:"20px"}}>
                //                             <div class="col-md-6" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                //                                 <span class="glyphicon glyphicon-heart" aria-hidden="true" style={{fontSize:"1.9em"}}></span>
                //                             </div>
                //                             <div class="col-md-6" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                //                                 <span class="glyphicon glyphicon-eye-open" aria-hidden="true" style={{fontSize:"1.9em"}}></span>
                //                             </div>                                
                //                         </div>                  
                //                         </div>                                    
                //                     </Link>
                                    
                //                 </div>    
                //     })}                
                // </div>
            );                
    }
}