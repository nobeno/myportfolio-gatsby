import React from 'react'
import '../assets/scss/skill.scss'

class Skill extends React.Component {
    render(){
        return(
            <div>
                <header class="heading">
                    <h3>できること(習熟度は別として、タグクラウド風に)</h3>
                </header>

                <ul class="RecomendPoint">
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
                </ul>
            </div>
        )
    }
}

export default Skill;