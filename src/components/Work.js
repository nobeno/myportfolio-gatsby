import React from 'react'
import '../assets/scss/work.scss'

class Work extends React.Component {
    render(){
        return(
            <ul class="timeline">
                <li>
                    <p class="timeline-date">2017年4月~2019年4月</p>
                    <div class="timeline-content">
                        <h3 class="timeline-h3">ビル管理</h3>
                        <p>静岡で総合ビルメンテナンス業に従事する。商業施設やオフィスビル、ホテル等の設備・清掃・警備を管理する。自ら点検・補修を行うこともあれば、工事の受託提案も行う。</p>
                    </div>
                </li>
                <li>
                    <p class="timeline-date">2019年5月~2019年6月</p>
                    <div class="timeline-content">
                        <h3 class="timeline-h3">セブ島</h3>
                        <p>フィリピンのセブ島でエンジニア留学を経験する。午前中に英語、午後にプログラミンを学ぶ。HTML、CSS、JavaScript、PHPの基礎を学び、Webサイト制作とWebサービスの開発を学習する。</p>
                    </div>
                </li>
                <li>
                    <p class="timeline-date">2019年7月~2019年8月</p>
                    <div class="timeline-content">
                        <h3 class="timeline-h3">転職活動</h3>
                        <p>セブ留学後、大阪で転職活動を行う。この時期にインフラ・クラウド技術に興味を持ち、9月からRaiseTechでAWSの学習を行う。</p>
                    </div>
                </li>
                <li>
                    <p class="timeline-date">2019年9月<br />~現在</p>
                    <div class="timeline-content">
                        <h3 class="timeline-h3">コールセンターシステム運用保守(時々構築)</h3>
                        <p>主にAvayaというコールセンターシステムの運用保守を中心に行う。他にも、CTI連携用のサーバー(コンピュータと電話を繋ぐためのサーバー)、コールセンターとデータセンターを繋ぐネットワーク、コールセンターで使うWEBアプリケーションの運用保守など幅広経験している。</p>
                    </div>
                </li>
            </ul>
        )
    }
}

export default Work;