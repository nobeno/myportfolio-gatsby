import React from 'react'
import Helmet from 'react-helmet'
import Fade from 'react-reveal/Fade';
import Work from '../components/Work'
import Skill from '../components/Skill'
import Profile from '../components/Profile'
import Question from '../components/Question'
import Layout from '../components/layout'
import Contact from '../components/Contact'

class HomeIndex extends React.Component {

    render() {
        const siteTitle = "Gatsby Starter - Strata"
        const siteDescription = "Site description"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2 class="heading2">
                                <Fade left cascade>Profile</Fade>
                            </h2>
                        </header>
                        
                        <Profile />
                        
                    </section>

                    <section id="two">
                        <header className="major">
                            <h2 class="heading2">
                                <Fade left cascade>Work</Fade>
                            </h2>
                        </header>

                        <Work />
                        
                    </section>

                    <section id="three">
                        <header className="major">
                            <h2 class="heading2">
                                <Fade left cascade>Skill</Fade>
                            </h2>
                        </header>

                        <Skill />

                    </section>

                    <section id="four">
                        <header className="major">
                            <h2 class="heading2">
                                <Fade left cascade>Question</Fade>
                            </h2>
                        </header>

                        <Question />
                    </section>

                    <section id="five">
                        <header className="major">
                            <h2 class="heading2">
                                <Fade left cascade>Contact</Fade>
                            </h2>
                        </header>
                        
                        <Contact />
                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex