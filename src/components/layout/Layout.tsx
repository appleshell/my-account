import React from 'react'
import cn from 'classnames'
import './style.scss'

interface ILayoutProps {
  className?: string
  [otherProps: string]: any
}

interface ILayout {
  Header: React.FC
  Body: React.FC
  Footer: React.FC
}

const Layout: React.FC<ILayoutProps> & ILayout = props => {
  const { className, children, ...otherProps } = props
  const composeClassName = cn('x-app', className)
  return (
    <div {...otherProps} className={composeClassName}>
      {children}
    </div>
  )
}

interface IHeaderProps {
  className?: string
  [otherProps: string]: any
}

const LayoutHeader: React.FC<IHeaderProps> = props => {
  const { className, children, ...otherProps } = props
  const composeClassName = cn('x-app--header', className)
  return (
    <header {...otherProps} className={composeClassName}>
      {children}
    </header>
  )
}

interface IBodyProps {
  className?: string
  [otherProps: string]: any
}

const LayoutBody: React.FC<IBodyProps> = props => {
  const { className, children, ...otherProps } = props
  const composeClassName = cn('x-app--main', className)
  return (
    <main {...otherProps} className={composeClassName}>
      {children}
    </main>
  )
}

interface IFooterProps {
  className?: string
  [otherProps: string]: any
}

const LayoutFooter: React.FC<IFooterProps> = props => {
  const { className, children, ...otherProps } = props
  const composeClassName = cn('x-app--footer', className)
  return (
    <footer {...otherProps} className={composeClassName}>
      {children}
    </footer>
  )
}

Layout.Header = LayoutHeader
Layout.Body = LayoutBody
Layout.Footer = LayoutFooter

export default Layout