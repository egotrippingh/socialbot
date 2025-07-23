import './Logo.scss'
import classNames from 'classnames'
import {Link} from "react-router-dom";

const Logo = (props) => {
  const {
    className,
    loading = 'lazy',
  } = props
  const title = 'Home'
  return (
    <Link
      className={classNames(className, 'logo')}
      to="/"
      title={title}
      aria-label={title}
    >
      <img
        className={classNames(className, 'logo')}
        src="/logo.svg"
        alt="logo"
        width={153}
        height={24}
        loading={loading}
      />
    </Link>
  )
}

export default Logo