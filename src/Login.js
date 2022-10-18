import React, { Component } from 'react'
import './Login.css'



export default class Login extends Component {

    login = () => {
    
    }

  render() {
    return (
      <div className='Login'>
        <div>
            <h1>Авторизация</h1>
            <form className='LoginForm'>
                <label for="userName">Логин:</label>
                <input type="text" id="userName"></input>
                <label for="userPassword">Пароль:</label>
                <input type="password" id="userPassword"></input>

                <button 
                type="success" 
                onClick={this.login} 
                >Войти</button>

            </form>
        </div>
      </div>
    )
  }
}
