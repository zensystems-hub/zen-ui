import React, { ReactNode } from 'react';
import { Grid } from '@material-ui/core';
import Panel from './index';
import Title from '../Title';
import { text, boolean } from '@storybook/addon-knobs';
import { muiTheme } from 'storybook-addon-material-ui';
import defaultTheme from 'theme/default';

export default {
  title: 'components|Panel',
  decorators: [muiTheme([defaultTheme])],
  component: Panel,
};

export const Default = (): ReactNode => {
  const body = text('content', 'hello world!!');
  return (
    <Grid style={{ padding: 20 }} container spacing={5}>
      <Grid item xs={4}>
        <Panel
          title={
            <Title
              text="전체 트래픽 모니터링"
              tooltip={
                <>
                  최근 6시간 트래픽 추이를 확인합니다. <br />
                  5분주기 트래픽량 및 최대값/최소값/평균값을 확인합니다.
                </>
              }
            />
          }
          refreshable
        >
          {body}
        </Panel>
      </Grid>
    </Grid>
  );
};
