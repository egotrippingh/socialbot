import './Content.scss'
import classNames from 'classnames'

const Content = (props) => {
  const {
    className,
  } = props

  return (
    <div
      className={classNames(className, 'content')}
    >
      Content
    </div>
  )
}