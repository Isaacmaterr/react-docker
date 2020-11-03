import jwt from 'jsonwebtoken'
export const isAuthenticated = () => {
    try {
        let token = localStorage.getItem('token');
        jwt.verify(token, '5fNgHQvo1DHbBLOSM1KrwsltFyLkcFhfxkiqr44Ujfp20dGNSqJDBuabQzDfBsIe');
        return true;
    } catch (e) {
        return false;
    }
};