import React, { useEffect } from 'react';
import useStyles from './style';
import {
  IconButton,
  Paper,
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from '@material-ui/core';
import PasswordField from 'components/PasswordField';
import { useForm } from 'react-hook-form';
import { Refresh } from '@material-ui/icons';
import { BaseCSSProperties, makeStyles } from '@material-ui/styles';

type LoginStyleProps = {
  [Name in keyof ReturnType<typeof useStyles>]+?: BaseCSSProperties;
};

export type LoginFormData = {
  username: string;
  password: string;
  captchaValue?: string;
};

type LoginProps = {
  logo: React.ReactNode;
  onSubmit: (formData: LoginFormData) => Promise<void> | void;
  loading: boolean;
  refreshCaptcha?: () => void;
  captchaImage?: string;
  goSignUp: () => void;
  message?: string;
  classes?: LoginStyleProps;
};

function Login({
  logo,
  onSubmit,
  loading,
  refreshCaptcha,
  captchaImage,
  goSignUp,
  message,
  classes: classList = {},
}: LoginProps): React.ReactElement {
  const usePropStyles = React.useMemo(() => makeStyles(classList as any), [
    classList,
  ]);
  const propStyles = usePropStyles();
  const classes = useStyles({ classes: propStyles });
  const [open, setOpen] = React.useState(false);
  const { register, formState, handleSubmit } = useForm<LoginFormData>({
    mode: 'onChange',
  });
  useEffect(() => {
    if (message) {
      setOpen(true);
    }
  }, [message]);
  return (
    <div className={classes.background}>
      <Paper classes={{ root: classes.paperRoot }}>
        {logo}
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            autoFocus
            margin="normal"
            variant="outlined"
            inputRef={register({ required: true })}
            label="사용자 계정"
            name="username"
            autoComplete="off"
            fullWidth
          />
          <PasswordField
            margin="normal"
            variant="outlined"
            label="비밀번호"
            name="password"
            inputRef={register({ required: true })}
            autoComplete="off"
            fullWidth
          />
          {refreshCaptcha && (
            <>
              <Paper className={classes.captchRoot}>
                {captchaImage && (
                  <img
                    className={classes.captchImage}
                    alt="captcha key"
                    src={captchaImage}
                  />
                )}
                <IconButton
                  className={classes.iconButton}
                  aria-label="captcha key refresh"
                  onClick={(): void => refreshCaptcha()}
                >
                  <Refresh />
                </IconButton>
              </Paper>
              <TextField
                margin="normal"
                variant="outlined"
                inputRef={register({ required: true })}
                label="보안문자 입력"
                name="captchaValue"
                autoComplete="off"
                fullWidth
              />
            </>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={loading || !formState.isValid}
            className={classes.submit}
          >
            {loading ? '로그인 중입니다...' : '로그인'}
          </Button>
          <Button
            onClick={goSignUp}
            color="secondary"
            variant="contained"
            fullWidth
          >
            회원가입
          </Button>
        </form>
      </Paper>
      <Dialog open={open} onClose={(): void => setOpen(false)}>
        <DialogTitle>알림</DialogTitle>
        <DialogContent>
          <DialogContentText>{message}</DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Login;
