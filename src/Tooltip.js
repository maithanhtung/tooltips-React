/**
 * TODO:
 * Code your tooltip component React implementation in this file.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from './Tooltip.scss';

export default class Tooltip extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

   constructor(props) {
    super(props)
    this.state = { hover: false }
  }

  HoverTrigger() {
    
    handleMouseIn() {
     this.setState({ hover: true })
    }
   
    handleMouseOut() {
      this.setState({ hover: false })
    }
  }

  render() {
    const { children } = this.props;
    const tooltipStyle = {
      display: this.state.hover ? 'block' : 'none',
      color : 'red'
    }

    return (
      <div className={css.root}>
        <div onMouseOver={this.handleMouseIn.bind(this)} onMouseOut={this.handleMouseOut.bind(this)}>{children}</div>
        <div>
          <div style={tooltipStyle}>this is the tooltip!!</div>
        </div>
      </div>
    );
  }
}
