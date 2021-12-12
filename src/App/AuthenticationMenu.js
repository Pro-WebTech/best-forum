import React, { Component } from 'react'
import { FirebaseOAuth, FirebaseLogout, styles } from 'refire-app'
import { Button } from 'elemental'
import classnames from 'classnames'
import GoogleIcon from 'react-icons/lib/fa/google'
import GithubIcon from 'react-icons/lib/fa/github'
import TwitterIcon from 'react-icons/lib/fa/twitter'
import FacebookIcon from 'react-icons/lib/fa/facebook-official'
import SettingsModal from '../Admin/SettingsModal'

const Backdrop = ({ isOpen, closeDropdown }) => {
  if (!isOpen) {
    return <span/>
  }
  return (
    <div className="Dropdown-menu-backdrop" onClick={closeDropdown} />
  )
}

const DropdownMenu = ({ isOpen, children }) => {
  if (!isOpen) {
    return <span/>
  }
  return (
    <ul
      key="Dropdown-menu"
      className="Dropdown-menu"
      role="menu"
    >
      {children}
    </ul>
  )
}

const ToggleButton = ({ toggleDropdown }) => {
  return (
    <Button onClick={toggleDropdown} className="Dropdown-toggle">
      Login
      <span className="disclosure-arrow" />
    </Button>
  )
}

const ErrorModal = ({ error, toggleVisible }) => {
  return (
    <SettingsModal
      title="Error signing in"
      visible={!!error}
      hide={toggleVisible}
      save={toggleVisible}
      saveText="Apply"
      Footer={() => <div/>}
    >
      <div>
        {error}
      </div>
    </SettingsModal>
  )
}

const DropdownItem = ({ children, className, onClick }) => {
  return (
    <li className="Dropdown-menu__item" onClick={onClick}>
      <span className={classnames("Dropdown-menu__action", className)}>
        {children}
      </span>
    </li>
  )
}

class AuthenticationMenu extends Component {

  constructor() {
    super()
    this.state = { isOpen: false, error: null }
  }

  toggleDropdown = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  onError = (error) => {
    this.setState({ error: error.message })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  render() {
    const { user, styles } = this.props
    if (user) {
      return (
        <FirebaseLogout>
          <Button className={styles.button}>Logout</Button>
        </FirebaseLogout>
      )
    } else {
      return (
        <span className="Dropdown align-right">
          <ToggleButton toggleDropdown={this.toggleDropdown} />
          <DropdownMenu isOpen={this.state.isOpen}>
            <FirebaseOAuth
              provider="google"
              flow="popup"
              onError={this.onError}
              onClick={this.toggleDropdown}
            >
              <DropdownItem className={styles.menuAction}>
                <GoogleIcon size="20px" color="#db3236" />
                <span className={styles.menuItemText}>Google</span>
              </DropdownItem>
            </FirebaseOAuth>
            <FirebaseOAuth
              provider="github"
              flow="popup"
              onError={this.onError}
              onClick={this.toggleDropdown}
            >
              <DropdownItem className={styles.menuAction}>
                <GithubIcon size="20px" />
                <span className={styles.menuItemText}>Github</span>
              </DropdownItem>
            </FirebaseOAuth>
            <FirebaseOAuth
              provider="twitter"
              flow="popup"
              onError={this.onError}
              onClick={this.toggleDropdown}
            >
              <DropdownItem className={styles.menuAction}>
                <TwitterIcon size="20px" color="#00aced" />
                <span className={styles.menuItemText}>Twitter</span>
              </DropdownItem>
            </FirebaseOAuth>
            <FirebaseOAuth
              provider="facebook"
              flow="popup"
              onError={this.onError}
              onClick={this.toggleDropdown}
            >
              <DropdownItem className={styles.menuAction}>
                <FacebookIcon size="20px" color="#3b5998" />
                <span className={styles.menuItemText}>Facebook</span>
              </DropdownItem>
            </FirebaseOAuth>
          </DropdownMenu>
          <Backdrop isOpen={this.state.isOpen} closeDropdown={this.toggleDropdown} />
          <ErrorModal error={this.state.error} toggleVisible={this.clearError} />
        </span>
      )
    }
  }
}

const css = {
  menuAction: {
    padding: "10px 20px",
  },
  menuItemText: {
    paddingLeft: "10px",
  },
}

export default styles(css, AuthenticationMenu)
