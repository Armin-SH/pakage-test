import React from 'react';
import {Button as MaterialButton} from '@mui/material'
import {Divider} from '@mui/material'
import {ButtonProps} from './button.props';
import {styled} from '@mui/material'
import Link from 'next/link'
import {paletteTheme} from '../../config/material-config/palette/palette'
import LoadingIndicator from '../loading-indicator'

const CssButton = styled(({shape, href, variant, color, ...props}: ButtonProps) => <MaterialButton {...props}/>)<ButtonProps>((props: ButtonProps) => {
  const costumeLargeWidth = props.shape !== 'rectangle' ? {
    width: "48px",
    minWidth: '48px',
  } : {};

  const costumeSmallWidth = props.shape !== 'rectangle' ? {
    width: "32px",
    minWidth: '32px',
  } : {};

  const costumeMediumWidth = props.shape !== 'rectangle' ? {
    width: "40px",
    minWidth: '40px',
  } : {};

  return ({
    "&.MuiButton-outlined": {
      backgroundColor: "#ffffff",
    },
    boxShadow: 'none',
    "&:hover": {
      boxShadow: 'none',
    },
    "&:active": {
      boxShadow: 'none'
    },
    fontSize: '0.875rem',
    height: "40px",
    borderRadius: props.shape === "circle" ? '100%' : '4px',
    zIndex: 4,
    overflow: 'hidden',
    padding: '0 4px',
    ...costumeMediumWidth,
    "&.MuiButton-sizeLarge": {
      fontSize: '0.875rem',
      height: '48px',
      borderRadius: props.shape === "circle" ? '100%' : '4px',
      ...costumeLargeWidth,
    },
    "&.MuiButton-sizeSmall": {
      fontSize: '0.75rem',
      height: "32px",
      borderRadius: props.shape === "circle" ? '100%' : '4px',
      ...costumeSmallWidth,
    },
  })
});

export const CustomButton = ({children, variant, color, endIcon, size, className, startIcon, disabled, onClick, href, LinkProps, shape, loading, ...rest}: ButtonProps) => {
  const dividerColor = variant === "contained" ? 'common.white' : color === 'inherit' ? color : paletteTheme[color || "primary"].main;

  if (loading) {
    children = <LoadingIndicator color={'inherit'} size={'20px'}/>
  }

  const Button = <CssButton
    shape={shape}
    disabled={disabled}
    onClick={onClick}
    className={className}
    color={color}
    variant={variant}
    endIcon={endIcon}
    startIcon={startIcon}
    size={size}
    {...rest}>
    {startIcon && !loading ? <Divider orientation="vertical" variant="middle" flexItem color={dividerColor}/> : null}
    {children}
  </CssButton>;

  if (href) {
    return (
      <Link href={href} passHref={true} {...LinkProps}>
        {Button}
      </Link>
    );
  }

  return (
    Button
  );
};

CustomButton.defaultProps = {
  color: "primary",
  variant: "contained",
  shape: "rectangle",
  size: 'large',
  loading: false,
};

export default CustomButton;
