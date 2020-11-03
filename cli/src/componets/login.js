import React, { Component } from 'react';
import FormLogin from './../forms/Login/LoginForms'
import { connect } from 'react-redux';
import Axios from 'axios';
import { Redirect } from "react-router-dom";
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            erro:false,
            redirect:null
        }
    }

    submit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await Axios.post('http://127.0.0.1:8000/api/login', { 'email': this.state.email, 'password': this.state.password });
            localStorage.setItem('token',data.token);
            this.setState({ redirect: "/dashbord" });
        } catch (err) {
            this.setState({
                erro:true
            });
        }
    }
    inputchange = (target) => {
        this.setState(target);
    }

    render() {
        const { erro } = this.state;
        console.log(erro);
        let msg;
        if (erro) {
            msg = <div class="alert alert-danger" role="alert">
                Email ou senha Incorreto
              </div>;
        }

        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
          }
        
        return (
            <div>
                <div class="card" style={{ width: '18rem' }}>

                    {msg}


                    <div class="card-body">
                        <h5 class="card-title">Login</h5>
                        <FormLogin onChange={this.inputchange} onSubmit={this.submit}></FormLogin>
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);