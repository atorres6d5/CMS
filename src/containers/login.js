import React, { Component } from 'react';
import { Grid, Form, Segment, Header, Button } from 'semantic-ui-react'
import axios from 'axios'
const URL = process.env.REACT_APP_API_URL

class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      email:'',
      password:''
    }
  }

  attemptLogin = async () =>{
    await axios.post(`${URL}/api/users/login`, {
      pass:this.state.password,
      email:this.state.email
    }).then(result=>{
      console.log(result);
      localStorage.setItem("Token", result.data.token)
      this.props.history.push('/dashboard')
    })
    .catch((err)=>{
      console.log("something went wrong with the login",err)
    })
  }

  handleEmail = (e) => {
    this.setState({
      email:e.target.value
    })
  }

  handlePassword = (e) =>{
    this.setState({
      password:e.target.value
    })
  }

  render() {
    return (
      <Grid
     textAlign='center'
     style={{ height: '100%' }}
     verticalAlign='middle'
     >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          {' '} Log-in to your account
        </Header>
        <Form
          size='large'
          onSubmit={this.attemptLogin}
          >
          <Segment stacked>
            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              placeholder='E-mail address'
              onChange={this.handleEmail}
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
              onChange={this.handlePassword}
            />
            <Button color='teal' fluid size='large'>Login</Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
    );
  }

}

export default Login;
