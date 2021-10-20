import React, { Component } from 'react';

class Create extends Component {

    //constructor to get going
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        //binding inputs to state
        this.onChangeMovieName = this.onChangeMovieName.bind(this);
        this.onChangeMovieYear = this.onChangeMovieYear.bind(this);
        this.onChangeMoviePoster = this.onChangeMoviePoster.bind(this);
        //set blank state fields
        this.state = {
            Title: '',
            Year: '',
            Poster: ''
        }
    }

    handleSubmit(event) {
        //alert  to display user input
        alert('Movie Title: '+ this.state.Title + 
        '\nMovie Year: ' + this.state.Year +
        '\nMovie Poster: ' + this.state.Poster);
        event.preventDefault();
        //reset the input fields are adding
        this.setState({
            Title: '',
            Year: '',
            Poster: ''
        })
    }

    //functions to set the values in each resepective field
    onChangeMovieName(event) {
        this.setState({
            Title: event.target.value
        })
    }
    onChangeMovieYear(event) {
        this.setState({
            Year: event.target.value
        })
    }
    onChangeMoviePoster(event) {
        this.setState({
            Poster: event.target.value
        })
    }

    //render where main activety happens
    render() {
        return (
            //add movie title field, simple input and sends information 
            <div>
                <h1>This is my Create Component!</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Add Movie Name: </label>
                        <input type="text"
                            className="form-control"
                            //takes in infor here
                            value={this.state.Title}
                            //sends here
                            onChange={this.onChangeMovieName}
                        />
                    </div>
                    {/* add movie year here  */}
                    <div className="form-group">
                        <label>Add Movie Year: </label>
                        <input type="number"
                            className="form-control"
                            //takes
                            value={this.state.Year}
                            //send
                            onChange={this.onChangeMovieYear}
                        />
                    </div>
                    {/* add movie poster url here  */}
                    <div className="form-group">
                        <label>Add Movie Poster: </label>
                        <input type="text"
                            className="form-control"
                            //takes
                            value={this.state.Poster}
                            //sends
                            onChange={this.onChangeMoviePoster}
                        />
                    </div>
                    <div>
                        {/* button to send info, once clicked, pops  handleSubmit function */}
                        <input type="submit" value="Add Movie" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        );
    }
}
export default Create;//export