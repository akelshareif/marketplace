import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Segment, Form, Button, Header, Divider, Icon } from 'semantic-ui-react';

class SignUp extends React.Component{

    render(){
        return(
            <Grid centered columns={16}>
            <Grid.Row centered columns={14}>
                <Grid.Column width={14}>
                    <Segment basic textAlign='center'>
                        <Header as='h2'>Create your account</Header>
                        <>Please enter your information</>
                    </Segment>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row centered columns={14}>
                <Grid.Column mobile={14} computer={7}>
                    <Segment padded>
                        <Form>
                            <Form.Input label='First Name' type='text' />
                            <Form.Input label='Last Name' type='text' />
                            <Form.Input label='Email Address' type='email' />
                            <Form.Input label='Password' type='password' />
                            <Form.Button as={Button} size='large' className='bottom-margin' content='Create Account' fluid/>
                        </Form>
                        <Divider horizontal>OR</Divider>
                        <Header as='h2'>
                            <Button as='a' href='/auth/facebook' color='facebook' size='large' className='bottom-margin' fluid>
                                <Icon name='facebook'/>
                                Continue with Facebook
                            </Button>
                            <Button as='a' href='/auth/google' color='google plus' size='large' fluid>
                                <Icon name='google plus' />
                                Continue with Google
                            </Button>
                        </Header>
                    </Segment>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        );
    }
}

export default SignUp;