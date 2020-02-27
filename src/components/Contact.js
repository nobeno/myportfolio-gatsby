import React from 'react'
import Fade from 'react-reveal/Fade';

class Contact extends React.Component {
    render(){
        return(
            <Fade bottom>
                <div id="contact-center">
                    <p>ご連絡はTwitterのDMからお願いします。</p>
                    <a href="https://twitter.com/nb5151" class="button">Let's talk!</a>
                </div>
            </Fade>
        )
    }
}

export default Contact;