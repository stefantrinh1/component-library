import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
/**
 * Primary UI component for user interaction
 */
export const Button = ({ ...props }) => {
  // const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  // const mode = mode ? mode : 'primary'
  // console.log(mode)

  console.log(props);
  return (
    <ButtonContainer
      {...props}
      // className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      // style={backgroundColor && { backgroundColor }}
    >
      {/* {label} */}
    </ButtonContainer>
  );
};

Button.propTypes = {
  /**
   * What background color to use
   * 
   * mode

   */

  mode: PropTypes.oneOf(["primary", "secondary", "dark", "light", "clear"]),
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  // size: 'medium',
  onClick: undefined,
};

const ButtonContainer = styled.button`
  /* background-color: ${({ mode, theme, ...props }) => {
    console.log(mode, theme, props);
    switch (mode) {
      case "primary":
        return theme ? theme?.primary : "#007bff";
      case "secondary":
        return theme ? theme?.primary : "#6c757d!";
      default:
        break;
    }
  }} */


`;

/* 
.storybook-button {
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
}
.storybook-button--primary {
  color: white;
  background-color: #1ea7fd;
}
.storybook-button--secondary {
  color: #333;
  background-color: transparent;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
}
.storybook-button--small {
  font-size: 12px;
  padding: 10px 16px;
}
.storybook-button--medium {
  font-size: 14px;
  padding: 11px 20px;
}
.storybook-button--large {
  font-size: 16px;
  padding: 12px 24px;
} */

export default Button;
