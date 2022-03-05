import styles from './layout.module.css'

const Layout = ({ children }) => {
  console.log(styles.container, "스타일 컨테이너");
  return <div className={styles.container}>{children}</div>;
};

export default Layout;
