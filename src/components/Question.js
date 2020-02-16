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
                    <dd>ITが好きなのと危機感です。<br />Progateでプログラミングを初めて触れて、楽しんでやっている自分がいたので、転職を決めました。加えてすべての業界で、ITが関わって変わっていくだろうと思い、学ばずにキャリアを重ねるのは、リスクがあると感じたからです。</dd>
                    <dt>セブ島留学に行ったのはなぜですか？</dt>
                    <dd>「留学してみたかった」と「プログラミングの学習」という理由が重なった結果、行くことにしました。（洋画を日本語字幕なしで見れるようになりたいので、英語も学習したいなと思ったのも理由の１つです。）</dd>
                    <dt>スキルについて詳しく教えて！</dt>
                    <dd>長くなるので、知りたい方は下記をクリックしてください。 </dd>
                    <Parent detail="詳細を見る"/>
                </Fade>
            </dl>
        )
    }
}

export default Question