/**
 * TODO:
 * Create the stories (examples) in this file.
 * See how to use Storybook: https://storybook.js.org
 */

import React from 'react';
import { storiesOf } from '@storybook/react';

import Tooltip from './Tooltip';

storiesOf('Tooltip', module)
  .add('TopToolTip', () => (
    <Tooltip content="TopTooltip" placement="top">This will have Tooltip on the Top</Tooltip>
  ))

  .add('RightTooltip', () => (
  	<Tooltip content="RightTooltip" placement="right">This will have Tooltip at right</Tooltip>
  ))

  .add('LeftToolTip', () => (
  	<Tooltip content='LeftToolTip' placement="left">This will appear on the left</Tooltip>
  ))

  .add('BottomToolTip', () => (
  	<Tooltip content='BottomToolTip' placement="bottom">This will appear on the bottom</Tooltip>
  ));
