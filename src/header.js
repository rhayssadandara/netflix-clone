import React, { Component } from 'react';
import styled from 'styled-components';

import logo from './film-logo.png';
import bell from './bell.png';
import search from './search.png';
import profile from './profile.jpg';


const Head= styled.div`
    width: 100%;
    height: 150px;
    display: flex; 
`;
const Logo= styled.img`
    width: 130px;
    height: auto;
    margin-top: 10px;
`;
const Links= styled.nav`
    width: 65%;
    color: #ffffff;
    font-size: 20px;
    font-weight: bolder;
    display: flex;
    align-items: center;
    justify-content: center;
    
    & nav{
        font-size: 20px;
        font-weight: bolder;
      }
      
    & a{
        margin-left: 18px;
        text-decoration: none;
      }
    & :visited {
        color:white;
    }
    & :hover {
      color: rgb(134, 34, 34);
     }
      
`;
const Navigation= styled.div`
    width: 25%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;
const Search= styled.img`
    width: 2vw;
    height: 4vh;
    margin: 0px 22px 0 10px;
`;
const Bell= styled.img`
    width: 2.7vw;
    height: 5.3vh;
    margin: 0 20px 0 10px;
`;
const Icon= styled.img`
    width: 5vw;
    height: 9.90vh;
    margin: 0px 40px 5px 15px;
`;
class Header extends Component{

    render() {
        return(
            <div>
                <Head>
                    <a href="blank"><Logo src={logo} alt="Home" />
                    </a>
                    <Links>
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
                    </Links>
                    <Navigation>
                        <a href="blank">
                        <Search src={search} alt="Search" />
                        </a>
                        <a href="blank">
                        <Bell src={bell} alt="Notification bell" />
                        </a>
                        <a href="blank">
                        <Icon src={profile} alt="Profile" />
                        </a>
                    </Navigation>
                </Head>
            </div>
        )
    }
}

export default Header;
