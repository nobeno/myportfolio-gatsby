import React from 'react'
import Fade from 'react-reveal/Fade';
import '../assets/scss/question.scss'
import Parent from '../components/Toggle'

class Question extends React.Component {
    render() {
        return (
            <dl class="faq">
                <Fade bottom>
                    <dt>ビル管理からエンジニアに転職したのはなぜですか？</dt>
                    <dd>プログラミングに興味を持ったからです。<br />Progateでプログラミングを初めて触れて、楽しんで取り組めている自分がいたので、転職を決めました。2019年1月から学習を始めて、今でも続けれてるので好きなんでしょうね。</dd>
                    <dt>セブ島留学に行ったのはなぜですか？</dt>
                    <dd>「留学してみたかった」と「プログラミングの学習」という理由が重なった結果、行くことにしました。当然、英語を学びたいという気持ちもありました。夢は洋画を字幕なしの英語で観ることです。</dd>
                    <dt>好きな映画は何ですか？</dt>
                    <dd>マーベル作品が大好きです。1作品につき、2回以上は見ます。 </dd>
                    <dt>最近やってみたいことはありますか？</dt>
                    <dd>ヨガと神社巡りをしてみたいと思ってます。 </dd>
                    <dt>スキルについて詳しく教えて！</dt>
                    <dd>長くなるので、知りたい方は下記をクリックしてください。 </dd>
                    <Parent detail="詳細を見る"/>
                </Fade>
            </dl>
        )
    }
}

export default Question