import React, { Fragment, useCallback, useState } from 'react';
import clsx from 'clsx';
import moment from 'moment';
import Card, { CardProps } from '@material-ui/core/Card';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { CardContent } from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import { Sync } from '@material-ui/icons';
import { useStyles } from './style';

export type PanelProps = {
  title?: React.ReactNode;
  collapsible: boolean;
  refreshable: boolean;
  refreshTimeFormat: string;
} & Omit<CardProps, 'title'>;

function Panel({
  title,
  collapsible,
  refreshable,
  refreshTimeFormat,
  children = [],
  ...rest
}: PanelProps): React.ReactElement {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(true);
  const handleExpandClick = useCallback(() => {
    setExpanded(!expanded);
  }, [expanded]);
  const [date, setDate] = useState(moment().format(refreshTimeFormat));
  const refresh = useCallback(() => {
    setDate(moment().format(refreshTimeFormat));
  }, [refreshTimeFormat]);
  return (
    <Card {...rest}>
      {(title || collapsible || refreshable) && (
        <CardHeader
          title={title}
          action={
            <Fragment>
              {refreshable && (
                <>
                  <span className={classes.date}>{date}</span>
                  <IconButton
                    size="small"
                    aria-label="refresh"
                    onClick={refresh}
                  >
                    <Sync />
                  </IconButton>
                </>
              )}
              {collapsible && (
                <IconButton
                  size="small"
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  aria-label="collapsible"
                  onClick={handleExpandClick}
                >
                  <ExpandMoreIcon fontSize="small" />
                </IconButton>
              )}
            </Fragment>
          }
        />
      )}
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent key={date}>{children}</CardContent>
      </Collapse>
    </Card>
  );
}

Panel.defaultProps = {
  collapsible: false,
  refreshable: false,
  refreshTimeFormat: 'YYYY-MM-DD HH:mm:ss',
};

export default Panel;
