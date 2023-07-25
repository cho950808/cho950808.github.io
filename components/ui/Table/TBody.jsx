import React, { forwardRef } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

const TBody = forwardRef((props, ref) => {
  const { children, className, asElement: Component, ...rest } = props

  // classNames 함수를 적절하게 사용하도록 수정
  const tBodyClass = classNames(Component !== 'tbody' ? 'tbody' : '', className)

  // Component 변수가 문자열일 경우, 실제 DOM 요소로 변환
  const Element = typeof Component === 'string' ? Component : 'tbody'

  return (
    <Element className={tBodyClass} {...rest} ref={ref}>
      {children}
    </Element>
  )
})

TBody.propTypes = {
  asElement: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
}

TBody.defaultProps = {
  asElement: 'tbody',
}

// 컴포넌트에 displayName 설정
TBody.displayName = 'TBody'

export default TBody
