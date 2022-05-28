import React from 'react';
import {SocialLinks} from "../general/social-links"

export default function ContactMe() {
    return(
        <div className="page center">
            <div className="page-header">
                <h1>Contact Me</h1>
            </div>
            <div className="page-body">
                <p>
                    <strong>Email: </strong> hannahsky86@gmail.com
                </p>
                <SocialLinks />
            </div>
        </div>
    )   
}
