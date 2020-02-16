import React from 'react';
import Fade from 'react-reveal/Fade';


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
                <a class="details" onClick={this.handleClick}>
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
            <dl class="toggle-dl">
                <Fade bottom>
                    <dt>HTML5/CSS3</dt>
                    <dd>セブ島で2ヶ月学習。Bootstrap4を使ったサイト制作可能。</dd>
                    <dt>JavaScript</dt>
                    <dd>セブ島で1ヶ月学習。jQuery or Reactを使用したサイト制作。</dd>
                    <dt>PHP</dt>
                    <dd>セブ島で2ヶ月学習。PHP7.3,Laravel5.7,XAMPを使用。お問い合わせフォーム、SNSを作成可能なレベル。</dd>
                    <dt>Java</dt>
                    <dd>RaiseTechで4ヶ月学習(経緯はAWSを受講すると無料で受講できた為)。Java8/11, SpringBoot2.2.4, Thymeleaf, MyBatis, Jenkins, JUnit, Seleniumを使用。開発だけでなく、REST API,テストコード、自動化の基礎ができている状態。</dd>
                    <dt>Ruby</dt>
                    <dd>AWSでデプロイの練習をするために、軽く触れた程度。Qiitaを見ながら写真投稿SNS作成してEC2にデプロイ。Ruby2.6.4 ,Rails5.2.3を使用。</dd>
                    <dt>MySQL</dt>
                    <dd>5系,8系を使用。基本的なデータベース操作可能。簡単なSNSレベルのテーブル設計。</dd>
                    <dt>Network</dt>
                    <dd>現在の職場で、学習中。主に、Cisco製品のL3,L2,PoEやSNMPによる監視。</dd>
                    <dt>Server</dt>
                    <dd>現在の職場では、Tomcat,CTI連携用サーバ(コンピュータと電話の連携)の運用保守。AWSのEC2を使用したサーバ構築(nginx/Unicorn, Tomcat/Appach)</dd>
                    <dt>Dorcker</dt>
                    <dd>まだまだ学習中。DorkerでJavaとVScodeの開発環境、Tomcat環境を試しに使う程度。</dd>
                    <dt>AWS</dt>
                    <dd>RaiseTechで4ヶ月受講。現在は、Udemyで認定ソリューションアーキテクトを学習中。EC2/VPC/RDS/S3/ELB/Lambdaなどなど。上記のJavaとRubyのデプロイ環境はAWSで作成。CloudFormation/Ansible/Jenkinsでインフラ環境の自動化とコード化が可能。</dd>
                </Fade>
            </dl>
        )             
    }
}

export default Parent