import React, { Component } from 'react';
import Movies from './movies';
import axios from 'axios';


class Read extends Component
{
    //start of page code, 
    componentDidMount(){
        //gets information from json api, reads and store it
        axios.get('https://jsonblob.com/api/jsonblob/894944504570986496')
        .then((response)=>{
            this.setState({
                mymovies:response.data.movies
            })
        })
        //error catch, send console log
        .catch((error)=>{
            console.log(error);
        })
    }

    state = {
        //array
        mymovies: []            
    };

    render(){
        return(
            <div>
                <h1>This is my Read component!</h1>
                {/* display movies from array  */}
                <Movies films={this.state.mymovies}></Movies>
            </div>
        );
    }
}
export default Read;//export