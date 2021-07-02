import React, { Component } from 'react'
import { getMovies } from './getMovie'
import axios from 'axios';
// import axios from 'axios';

export default class Movies extends Component {

    constructor(){
        super();
        this.state={
            // movies:getMovies()
            movies: [],
            currSearchText:'',
            currPage :1,
            limit : 4
        }
    }
    async componentDidMount() {
        console.log('Component DID Mount');
        let res = await axios.get('https://backend-react-movie.herokuapp.com/movies');
        // let genreRes = await axios.get('https://backend-react-movie.herokuapp.com/genres');
        // console.log(res.data.movies);
        console.log(res.data.movies);
        this.setState({
            movies: res.data.movies,
            // genres: [...this.state.genres, ...genreRes.data.genres]
        })
    }

    handleChange=(e)=>{
        let val = e.target.value;
        console.log(val);
        this.setState({
            currSearchText:val
        })
    }


    onDelete = (id) => {
        let arr = this.state.movies.filter(function (movieObj) {
            return movieObj._id !== id;
        })
        // console.log(arr);
        this.setState({
            movies: arr
        });
    }

    sortByRating =(e) =>{
        let className = e.target.className;
        console.log(className);

        let sortedMoviews = [];
        if(className === 'fa fa-sort-asc'){
            sortedMoviews = this.state.movies.sort(function(movieObjA, movieObjB){
                return movieObjA.dailyRentalRate - movieObjB.dailyRentalRate;
            })
        }else{
            sortedMoviews = this.state.movies.sort(function(movieObjA, movieObjB){
                return movieObjB.dailyRentalRate - movieObjA.dailyRentalRate;
            })
        }
        this.setState({
            movies:sortedMoviews
        })
    }
    sortByStock =(e) =>{
        let className = e.target.className;
        console.log(className);

        let sortedMoviews = [];
        if(className === 'fa fa-sort-asc'){
            sortedMoviews = this.state.movies.sort(function(movieObjA, movieObjB){
                return movieObjA.numberInStock - movieObjB.numberInStock;
            })
        }else{
            sortedMoviews = this.state.movies.sort(function(movieObjA, movieObjB){
                return movieObjB.numberInStock - movieObjA.numberInStock;
            })
        }
        this.setState({
            movies:sortedMoviews
        })
    }

    handlePageChange = (pageNumber) => {
        this.setState({ currPage: pageNumber });
    }
    handleGenreChange = (genre) => {
        this.setState({
            cGenre: genre
        })
    }
    render() {

        console.log('render');
        let {movies,currSearchText,limit,currPage} =this.state; //ES6 destructuring
        let filteredArr = [];
        if(currSearchText==='')
        {
            filteredArr = movies;
        }
        else
        {
            filteredArr = movies.filter(function(movieObj) {
                let title = movieObj.title.toLowerCase();
                console.log(title);
                return title.includes(currSearchText.toLowerCase());
            })
        }
        let numberofPage = Math.ceil(filteredArr.length / limit);
        let pageNumberArr = [];
        for (let i = 0; i < numberofPage; i++) {
            pageNumberArr.push(i + 1);
        }

        let si = (currPage-1)*limit;
        let ei = (si+limit);

        filteredArr = filteredArr.slice(si,ei);
        return (
            

<div className='container'>

<div className='row'>
     <div className='col-3'>
              {/* hello */}
           </div>

     <div className='col-9'>
     <input type='search' value={this.state.currSearchText} onChange={this.handleChange} ></input>
                          

            <table className="table">
            <thead>
                <tr>
                <th scope="col">S.no</th>
                <th scope="col">Title</th>
                <th scope="col">Genre</th>
                <th scope="col">
                <i onClick={this.sortByStock} class="fa fa-sort-asc" aria-hidden="true"></i>
                    Stock
                    <i onClick={this.sortByStock} class="fa fa-sort-desc" aria-hidden="true"></i>
                    </th>

                <th scope="col">
                <i onClick={this.sortByRating} class="fa fa-sort-asc" aria-hidden="true"></i>
                    Rate
                    <i onClick={this.sortByRating} class="fa fa-sort-desc" aria-hidden="true"></i>
                    </th>
                <th></th>
                </tr>
            </thead>
            <tbody>
             {
        // this.state.movies.map((movieObj) =>{
            filteredArr.map((movieObj) =>{
                return(
                    <tr  key={movieObj._id}>
                        <td></td>
                        <td>{movieObj.title}</td>
                        <td>{movieObj.genre.name}</td>
                        <td>{movieObj.numberInStock}</td>
                        <td>{movieObj.dailyRentalRate}</td>
                        <td><button onClick={() => { this.onDelete(movieObj._id)}} type="button" className="btn btn-danger">Delete</button></td>
                        </tr>
                )
              })
                }
                </tbody>
                     </table>
                               <nav aria-label="...">
                                    <ul className="pagination">
                                        {
                                            pageNumberArr.map((pageNumber) => {
                                                let classStyle = pageNumber === currPage ? 'page-item active' : 'page-item';
                                                return (
                                                    <li key={pageNumber} onClick={() => this.handlePageChange(pageNumber)}
                                                        className={classStyle}><span className="page-link">{pageNumber}</span></li>
                                                )
                                            })
                                        }
                                    </ul>
                                </nav>
                          </div>
                    </div>
                </div>

        )
    }
}
