import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Button functional component
 */
export const ButtonFn = ({ onClick, children }) => <button onClick={onClick}>{children}</button>;
ButtonFn.propTypes = {
  /**
   * onClick description
   * @param {string} hello - This is hello
   * @param {string[]} hello2 - Multiple string
   * @returns {void} - Oh void!
   * @version 1.0.1
   * @since Version 1.0.1
   * @see See [Wikipedia](https://en.wikipedia.org/wiki/Web_colors#HTML_color_names) for a list of color names
   * @ignore
   */
  onClick: PropTypes.func
};
ButtonFn.defaultProps = {
  onClick: null,
};

/**
 * Button class React.Component
 */
export class ButtonReactComponent extends React.Component {
  render() {
    const { onClick, children } = this.props;
    return <button onClick={onClick}>{children}</button>;
  }
}
ButtonReactComponent.propTypes = {
  /**
   * onClick description
   */
  onClick: PropTypes.func,
};
ButtonReactComponent.defaultProps = {
  onClick: null,
};

/**
 * Button class Component
 */
export class ButtonComponent extends Component {
  render() {
    const { onClick, children } = this.props;
    return <button onClick={onClick}>{children}</button>;
  }
}
ButtonComponent.propTypes = {
  /**
   * onClick description
   */
  onClick: PropTypes.func,
};
ButtonComponent.defaultProps = {
  onClick: null,
};

/**
 * Button class static props
 */
export class ButtonStaticProps extends Component {
  static propTypes = {
    /**
     * onClick description
     */
    onClick: PropTypes.func,
  };

  static defaultProps = {
    onClick: null,
  };

  render() {
    const { onClick, children } = this.props;
    return <button onClick={onClick}>{children}</button>;
  }
}
