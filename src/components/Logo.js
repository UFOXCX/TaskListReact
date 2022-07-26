import React from 'react';
import freecodecampLogo from '../images/freecodecamp-logo.png';

const Logo = () => {

    return (

        <div className='freecodecamp-logo-container'> 
                <img className='freecodecamp-logo'
                    src={freecodecampLogo} 
                    alt='Logo de freecodecamp' 
                />
        </div>
    );
}


export default Logo;