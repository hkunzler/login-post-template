import React, { PureComponent } from 'react';

class Signup extends PureComponent {

  render() {
    return (
      <div className='content'>
        <h2>Register</h2>
        <form className='form'>
          <input
            type='text'
            placeholder='Username'
          />
          <input
            type='text'
            placeholder='Email'
          />
          <input
            type='password'
            placeholder='Password'
          />
          <input
            type='password2'
            placeholder='Retype Password'
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }

}

export default Signup;
