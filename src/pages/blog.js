
import React from 'react';
import {useEffect, useState} from "react";
import pages from "../markdown/pages.json"


export default function Blog() {
    const file_name = 'Test1.md';
    const [posts, setPosts] = useState([]);
    
    
    useEffect(() => {
        let post_list = [] 
        pages.posts.map ((post)=> {
            import(`../markdown/${post.path}`)
                .then(res => {
                    fetch(res.default)
                        .then(res => res.text())
                        .then(res => post_list.push(res));
                })
                .catch(err => console.log(err))
        })
        setPosts(post_list)
    }, [])
    console.log(posts)

    return(
        posts.map((post)=> <h1 key={post}> {post}</h1>)
    );
}
