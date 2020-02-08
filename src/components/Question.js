import React from 'react'
import '../assets/scss/question.scss'

class Question extends React.Component {
    render() {
        return (
            <dl class="faq">
                <dt>質問です</dt>
                <dd>回答です。</dd>
                <dt>質問です</dt>
                <dd>回答です。</dd>
                <dt>質問です</dt>
                <dd>回答です。</dd>
            </dl>
        )
    }
}

export default Question