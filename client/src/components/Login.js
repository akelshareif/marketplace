import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Segment, Header, Form, Button, Divider, Icon } from 'semantic-ui-react';

//check out react proptypes - maybe u can dive deeper into react now?
//Finish off responsive nav with sidebar
//Clean up styles.css file with BEM 
//Hook up redux-form to submit and complete local auth
//Make sure that the db user schema was edited if necessary
//Build the account creation and password reset processes - multiple modals 
//Complete the header conditional auth rendering

const Login = () => {
    return(
        <Grid centered columns={16}>
            <Grid.Row centered columns={14}>
                <Grid.Column width={14}>
                    <Segment basic textAlign='center'>
                        <Header as='h2'>Welcome to MarketPlace</Header>
                        <span>Sign in or <Link to='/login/create'>create an account</Link></span>
                    </Segment>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row centered columns={14}>
                <Grid.Column mobile={14} computer={6}>
                    <Segment padded>
                        <Form>
                            <Form.Input label='Email Address' type='email' />
                            <Form.Input label='Password' type='password' />
                            <Form.Button as={Button} size='large' fluid content='Sign In' />
                            <small><Link to='/login/reset' className='left-margin'>Reset your password</Link></small>
                        </Form>
                        <Divider horizontal>OR</Divider>
                        <Header as='h2'>
                            <Button as='a' href='/auth/facebook' color='facebook' size='large' fluid>
                                <Icon name='facebook'/>
                                Sign in with Facebook
                            </Button>
                            <Button as='a' href='/auth/google' color='google plus' size='large' fluid>
                                <Icon name='google plus' />
                                Sign in with Google
                            </Button>
                        </Header>
                    </Segment>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
}

export default Login;