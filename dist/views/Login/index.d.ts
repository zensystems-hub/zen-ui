import React from 'react';
import useStyles from './style';
import { BaseCSSProperties } from '@material-ui/styles';
declare type LoginStyleProps = {
    [Name in keyof ReturnType<typeof useStyles>]+?: BaseCSSProperties;
};
export declare type LoginFormData = {
    username: string;
    password: string;
    captchaValue?: string;
};
declare type LoginProps = {
    logo: React.ReactNode;
    onSubmit: (formData: LoginFormData) => Promise<void> | void;
    loading: boolean;
    refreshCaptcha?: () => void;
    captchaImage?: string;
    goSignUp: () => void;
    message?: string;
    classes?: LoginStyleProps;
};
declare function Login({ logo, onSubmit, loading, refreshCaptcha, captchaImage, goSignUp, message, classes: classList, }: LoginProps): React.ReactElement;
export default Login;
