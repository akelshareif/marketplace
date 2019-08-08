import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Responsive, Sidebar, Menu, Search, Segment, Container, Image } from 'semantic-ui-react';

class MobileHeader extends React.Component {

    state = {}

    handleSidebarHide = () => this.setState({ sidebarOpened: false })
    handleToggle = () => this.setState({ sidebarOpened: true })

    headerContent() {
        switch(this.props.auth){
            case null:
                return;
            case false:
                return <Link to='/login' className='item item-text'>Sign In</Link>;
            default:
                return <a className='item item-text' href='/api/logout'>Logout</a>;
        }
    }

    render(){
        const { children } = this.props;
        const { sidebarOpened } = this.state

        return(
            <Responsive
                as={Sidebar.Pushable}
                maxWidth={Responsive.onlyMobile.maxWidth}
            >
                <Sidebar
                    as={Menu}
                    borderless
                    secondary
                    animation='push'
                    onHide={this.handleSidebarHide}
                    vertical
                    visible={sidebarOpened}
                >
                    <Menu.Item>
                        <Search placeholder='Search' size='large' />
                    </Menu.Item>
                    <Menu.Item as={Link} to='/' className='item-text'>
                        Home
                    </Menu.Item>
                    {this.headerContent()}
                </Sidebar>
                <Sidebar.Pusher dimmed={sidebarOpened}>
                    <Segment
                        basic
                        vertical
                        textAlign='center'
                    >
                        <Container>
                            <Menu secondary size='large'>
                                <Menu.Item onClick={this.handleToggle}>
                                    <img src='http://www.pngmart.com/files/7/Market-Transparent-Images-PNG.png' alt='logo' />
                                </Menu.Item>
                            </Menu>
                        </Container>
                    </Segment>
                    {children}
                </Sidebar.Pusher>
            </Responsive>
        );
    }
}

const mapStateToProps = state => {
    return { auth: state.auth }
}

export default connect(mapStateToProps)(MobileHeader);