import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Responsive, Sidebar, Menu, Search, Segment, Container, Icon } from 'semantic-ui-react';

class MobileHeader extends React.Component {

    state = {}

    handleSidebarHide = () => this.setState({ sidebarOpened: false })
    handleToggle = () => this.setState({ sidebarOpened: true })

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
                        <img src='http://www.pngmart.com/files/7/Market-Transparent-Images-PNG.png' style={{width: '3em', height: '3em'}} alt='logo' />
                    </Menu.Item>
                    <Menu.Item>
                        <Search placeholder='Search' size='large' />
                    </Menu.Item>
                    <Menu.Item as={Link} to='/' className='item-text'>
                        Home
                    </Menu.Item>
                    {this.headerContent()}
                </Sidebar>
                <Sidebar.Pusher dimmed={sidebarOpened}>
                    <Container>
                    <Segment
                        basic
                        vertical
                        textAlign='center'
                    >
                        <Menu secondary size='large'>
                            <Menu.Item>
                                <Icon name='sidebar' size='large' onClick={this.handleToggle}/>
                            </Menu.Item>
                        </Menu>
                    </Segment>
                    {children}
                    </Container>
                </Sidebar.Pusher>
            </Responsive>
        );
    }
}

const mapStateToProps = state => {
    return { auth: state.auth }
}

export default connect(mapStateToProps)(MobileHeader);