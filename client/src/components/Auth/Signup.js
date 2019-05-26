import React, { PureComponent } from 'react';
import {SIGNUP_USER} from '../../queries'
import {Mutation} from 'react-apollo'
class Signup extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      email: '',
      password: '',
      password2: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.validateForm = this.validateForm.bind(this)
  }

  handleChange (e){
    this.setState({[e.target.name]: e.target.value})
  }
  validateForm(){
    const {username, email, password, password2} =this.state
    return !username || !email || !password || !password2 || password2 !== password2
  }

  render() {
    const {username, email, password, password2} = this.state
    return (
      <div className='content'>
        <h2>Register</h2>
        <Mutation mutation={SIGNUP_USER} >
          {(signupUser, {data, loading, error})=>(
            <form className='form'
              onSubmit={async (e) => {
              try {
                e.preventDefault()
                const {data} = await signupUser({variables: {email, username, password}})
              // console.log(data);
                localStorage.setItem('token', data.signupUser.token)
                this.setState({email: '', password: '', password2:'', username:''})
              } catch (err) {
                console.log(err);
              }
              // this.setState({email:'', password:'', username:''})
            }}>
              <input
                type='text'
                placeholder='Username'
                name='username'
                onChange={this.handleChange}
                value={username}
              />
              <input
                type='text'
                placeholder='Email'
                name='email'
                onChange={this.handleChange}
                value={email}
              />
              <input
                type='password'
                placeholder='Password'
                name='password'
                onChange={this.handleChange}
                value={password}
              />
              <input
                type='password'
                name='password2'
                placeholder='Retype Password'
                onChange={this.handleChange}
                value={password2}
              />
              <button type='submit' disabled={loading || this.validateForm()}>Submit</button>
            </form>
        )}
      </Mutation>
      </div>
    );
  }

}

export default Signup;
