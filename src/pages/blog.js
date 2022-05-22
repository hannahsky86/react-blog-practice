import React from 'react';
import {useEffect, useState} from "react";
import pages from "../markdown/pages.json"
import BlogDetails from "./blog-details";
import {Link} from "react-router-dom";

export default function Blog({route}) {
    const [expandPage, setExpandPage] = useState({key:null, state:false});
    const scroller = document.querySelector("#blog_post")

    useEffect(()=> {
        scroller?.scrollIntoView({behavior:"smooth"})
    }, [expandPage.state])

    return (
        pages.posts.map(
            (post, index)=>
            <div id="blog_post" key={`post-${index}`} 
                 onClick={() => setExpandPage({key:pages.posts[index].key, state:!expandPage.state})}>
                <h1 className="blog_title">{pages.posts[index].name}</h1>
                <Link to={pages.posts[index].key}>{pages.posts[index].name}</Link>
                <BlogDetails md_file={pages.posts[index]} expanded={expandPage}/> 
                <br/>
            </div>
        )
    )
}
