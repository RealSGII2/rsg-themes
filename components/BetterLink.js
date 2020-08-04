import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import Link from 'next/link'
import React, { Children } from 'react'

const ActiveLink = ({ children, activeClassName, ...props }) => {
  const { pathname } = useRouter()
  const child = Children.only(children)

  const className =
    pathname === props.href
      ? `${activeClassName}`
      : ""

  return <Link {...props}><div className={className}>{React.cloneElement(child, {})}</div></Link>
}

ActiveLink.propTypes = {
  activeClassName: PropTypes.string.isRequired
}

export default ActiveLink