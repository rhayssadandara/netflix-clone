import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const MapBox= styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const MapItems= styled.div`
    width: 70%;
    margin: 1rem;
    border: solid 5px white;
    display: flex;
    align-items: center;
    justify-content: center;
    
    &:hover, :active{
        background-color: rgba(100, 28, 28, 0.253);
      }
`;
const ImgDiv= styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Poster= styled.img`
    width: 250px;
    height: auto;
`;
const TextDiv= styled.div`
    width: 50%;
    margin: 50px 30px ;
    text-align: center;
`;
const Download= styled.a`
    margin-top: 20px;
    padding: 0px;
    display: flex;
    justify-content: center;

    &:link, :visited {
        color: white;
        border: 2px solid white;
        padding: 10px 20px;
        text-align: center;
        text-decoration: none;
      }
    &:hover, :active {
        background-color: rgba(247, 169, 26, 0.534);
        color: black;
        border: 2px solid black;
      }
`;

class Shows extends Component {
    state = {
      shows:[],
      poster: [],
    }
  
    async componentDidMount() {
  
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

      this.setState({
        poster: responseShows.data.poster_path
      });
    }
  
    //main render
    render() {
      return (
        <div>
          <MapBox>
            {this.state.shows.map((item, index) => (
              <MapItems>
                <ImgDiv>
                  <Poster key={index} src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="poster"/>
                </ImgDiv>
                <TextDiv>
                    <h1>{item.name}</h1>
                    <p>First air date: {item.first_air_date}</p>
                    <p>{item.overview}</p> 
                  <Download href="blank">Download here</Download>
                  <Download href="blank">Watch Online</Download>
                  <Download href="blank">+ Add to my list</Download>
                </TextDiv>
              </MapItems>
            ))}
          </MapBox>
        </div>
      );
    }
  }
  
  export default Shows;