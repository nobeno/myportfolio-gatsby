import React from 'react'
import Fade from 'react-reveal/Fade';

class Profile extends React.Component {
    render(){
        return(
            <div>
                <p>
                    <Fade bottom>
                        宮崎生まれの大阪育ちのIT見習いです。30代に見られがちな25歳。滋賀の大学を経て、お茶の国、静岡県でビル管理の後、セブ島留学を経験して、現在は、大阪に戻り、コールセンターシステムのSEをしています。
                    </Fade>
                </p>
            </div>
            
        )
    }
}

export default Profile;