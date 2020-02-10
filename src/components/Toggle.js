import React from 'react';

class Parent extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            active: false,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            active: !this.state.active
        });
    }

    render() {
        return (
            <div>
                <a onClick={this.handleClick}>
                    {this.props.detail}
                </a>

                {this.state.active && <Child />}

            </div>
        )
    }
}

class Child extends React.Component {
    render() {
        return (    
            <ul>
                <li>HTML5/CSS3：セブ島で2ヶ月学習。Bootstrap４を使ったサイト制作可能。</li>
                <li>JavaScript：セブ島で1ヶ月学習。基本公文を人撮り学び、jQuery とReactを少し使える程度。</li>
                <li>PHP：セブ島で2ヶ月学習。PHP7.3,Laravel5.7,XAMPを使用。お問い合わせフォーム、SNSを作成可能。</li>
                <li>Java：RaiseTechでAWSを受講すると無料で受講できたため、4ヶ月学習。Java8,11/SpringBoot2.2.4/Thymeleaf/MyBatis/Jenkins/JUnit/Seleniumを使用。開発だけでなく、REST API,テストコード、自動化を学べてレベルアップ。</li>
                <li>Ruby：AWSでデプロイの練習をするために、軽く触れた程度。Qiitaを見ながら写真投稿SNS作成。Ruby2.6.4 ,Rails5.2.3 ,nginx ,unicornを使用。</li>
                <li>MySQL：5系,8系を使用。基本的なデータベース操作可能。簡単なSNSレベルのテーブル設計。</li>
                <li>Docker：まだまだ学習中。DorkerでJavaとVScodeの開発環境、Tomcat環境を使う程度。</li>
                <li>AWS：RaiseTechで4ヶ月受講。資格取得に向けて学習中。EC2/VPC/RDS/S3/ELB/Lambdaなどなど。上記のJavaとRubyのデプロイ環境はAWSで作成。CloudFormation/Ansible/Jenkinsでインフラ環境の自動化とコード化が可能。</li>
                <li>ネットワーク：現在の仕事で、学習中。</li>
                <li>サーバー：AWSで、仮想サーバー構築。Linux使用。Appach/Tomcat,nginx/unicorn</li>
            </ul>            
        )             
    }
}

export default Parent