import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import AuthorDetails from './AuthorDetails'

export default function ThreadCard(props){
	let urlImage="";
	let thread=props.thread;
	let author=thread.data.author;
	let link="/authors/"+author;
	if( thread.data.preview!== undefined){
		//console.log(thread.data.preview.images[0].source.url);
		urlImage=thread.data.preview.images[0].source.url;
		urlImage=urlImage.replace("amp;","");
		if(urlImage.includes("amp;")){
		   urlImage=urlImage.replace("amp;","");	
		}
		console.log(urlImage);
	}
	else{
		urlImage="https://icon-library.net/images/no-image-available-icon/no-image-available-icon-6.jpg"
	}
	console.log(thread.data);
	return(
		<div>
		<div>
        <a href={thread.data.url} target="_blank">{thread.data.title}</a>
        <p>{thread.data.ups.toLocaleString()}</p>
        <NavLink to={link}>
           <p>{thread.data.author}</p>
        </NavLink>
        <img src={urlImage} width="150"/>
        </div>
        </div>
		);
}
