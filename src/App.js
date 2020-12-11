// Libs
import React, { Component } from 'react';
import axios from 'axios'
import './index.css'
import logo from './film-logo.png'
import bell from './bell.png'
import search from './search.png'
import profile from './profile.jpg'

class Clone extends Component {
  state = {
    movies: [],
    shows:[],
    poster: [],
  }

  async componentDidMount() {

    //rendering movie data
    
    const responseMovies =await axios.get(`${process.env.REACT_APP_API}/movies`);
    
    console.log(responseMovies);

    this.setState({
      movies: responseMovies.data,
    });

    const filmes = responseMovies.data.map((item) => {
      return {
        ...item,
        poster_path: `https://image.tmdb.org/t/p/w500${item.poster_path}`
      };
    });

    this.setState({
      poster: responseMovies.data.poster_path
    });

    //rendering shows data
    const responseShows = await axios.get(`${process.env.REACT_APP_API}/shows`);
        
    console.log(responseShows);

    this.setState({
      shows: responseShows.data,
    });

    const series = responseShows.data.map((item) => {
      return {
        ...item,
        poster_path: `https://image.tmdb.org/t/p/w500${item.poster_path}`
      };
    });


  }


  render() {
    return (
      <div>
        <header className="header">
          <a href="blank"><img className="logo" src={logo} alt="Home" />
          </a>
          <nav className="links">
            <a href="blank">
              Home
            </a>
            <a href="blank">
              Shows
            </a>
            <a href="blank">
              Movies
            </a>
            <a href="blank">
              Recently Added
            </a>
            <a href="blank">
              My List
            </a>
          </nav>
          <div className="navigation">
            <a href="blank">
              <img className="search" src={search} alt="Search" />
            </a>
            <a href="blank">
              <img className="bell" src={bell} alt="Notification bell" />
            </a>
            <a href="blank">
              <img className="icon" src={profile} alt="Profile" />
            </a>
          </div>
        </header>
        <div className="map-box">
          {this.state.movies.map((item, index) => (
            <div className="map-items">
              <div className="img-div">
                <img className="poster" key={index} src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="poster"/>
              </div>
              <div className="text-div">
                <h1>{item.title}</h1>
                <p>({item.release_date})</p>
                <p>{item.overview}</p>
                <a className="download" href="blank">Download here</a>
                <a className="download" href="blank">Watch Online</a>
                <a className="download" href="blank">+ Add to my list</a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="map-box">
          {this.state.shows.map((item, index) => (
            <div className="map-items">
              <div className="img-div">
                <img className="poster" key={index} src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="poster"/>
              </div>
              <div className="text-div">
                <h1>{item.name}</h1>
                <p>First air date: {item.first_air_date}</p>
                <p>{item.overview}</p> 
                <a className="download" href="blank">Download here</a>
                <a className="download" href="blank">Watch Online</a>
                <a className="download" href="blank">+ Add to my list</a>
              </div>
            </div>
          ))}
        </div>

      </div>
    );
  }
}

export default Clone;
