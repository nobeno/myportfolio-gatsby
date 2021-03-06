import React from 'react'
import Fade from 'react-reveal/Fade';
import '../assets/scss/work.scss'

class Work extends React.Component {
    render(){
        return(
                <div>
                    <div class="timeline-item" date-is='2017年4月~2019年4月'>
                        <h3>ビル管理</h3>
                        <p>
                            <Fade bottom>
                                静岡で総合ビルメンテナンス業に従事する。商業施設やオフィスビル、ホテル等の設備・清掃・警備を管理する。自ら点検・補修を行うこともあれば、工事の見積提案、受託等も行う。
                            </Fade>
                        </p>
                    </div>

                    <div class="timeline-item" date-is='2019年5月~2019年6月'>
                        <h3>セブ島留学</h3>
                        <p>
                            <Fade bottom>
                                フィリピンのセブ島でエンジニア留学を経験する。午前中に英語、午後にプログラミンを学ぶ。HTML、CSS、JavaScript、PHPの基礎を学び、Webサイト制作とWebサービス開発を学習する。
                            </Fade>
                        </p>
                    </div>

                    <div class="timeline-item" date-is='2019年7月~2019年9月'>
                        <h3>転職活動</h3>
                        <p>
                            <Fade bottom>
                                大阪で転職活動を行う。この時期にインフラ・クラウド技術に興味を持ち、9月から12月までRaiseTechでAWSとJavaの講座を受講する。
                            </Fade>
                        </p>
                    </div>

                    <div class="timeline-item" date-is='2019年9月~現在'>
                        <h3>コールセンターシステム運用保守(時々構築)</h3>
                        <p>
                            <Fade bottom>
                                主にAvayaというコールセンターシステムの運用保守を中心に行う。他にも、CTI連携用のサーバー(コンピュータと電話を繋ぐためのサーバー)、コールセンターとデータセンターを繋ぐネットワーク、コールセンターで使うWEBアプリケーションの運用保守など幅広経験している。
                            </Fade>
                        </p>
                    </div>
                    
                </div>
        )
    }
}

export default Work;