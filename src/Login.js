import React, { Component } from 'react'
import './Login.css'
import Input from './input/Input'
import '@coreui/coreui/dist/css/coreui.min.css'
import { CFormLabel } from '@coreui/react'
import { CFormInput } from '@coreui/react'
import { CButton } from '@coreui/react'
import { CCol } from '@coreui/react'
import { CForm } from '@coreui/react'



export default class Login extends Component {

    

  render() {
    return (
      <div className='Login'>
        <h1>Авторизация</h1>
        <CForm className='LoginForm'>
        
<CCol xs="auto">

  <CFormLabel htmlFor="userName" className="visually-hidden">

    Логин:

  </CFormLabel>

  <CFormInput type="text" id="userName" defaultValue="Логин:"  />

</CCol>

<CCol xs="auto">

  <CFormLabel htmlFor="inputPassword2" className="visually-hidden">

    Password

  </CFormLabel>

  <CFormInput type="password" id="inputPassword2" placeholder="Password" />

</CCol>

<CCol xs="auto">

  <CButton type="submit" className="mb-3">

    Войти

  </CButton>

</CCol>

</CForm>
            
      </div>
      
    )
  }
}
