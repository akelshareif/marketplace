import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Responsive, Visibility, Segment, Menu, Button, Search, Input } from 'semantic-ui-react';

class Header extends React.Component{

    state = {}

    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })

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
        const { fixed } = this.state

        return(
            <Responsive minWidth={Responsive.onlyTablet.minWidth}>
                <Visibility
                    once={false}
                    onBottomPassed={this.showFixedMenu}
                    onBottomPassedReverse={this.hideFixedMenu}
                >   
                    <Segment
                        textAlign='center'
                        vertical
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
                                <Search size='large' placeholder='Search' />
                            </Menu.Item>
                            {this.headerContent()}
                        </Menu>
                    </Segment>
                </Visibility>
            </Responsive>




            // <div className='bottom-margin'>
            //     <div className='ui secondary pointing stackable menu'>
            //         <Link to='/' exact className='item'>
            //             <img src='http://www.pngmart.com/files/7/Market-Transparent-Images-PNG.png' alt='logo' />
            //         </Link>
            //         <div className='item item-center'>
            //             <div className='ui large icon search input'>
            //                 <input className='prompt' type='text' placeholder='Search' />
            //                 <i className='search icon' />
            //             </div>
            //         </div>
            //         {this.headerContent()}
            //     </div>
            // </div>
        );
    }
}

const mapStateToProps = state => {
    return { auth: state.auth}
}

export default connect(mapStateToProps)(Header);


