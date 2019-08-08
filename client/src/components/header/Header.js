import React from 'react';
import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';

const Header = ({ children }) => {
    return(
        <div>
            <DesktopHeader>{children}</DesktopHeader>
            <MobileHeader>{children}</MobileHeader>
        </div>
    );
}

export default Header;