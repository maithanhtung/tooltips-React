/**
 * TODO:
 * Code your tooltip component React implementation in this file.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Tooltip.scss';

export default class Tooltip extends Component {
   static propTypes = {
    children: PropTypes.any.isRequired,
    content: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array,
    ])
    
  }
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  mergeStyles = (userStyles) => {
    Object.keys(this.styles).forEach((name) => {
      Object.assign(this.styles[name], userStyles[name]);
    });
  }

  show = () => this.setVisibility(true);

  hide = () => this.setVisibility(false);

  setVisibility = (visible) => {
    this.setState(Object.assign({}, this.state, {
      visible,
    }));
  }


  render() {
    const {props, state, show, hide} = this;
    return ( 
      <div
        onMouseEnter={show}
        onMouseLeave={hide}
         ref="wrapper"
        className={css.wrapper}>
        {props.children}
        {
          state.visible &&
          <div className={css.tooltip}>
            <div className={css.content}>{props.content}</div>
            <div className={css.arrow}></div>
            <div className={css.gap}></div>
          </div>
        }
      </div>
    );
  }
}