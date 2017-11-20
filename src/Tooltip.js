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
    ]),
    placement : PropTypes.string
  }
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  toolTip = () => {
    let style = {} 
    switch (this.props.placement) {
      case 'top':
        style.bottom = '100%';
        style.left = '50%';
        style.transform = 'translateX(-50%)';
        style.marginBottom = '10px';
        break;

      case 'left' :
        style.right = '100%';
        style.top = '50%';
        style.transform = 'translateY(-50%)';
        style.marginRight = '10px'; 
        break;

      case 'right' :
        style.left = '100%';
        style.top = '50%';
        style.transform = 'translateY(-50%)';
        style.marginLeft = '10px';
        break;

      case 'bottom' :
      default :
        style.bottom = '100%';
        style.left = '50%';
        style.transform = 'translateX(-50%)';
        style.marginTop = '10px';
        break;

    }
    return style;
  }

  arrow = () =>{
    let style = {} 
    switch (this.props.placement) {
      case 'top':

        style.bottom = '-5px';
        style.left = '50%';
        style.marginLeft = '-5px';
        style.borderLeft = 'solid transparent 5px';
        style.borderRight = 'solid transparent 5px';
        style.borderTop = 'solid #000 5px';
        break;

      case 'left' :
        break;

      case 'right' :
        style.left = '0px';
        style.top = '50%';
        style.marginLeft = '-5px';
        style.borderTop = 'solid transparent 5px';
        style.borderBottom = 'solid transparent 5px';
        style.borderRight = 'solid #000 5px';
        break;

      case 'bottom' :
      default :
        break;

    }
    return style;
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
        className={css.wrapper}>
        {props.children}
        {
          state.visible &&
          <div className={css.tooltip} style={this.toolTip()}>
            <div className={css.content}>{props.content}</div>
            <div className={css.arrow} style={this.arrow()}></div>
            <div className={css.gap}></div>
          </div>
        }
      </div>
    );
  }
}