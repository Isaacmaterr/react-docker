import React, { Component } from 'react'
import { Field, reduxForm,Form } from 'redux-form'
import { connect } from 'react-redux'
import { renderField, validate, warn } from './Validations'

class FormCadastro extends Component {


    render() {
        const {onSubmit,onChange} = this.props
        return (
            <>
                <Form onSubmit={onSubmit}>
                    <label>Email</label>
                    <Field name="email"
                        placeholder="Email"
                        type="email"
                        value=''
                        component={renderField}
                        onChange={onChange}
                        className="form-control"></Field>
                    <label>Senha</label>
                    <Field name="password"
                        placeholder="password"
                        type="password"
                        value=''
                        onChange={onChange}
                        component={renderField}
                        className="form-control"></Field>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Logar</button>
                    </div>

                </Form>


            </>
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


export default connect(
    mapStateToProps, mapDispatchToProps
)(reduxForm({
    form: 'FormLogin',
    enableReinitialize: true,// faz pega os pre dados 
    validate,
    warn
})(FormCadastro));