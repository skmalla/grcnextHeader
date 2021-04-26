import React from 'react';
import { Link } from 'react-router-dom';
import LogoImage from '../../../../images/GRCNextLogo.png'

const Logo = () => {

    return (
        <div>
            <Link tag={Link} to="/" title="Home">
                <img src={LogoImage} alt="GRCNext" style={{ width: "120px" }} />
            </Link>
        </div>
    );
}

export default Logo;