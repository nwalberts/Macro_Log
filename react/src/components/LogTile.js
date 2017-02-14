import React from 'react';
import Review from './Review';
import { Link } from 'react-router';


const LogTile = ({ id, title, body}) => {
    return(
      <div className="log">
        <h1><Link to={`/logs/${id}`}> {title} </Link></h1>
        <h3>Body: {body} </h3>
      </div>
    )
  }

export default LogTile;
