import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { TextFieldProps } from '@material-ui/core';

const PasswordField: React.FC<TextFieldProps> = ({
  InputProps = {},
  ...props
}) => {
  const [showPassword, setPasswordMode] = useState(false);

  return (
    <TextField
      type={showPassword ? 'text' : 'password'}
      InputProps={Object.assign(
        {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={(): void => setPasswordMode(!showPassword)}
                // onMouseDown={(e) => e.preventDefault()}
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        },
        InputProps,
      )}
      {...props}
    />
  );
};

export default PasswordField;
