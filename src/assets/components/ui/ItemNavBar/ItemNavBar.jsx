import { Children } from "react"
import { NavLink } from "react-router-dom"

export const ItemNavBar = ({content, style_a, style_i, style_b, links_a}) => {
  return (
    <li className={style_i}><NavLink className={style_a} to={links_a}><button className={style_b}>{content}</button></NavLink></li>
  )
}
