import * as React from 'react'
import './style.scss'
import cn from 'classnames'

interface AvatarProps {
  shape?: 'circle' | 'square'
  size?: 'large' | 'small' | 'default' | number
  icon?: React.ReactNode
  src?: string
  srcSet?: string
  alt?: string
  style?: React.CSSProperties
  className?: string
  children?: React.ReactNode
}

interface AvatarState {
  scale: number
  mounted: boolean
  isImgExist: boolean
}

class Avatar extends React.Component<AvatarProps, AvatarState> {
  static defaultProps = {
    shape: 'circle' as AvatarProps['shape'],
    size: 'default' as AvatarProps['size'],
  }

  state = {
    scale: 1,
    mounted: false,
    isImgExist: false
  }

  private avatarNode!: HTMLElement;

  private avatarChildren!: HTMLElement;

  componentDidMount() {
    this.setScale()
  }

  // componentDidUpdate() {
  //   this.setScale()
  // }

  setScale = () => {
    if(!this.avatarNode || !this.avatarChildren) return;
    const nodeWidth = this.avatarNode.offsetWidth;
    const childrenNodeWidth = this.avatarChildren.offsetWidth;
    this.setState({
      scale: nodeWidth - 8 < childrenNodeWidth ? (nodeWidth - 8) / childrenNodeWidth : 1
    })
  }

  render() {
    const prefixCls = 'x-avatar'
    const { scale } = this.state
    const { shape, size, icon, src, srcSet, alt, className, style, ...otherProps } = this.props

    const classString = cn(
      prefixCls,
      {
        [`${prefixCls}--lg`]: size === 'large',
        [`${prefixCls}--sm`]: size === 'small',
        [`${prefixCls}--${shape}`]: shape,
        [`${prefixCls}--image`]: src,
        [`${prefixCls}--icon`]: icon,
        // [`${prefixCls}--lg--icon`]: size === 'large' && icon,
        // [`${prefixCls}--sm--icon`]: size === 'small' && icon,
      },
      className,
    )

    const sizeStyle: React.CSSProperties =
      typeof size === 'number'
        ? {
            height: size,
            width: size,
            lineHeight: `${size}px`,
            fontSize: icon ? (size / 2) : 18,
          }
        : {}

    let { children } = this.props
    if (src) {
      children = <img src={src} alt={alt} />
    } else if (icon) {
      children = icon
    } else {
      const trans = `scale(${scale}) translateX(-50%)`
      const childrenStyle: React.CSSProperties = {transform: trans}
      children = <span className={`${prefixCls}--string`} style={childrenStyle} ref={(node: HTMLElement) => this.avatarChildren = node}>{children}</span>
    }

    return (
      <span
        {...otherProps}
        className={classString}
        style={{ ...sizeStyle, ...style }}
        ref={(node: HTMLElement) => this.avatarNode = node}
      >
        {children}
      </span>
    )
  }
}

export default Avatar
