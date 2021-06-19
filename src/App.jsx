import styles from './App.module.css'
import logo from './logo.svg'

export const App = () => {
  return (
    <div className={styles.app}>
      <img
        className={styles.appLogo}
        src={logo}
        alt="logo"
      />
      <h1>Inventory App</h1>
    </div>
  )
}
