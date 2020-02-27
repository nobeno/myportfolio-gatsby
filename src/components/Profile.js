import React from 'react'
import Fade from 'react-reveal/Fade';

class Profile extends React.Component {
    render(){
        return(
            <div>
                <p>
                    <Fade bottom>
                        宮崎生まれ大阪育ちのIT見習いです。30代に見られがちな25歳。滋賀の大学を経て、静岡県でビル管理員として勤めた後、セブ島でエンジニア留学を経験する。現在は、大阪に戻り、コールセンターシステムのSEをしています。
                    </Fade>
                </p>
            </div>
            
        )
    }
}

export default Profile;