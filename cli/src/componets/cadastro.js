import React, { Component } from 'react';
import UserForms from '../forms/Cadastro/UserForms';
import { userSaveThunck } from './../actions/UserAction';
import { connect } from 'react-redux';

class Cadastro extends Component {
    constructor(props) {
        super(props)
        this.state = {
            redirect:null
        }
    }
    submit = (e) => {
      e.preventDefault();
      console.log(this.state.User)
      this.props.Save(this.state.User);
    }
    inputchange = (target) => {
        this.setState({User:target});
    }

    render() { 

        
        const { UsersSave } = this.props;
        const msg = (UsersSave) => {
            
            if (UsersSave?.data?.save) {
                return (<div class="alert alert-success" role="alert">
                    Salvo Com Sucesso
                </div>);
            }
        }

        return (<>
        {msg(UsersSave)}
        <UserForms onChange={this.inputchange} onSubmit={this.submit}></UserForms>
        </>);
    }
}
 

const mapStateToProps = (store) => {
    console.log(store.UsersSave);
    return {
        UsersSave:store.UsersSave
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
     Save: (data)=>dispatch(userSaveThunck(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cadastro);

