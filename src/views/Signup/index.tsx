import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import PasswordField from 'components/PasswordField';
import { useForm } from 'react-hook-form';
import checkValidPassword from 'utils/passwordRule';
import { BaseCSSProperties, makeStyles } from '@material-ui/styles';
import useStyles from './style';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';

type SignupStyleProps = {
  [Name in keyof ReturnType<typeof useStyles>]+?: BaseCSSProperties;
};

export type SignupFormData = {
  username: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

type fieldInfo = {
  name: string;
  label: string;
  required: boolean;
};

type SignupProps<T> = {
  logo: React.ReactNode;
  onSubmit: (formData: T) => Promise<void> | void;
  usernameErrorMessage?: string;
  validateUsername: (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => Promise<void> | void;
  loading: boolean;
  goLogin: () => void;
  message?: string;
  classes?: SignupStyleProps;
  extraFieldsInfo?: fieldInfo[];
};

function Signup<T extends SignupFormData>({
  logo,
  onSubmit,
  validateUsername,
  loading,
  usernameErrorMessage,
  goLogin,
  message,
  extraFieldsInfo,
  classes: classList = {},
}: SignupProps<T>): React.ReactElement {
  const usePropStyles = React.useMemo(() => makeStyles(classList as any), [
    classList,
  ]);
  const propStyles = usePropStyles();
  const classes = useStyles({ classes: propStyles });
  const [open, setOpen] = React.useState(false);
  const [passwordErrorMessage, setMessage] = useState<string | undefined>();
  const {
    register,
    formState,
    watch,
    handleSubmit,
    triggerValidation,
    clearError,
    errors: formErrors,
  } = useForm<T>({ mode: 'onChange' });
  const password = watch('password');
  const username = watch('username');
  useEffect(() => {
    if (message) {
      setOpen(true);
    }
  }, [message]);
  const checkPassword = (value: string): boolean => {
    if (value) {
      const msg = checkValidPassword(value, username);
      triggerValidation('passwordConfirm').then();
      if (msg) {
        setMessage(msg);
        return false;
      } else {
        clearError('password');
        return true;
      }
    }
    return true;
  };
  useEffect(() => {
    triggerValidation('username').then();
  }, [usernameErrorMessage, triggerValidation]);
  return (
    <div className={classes.background}>
      <Paper classes={{ root: classes.paperRoot }}>
        {logo}
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl
            margin="normal"
            variant="outlined"
            error={!!usernameErrorMessage}
            fullWidth
          >
            <InputLabel htmlFor="username">사용자 계정</InputLabel>
            <OutlinedInput
              autoFocus
              id="username"
              name="username"
              inputRef={register({
                required: true,
                validate: { username: (): boolean => !usernameErrorMessage },
              })}
              onChange={validateUsername}
              labelWidth={80}
              autoComplete="off"
            />
            {usernameErrorMessage && (
              <FormHelperText>{usernameErrorMessage}</FormHelperText>
            )}
            {username && !usernameErrorMessage && (
              <FormHelperText className={classes.successHelperText}>
                사용가능한 ID 입니다.
              </FormHelperText>
            )}
          </FormControl>
          <TextField
            margin="normal"
            variant="outlined"
            inputRef={register({
              required: true,
              validate: (value) =>
                /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i.test(
                  value,
                ),
            })}
            label="이메일"
            name="email"
            fullWidth
          />
          <PasswordField
            margin="normal"
            variant="outlined"
            name="password"
            label="비밀번호"
            autoComplete="off"
            inputProps={{ autoComplete: 'new-password' }}
            inputRef={register({
              required: true,
              validate: {
                invalid: (value): boolean => checkPassword(value),
              },
            })}
            onChange={(): Promise<boolean> => triggerValidation('password')}
            error={!!formErrors.password}
            helperText={formErrors.password && passwordErrorMessage}
            fullWidth
          />
          <PasswordField
            margin="normal"
            variant="outlined"
            name="passwordConfirm"
            label="비밀번호 확인"
            inputRef={register({
              required: true,
              validate: (value) => value === password,
            })}
            onChange={(): Promise<boolean> =>
              triggerValidation('passwordConfirm')
            }
            error={!!formErrors.passwordConfirm}
            helperText={
              formErrors.passwordConfirm && '비밀번호가 일치 하지 않습니다.'
            }
            fullWidth
          />
          {extraFieldsInfo &&
            extraFieldsInfo.map((field, i) => {
              return (
                <TextField
                  key={i}
                  margin="normal"
                  variant="outlined"
                  inputRef={register({
                    required: field.required,
                  })}
                  label={field.label}
                  name={field.name}
                  fullWidth
                />
              );
            })}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={loading || !formState.isValid}
            className={classes.submit}
          >
            {loading ? '등록중입니다...' : '등록'}
          </Button>
          <Button
            onClick={goLogin}
            color="secondary"
            variant="contained"
            fullWidth
          >
            로그인 하기
          </Button>
        </form>
      </Paper>
      <Dialog open={open} onClose={(): void => setOpen(false)}>
        <DialogTitle>계정 생성 요청</DialogTitle>
        <DialogContent>
          <DialogContentText>{message}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="primary" variant="contained" onClick={goLogin}>
            확인
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Signup;
