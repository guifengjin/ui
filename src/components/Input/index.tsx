import React, { FC, ReactElement, InputHTMLAttributes } from 'react'
/**
 * 1. 属性分析
 *  disabled size icon prepand append {...restProps}
 */

type InputSize = 'lg' | 'sm';

export interface IInputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'>  {
  disabled?: boolean;
  size?: InputSize;
  // icon?: IconProps;
  prepand?: string | ReactElement;
  append?: string | ReactElement;
}

const Input:FC<IInputProps> = (props) => {
  // 取出各种属性

  // 根据属性计算不同的className


  return (
    // 根据属性判断是否需要添加特定的节点
    <></>
  )
}

export default Input