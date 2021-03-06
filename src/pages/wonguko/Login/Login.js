import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';

//components
import {
  CheckEmail,
  CheckPassword,
} from '../../../components/Login/Validation';

//css
import './Login.scss';
export default class Login extends Component {
  btnRef = React.createRef();
  viewPwdRef = React.createRef();

  constructor() {
    super();
    this.state = {
      email: '',
      pwd: '',
      checkValidation: false,
      pwdView: false,
    };
  }

  handleInput = e => {
    const { name, value } = e.target;
    this.setState(
      {
        [name]: value,
      },
      () => this.handleValidation()
    );
  };

  handleValidation = () => {
    const isEmail = this.state.email;
    const isPwd = this.state.pwd;
    const checkVal = this.state.checkValidation;

    if (CheckEmail(isEmail) && CheckPassword(isPwd)) {
      this.setState({
        checkValidation: true,
      });
      this.btnRef.current.style.opacity = 1;
    } else {
      this.setState({
        checkValidation: false,
      });
      this.btnRef.current.style.opacity = 0.5;
    }
  };

  viewPwdBtn = () => {
    console.log(this.state.pwdView);
    if (this.state.pwdView) {
      this.setState({
        pwdView: false,
      });
    } else {
      this.setState({
        pwdView: true,
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="loginContainer">
          <section className="loginWrap">
            <header className="loginTitle">WeBucks</header>
            <form
              className="loginForm"
              action="#"
              acceptCharset="utf-8"
              name="login_form"
              method="post"
            >
              <fieldset className="inputWrap">
                <input
                  id="inputId"
                  name="email"
                  value={this.email}
                  type="input"
                  maxLength="30"
                  placeholder="????????????, ????????? ?????? ?????? ?????????"
                  onChange={this.handleInput}
                  onBlur={this.handleValidation}
                />
                <div className="pwFiled">
                  <input
                    id="inputPw"
                    name="pwd"
                    value={this.pwd}
                    type={this.state.pwdView ? 'input' : 'passWord'}
                    maxLength="16"
                    placeholder="????????????"
                    onChange={this.handleInput}
                    onBlur={this.handleValidation}
                  />
                  <FontAwesomeIcon
                    className={
                      this.state.pwdView
                        ? 'closePasswordBtn'
                        : 'viewPasswordBtn'
                    }
                    icon={faEye}
                    onClick={this.viewPwdBtn}
                  />
                </div>
                <Link to="/list-wongu">
                  <button
                    id="loginBtn"
                    type="button"
                    ref={this.btnRef}
                    disabled={this.state.checkValidation ? false : true}
                  >
                    ?????????
                  </button>
                </Link>
              </fieldset>
            </form>
            <div className="findPwdWrap">
              <p className="findPwd">??????????????? ????????????????</p>
            </div>
          </section>
        </div>
      </React.Fragment>
    );
  }
}
