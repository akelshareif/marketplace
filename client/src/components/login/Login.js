import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Segment, Header, Form, Button, Divider, Icon } from 'semantic-ui-react';


const Login = () => {
    return(
        <Grid centered columns={16}>
            <Grid.Row centered columns={14}>
                <Grid.Column width={14}>
                    <Segment basic textAlign='center'>
                        <Header as='h2'>Welcome to MarketPlace</Header>
                        <>Sign in or <Link to='/login/create'>create an account</Link></>
                    </Segment>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row centered columns={14}>
                <Grid.Column mobile={14} computer={6}>
                    <Segment padded>
                        <Form>
                            <Form.Input label='Email Address' type='email' />
                            <Form.Input label='Password' type='password' />
                            <Form.Button as={Button} size='large' className='bottom-margin' content='Sign In' fluid/>
                            <small><Link to='/login/reset' className='password-reset-text-margins'>Reset your password</Link></small>
                        </Form>
                        <Divider horizontal>OR</Divider>
                        <Header as='h2'>
                            <Button as='a' href='/auth/facebook' color='facebook' size='large' className='bottom-margin' fluid>
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