
import React from 'react';
import {useEffect, useState} from "react";
import pages from "../markdown/pages.json"
import ReactMarkdown from 'react-markdown'

export default function Blog() {
    // const [posts, setPosts] = useState([]);
    const post_list = []

    const [posts, setPosts] = useState([]);



    useEffect(() => {
       pages.posts.map((post)=> {
            import(`../markdown/${post.path}`)
                .then(res => {
                    fetch(res.default)
                        .then(res => res.text())
                        .then(res => setPosts([res]))
                })
                .catch(err => console.log(err))
        })

    }, [])
    



    return (
        
        posts.map((post, index)=> <ReactMarkdown key={`post-${index}`}>{post}</ReactMarkdown>)
    )
}
