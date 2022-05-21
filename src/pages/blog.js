import React from 'react';
import {useEffect, useState} from "react";
import pages from "../markdown/pages.json"
import BlogDetails from "./blog-details";

export default function Blog() {
    const [expandPage, setExpandPage] = useState(false);
    const scroller = document.querySelector("#blog_post")

    useEffect(()=> {
        scroller?.scrollIntoView({behavior:"smooth"})
    }, [expandPage])

    return (
        pages.posts.map(
            (post, index)=>
            <div id="blog_post" key={`post-${index}`} onClick={() => setExpandPage(!expandPage)}>
                <h1>{pages.posts[index].name}</h1>
                <BlogDetails md_file={pages.posts[index].path} expanded={expandPage}/> 
                <br/>
            </div>
        )
    )
}
