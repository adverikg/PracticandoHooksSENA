
export const NavBar = ({children, style_n}) => {
    return (
     <nav >
        <ul className={style_n}>
          {children}
        </ul>
     </nav>
    )
  }
  