import React from 'react'
export const warn = (values) => {
    const warnings = {};
    const { password } = values;

    if (password && password.toString().length <= 4) {
        warnings.password = 'To Short';
    }    

    return warnings;
};

export const validate = (values) => {
    const errors = {};
    const { email } = values;

    if (!email) {
        errors.email = 'Required';
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