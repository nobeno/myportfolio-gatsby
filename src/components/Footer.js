import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://twitter.com/nb5151" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                        <li><a href="https://github.com/nobeno" className="icon fa-github"><span className="label">Github</span></a></li>
                        <li><a href="https://nobeno.dev" className="icon fa-globe"><span className="label">Dribbble</span></a></li>
                    </ul>
                    <ul className="copyright">
                        <li>&copy; Nobe</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
