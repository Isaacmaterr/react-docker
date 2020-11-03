import React, { Component } from 'react';
import UserEditForms from '../forms/Cadastro/UserEditForms';
import { usersEditThunck ,usersPercisteEditThunck} from '../actions/UserAction';
import { connect } from 'react-redux';

class Edit extends Component {

    constructor(props) {
        super(props)
        const { match: { params } } = this.props;
        this.state = {
            redirect:null,
            id :params.id
        }
    }
    componentWillMount(){
       this.props.getUser(this.state.id);
    }
    submit = (e) => {
      e.preventDefault();
      this.props.putUser(this.state.User);
    }
    inputchange = (target) => {
        this.setState({User:target});
    }

    render() { 

        
        const {UserEdit} = this.props;
        const msg = (UserEdit) => {
            
            if (UserEdit?.edit) {
                return (<div class="alert alert-success" role="alert">
                    Salvo Com Sucesso
                </div>);
            }
        }

        return (<>
        {msg(UserEdit)}
        <UserEditForms onChange={this.inputchange} onSubmit={this.submit}></UserEditForms>
        </>);
    }
}
 

const mapStateToProps = (store) => {
    return {
        UserEdit:store.Users.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
     getUser: (data)=>dispatch(usersEditThunck(data)),
     putUser:(data)=>dispatch(usersPercisteEditThunck(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit);

