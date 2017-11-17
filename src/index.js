/**
 * TODO:
 * Create the stories (examples) in this file.
 * See how to use Storybook: https://storybook.js.org
 */

import React from 'react';
import { storiesOf } from '@storybook/react';

import Tooltip from './Tooltip';

storiesOf('Tooltip', module)
  .add('example', () => (
    <Tooltip>Example story</Tooltip>
  ));
