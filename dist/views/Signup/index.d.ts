import React from 'react';
import { BaseCSSProperties } from '@material-ui/styles';
import useStyles from './style';
declare type SignupStyleProps = {
    [Name in keyof ReturnType<typeof useStyles>]+?: BaseCSSProperties;
};
export declare type SignupFormData = {
    username: string;
    email: string;
    password: string;
    passwordConfirm: string;
};
declare type fieldInfo = {
    name: string;
    label: string;
    required: boolean;
};
declare type SignupProps<T> = {
    logo: React.ReactNode;
    onSubmit: (formData: T) => Promise<void> | void;
    usernameErrorMessage?: string;
    validateUsername: (e: React.ChangeEvent<HTMLInputElement>) => Promise<void> | void;
    loading: boolean;
    goLogin: () => void;
    message?: string;
    classes?: SignupStyleProps;
    extraFieldsInfo?: fieldInfo[];
};
declare function Signup<T extends SignupFormData>({ logo, onSubmit, validateUsername, loading, usernameErrorMessage, goLogin, message, extraFieldsInfo, classes: classList, }: SignupProps<T>): React.ReactElement;
export default Signup;
