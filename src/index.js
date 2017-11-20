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
    <Tooltip content="Tooltip" placement="top">This will have Tooltip on the Top</Tooltip>
  ))

  .add('RightTooltip', () => (
  	<Tooltip content="Tooltip" placement="right">This will have Tooltip at right</Tooltip>
  ))

  .add('LeftToolTip', () => (
  	<Tooltip content='LeftToolTip' placement="left">This will appear on the left</Tooltip>
  ));
