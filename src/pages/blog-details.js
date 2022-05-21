import { useState, useEffect } from "react"
import Markdown from "markdown-to-jsx"
import pages from "../markdown/pages.json";

// import cover from '../assets/img/cover.jpeg'
// import '../styles/Post.css'

const BlogDetails = ({md_file, expanded}) => {
    const [postContent, setPostcontent] = useState('')
    
    useEffect(() => {
        import(`../markdown/${md_file}`)
            .then(res =>
                fetch(res.default)
                    .then(response => response.text())
                    .then(response =>
                    {
                        (expanded) ? 
                            setPostcontent(response) :  
                            setPostcontent(response.substring(0,100).concat("..."))
                    }    
                    )
                    .catch(err => console.log(err))
            )
    }, [expanded])

    return (
        <div className="article-wrapper">
            {/*<article>*/}
            {/*    <main>*/}
                    <Markdown>
                        {postContent}
                    </Markdown>
                {/*</main>*/}
            {/*</article>*/}
        </div>
    )
}

export default BlogDetails