
import React from 'react';
import {useEffect, useState} from "react";
import pages from "../markdown/pages.json"
import ReactMarkdown from 'react-markdown'

export default function Blog() {

    const [posts, setPosts] = useState([{}]);

    useEffect(() => {
      let  post_list = []
       pages.posts.map((post)=> {
            import(`../markdown/${post.path}`)
                .then(res => {
                    fetch(res.default)
                        .then(res => res.text())
                        .then(res => post_list.push({res}))
                })
                .then(() => setPosts(post_list))
                .catch(err => console.log(err))
        })

    }, [])
    
    
    console.log([posts])

return null;

    // return (
        
        // posts.map((post, index)=> <ReactMarkdown key={`post-${index}`}>{post}</ReactMarkdown>)
    // )
}
