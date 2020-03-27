import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import { InfoOutlined } from '@material-ui/icons';

type titleProps = {
  text: string;
  tooltip?: React.ReactNode;
};

export default function Title({
  text,
  tooltip,
}: titleProps): React.ReactElement {
  return (
    <>
      <span>{text}</span>
      {tooltip && (
        <Tooltip title={tooltip} arrow>
          <IconButton
            size="small"
            style={{ padding: 0, marginTop: -2, marginLeft: 5 }}
          >
            <Box color="#F77374" clone>
              <InfoOutlined />
            </Box>
          </IconButton>
        </Tooltip>
      )}
    </>
  );
}
