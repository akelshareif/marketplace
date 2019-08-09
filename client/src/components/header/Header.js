import React from 'react';
import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';

const Header = ({ children }) => {
    return(
        <>
            <DesktopHeader>{children}</DesktopHeader>
            <MobileHeader>{children}</MobileHeader>
        </>
    );
}

export default Header;