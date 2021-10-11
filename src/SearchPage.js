import React from 'react'
import { Link } from 'react-router-dom';
import './SearchPage.css'
import { useStateValue } from './StateProvider'
import Search from "./Search";
import SearchIcon from "@material-ui/icons/Search"
import  DescriptionIcon  from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'
import RoomIcon from '@material-ui/icons/Room'
import MoreVertIcon from '@material-ui/icons/MoreVert'

function SearchPage() {
    const [{term }, dispatch] = useStateValue();
    const data = Response;
    return (
        <div className="searchPage">
            <div className="searchPage__header">
               <Link to="/">
               <img
                className="searchPage__logo" 
               src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" 
               alt=""/>
               </Link>
               <div className="searchPage__headerBody">
                    <Search hideButtons/>
                    <div className="searchPage__options">
                     <div className="searchPage__optionsLeft">
                      <div className="searchPage__option">
                        <SearchIcon />
                        <Link to="/all">All</Link>
                    </div>
                     <div className="searchPage__option">
                        <DescriptionIcon />
                        <Link to="/news">News</Link>
                    </div>
                     <div className="searchPage__option">
                        <ImageIcon />
                        <Link to="/images">Images</Link>
                    </div>
                     <div className="searchPage__option">
                        <LocalOfferIcon />
                        <Link to="/shopping">Shopping</Link>
                    </div>
                    <div className="searchPage__option">
                        <RoomIcon />
                        <Link to="/room">Room</Link>
                    </div>
                    <div className="searchPage__option">
                        <MoreVertIcon />
                        <Link to="/more">More</Link>
                    </div>
                     </div>
                        <div className="searchPage__optionsRight">
                            <div className="searchPage__option">
                                <Link to="/settings">Settings</Link>
                            </div>
                            <div className="searchPage__option">
                                <Link to="/tools">Tool</Link>
                            </div>
                        </div>
                    </div>
               </div>
            </div>
            {true && (
                <div className="searchPage__results">
                    <p className="searchPage__resultCount">
                        About 260,000,000
                        results 
                        (0.3 seconds) 
                        for {term}
                    </p>
            </div>
            )}
             
        </div>
    )
}

export default SearchPage
