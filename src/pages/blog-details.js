import { useState, useEffect } from "react"
import Markdown from "markdown-to-jsx"

const BlogDetails = ({md_file, expanded}) => {
    const [postContent, setPostcontent] = useState('')
    
    useEffect(() => {
        import(`../markdown/${md_file.path}`)
            .then(res =>
                fetch(res.default)
                    .then(response => response.text())
                    .then(response =>
                    {
                        (expanded.state && expanded.key === md_file.key) ? 
                            setPostcontent(response) :  
                            setPostcontent(response.substring(0,100).concat("..."))
                    }    
                    )
                    .catch(err => console.log(err))
            )
    }, [expanded])

    return (
        <div className="article-wrapper">
            <Markdown>
                {postContent}
            </Markdown>
        </div>
    )
}

export default BlogDetails