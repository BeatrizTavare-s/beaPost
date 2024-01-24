import styles from './Sidebar.module.css';
export function SideBar() {
  return (
    <div className={styles.sidebar}>
      <img
        className={styles.imgWallpaper}
        src="https://img.freepik.com/fotos-gratis/vista-incrivel-de-uma-falesia-verde-perto-do-mar-no-arquipelago-dos-acores-portugal_181624-48407.jpg?w=1060&t=st=1706074246~exp=1706074846~hmac=1e982bffdf0e31aa7d2be64bbe5c4a7cf332700db9df1583ae88e486d4fe1655"
      />
      <img
        className={styles.imgProfile}
        src="https://avatars.githubusercontent.com/u/66451513?v=4"
      />
      <span>Software Engineer</span>
    </div>
  );
}
