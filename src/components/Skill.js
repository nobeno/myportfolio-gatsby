import React from 'react'
import Fade from 'react-reveal/Fade';
import '../assets/scss/skill.scss'

class Skill extends React.Component {
    render(){
        return(
            <div>
                {/* <header class="heading">
                    <h3>できること(詳細はQuestionへ。)</h3>
                </header> */}
                
                <ul class="RecomendPoint">
                    <Fade bottom>
                        <li class="RecomendPoint__S">HTML/CSS</li>
                        <li class="RecomendPoint__S">JavaScript</li>
                        <li class="RecomendPoint__S">PHP</li>
                        <li class="RecomendPoint__S">Ruby</li>
                        <li class="RecomendPoint__S">Java</li>
                        <li class="RecomendPoint__S">MySQL</li>
                        <li class="RecomendPoint__S">Docker</li>
                        <li class="RecomendPoint__S">AWS</li>
                        <li class="RecomendPoint__L">ネットワーク</li>
                        <li class="RecomendPoint__L">サーバー</li>
                        <li class="RecomendPoint__L">Avaya(コールセンターシステム)</li>
                        <li class="RecomendPoint__L">基本情報技術者</li>
                        <li class="RecomendPoint__L">電気工事士</li>
                        <li class="RecomendPoint__L">英語</li>
                    </Fade>
                </ul>
            </div>
        )
    }
}

export default Skill;