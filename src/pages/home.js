import React from 'react';

export default function Home({route}) {
    return(
        <div className="page">
            <div className="page-header">
                <h1>Test Hey there...</h1>
            </div>
            <div className="page-body">
                <p>
                    Thanks for finding my blog! I'll be using this page to document my journey in life and
                    engineering. 
                </p>
                <p>
                    My background is in math/statistics, mechanical engineering, and software engineering.
                </p>
                <p>
                    If you have questions about how you can get started in business analytics, data science, or software, 
                    don't hesitate to contact me on <a href="https://www.linkedin.com/in/hannahsky86/">LinkedIn</a>. 
                </p>
            </div>
        </div>
    )
}
