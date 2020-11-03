import React from 'react'
export const warn = (values) => {
    const warnings = {};
    const { password } = values;

    if (password && password.toString().length <= 8) {
        warnings.password = 'To Short';
    }    

    return warnings;
};

export const validate = (values) => {
    const errors = {};
    const { email,password } = values;

    if (!email) {
        errors.email = 'Required';
    }
    if (password && password.toString().length <= 8) {
        errors.password = 'To Short';
    }    
    return errors;
}

export const renderField = ({
    input, 
    label,
    type,
    meta: { touched, error, warning }
}) => (
    <div className="form-group">
        <label htmlFor="">{label}</label>
        <input {...input} placeholder={label} type={type} className="form-control" />
        { touched && 
                ((error && <span className="text-danger">{error}</span>) || (warning && <span className="text-warning">{warning}</span>))}
                
    </div>
)