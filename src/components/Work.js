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
                        <p>ビル管理をお茶の国、静岡で。</p>
                    </div>
                </li>
                <li>
                    <p class="timeline-date">2019年5月~2019年6月</p>
                    <div class="timeline-content">
                        <h3 class="timeline-h3">セブ島</h3>
                        <p>フィリピンのセブ島でエンジニア留学。HTML、CSS、JavaScript、PHPのコーディングやWebデザインの基礎を学ぶ。</p>
                    </div>
                </li>
                <li>
                    <p class="timeline-date">2019年7月~2019年8月</p>
                    <div class="timeline-content">
                        <h3 class="timeline-h3">転職活動</h3>
                        <p>大阪で転職活動。</p>
                    </div>
                </li>
                <li>
                    <p class="timeline-date">2019年9月<br />~現在</p>
                    <div class="timeline-content">
                        <h3 class="timeline-h3">SEへ</h3>
                        <p>コールセンターシステム運用保守(時々構築)</p>
                    </div>
                </li>
            </ul>
        )
    }
}

export default Work;