import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'
import classNames from 'classnames'

export enum ButtonSize {
  Large = 'lg',
  Small = 'sm'
}

export enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = 'link'
}

interface IButton {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  children: React.ReactNode;
  href?: string;
}

// 类型别名
type NativeButton = IButton & ButtonHTMLAttributes<HTMLElement>
type AnchorButton = IButton & AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButton> & Partial<AnchorButton>

const Button: FC<ButtonProps> = (props) => {
  const {
    disabled,
    className,
    size,
    btnType,
    children,
    href,
    ...restProps
  } = props

  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    'disabled': (btnType === ButtonType.Link) && disabled
  })

  return btnType === ButtonType.Link || href
    ? (<a
      href={href}
      className={classes}
      {...restProps}
    >
      {children}
    </a>)
    : (<button
      className={classes}
      disabled={disabled}
      {...restProps}
    >
      {children}
    </button>)
}

Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Default
}

export default Button