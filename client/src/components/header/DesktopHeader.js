import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Responsive, Visibility, Menu, Search, Container } from 'semantic-ui-react';

class DesktopHeader extends React.Component{

    state = {}

    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })

    headerContent() {
        switch(this.props.auth){
            case null:
                return;
            case false:
                return <Menu.Item as={Link} to='/login' className='item-text'>Sign In</Menu.Item>
            default:
                return <Menu.Item as='a' href='/api/logout' className='item-text'>Logout</Menu.Item>
        }
    }

    render(){
        const { children } = this.props
        const { fixed } = this.state
        
        return(
            <Responsive minWidth={Responsive.onlyTablet.minWidth}>
                <Container>
                    <Visibility
                        once={false}
                        onBottomPassed={this.showFixedMenu}
                        onBottomPassedReverse={this.hideFixedMenu}
                    >   
                        <Menu
                            fixed={fixed ? 'top' : null}
                            secondary={!fixed}
                            size='large'
                        >
                            <Menu.Item as={Link} to='/'>
                                <img src='http://www.pngmart.com/files/7/Market-Transparent-Images-PNG.png' alt='logo' />
                            </Menu.Item>
                            <Menu.Item className='item-center'>
                                <Search size='big' placeholder='Search' />
                            </Menu.Item>
                            {this.headerContent()}
                        </Menu>
                    </Visibility>
                    {children}
                </Container>
            </Responsive>
        );
    }
}

const mapStateToProps = state => {
    return { auth: state.auth }
}

export default connect(mapStateToProps)(DesktopHeader);


