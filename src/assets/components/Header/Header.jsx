import { NavBar } from "../layout/NavBar/NavBar"
import { ItemNavBar } from "../ui/ItemNavBar/ItemNavBar"


export const Header = () => {
  let styleItem = 'text-lg' 
  let styleButton = 'bg-blue-300 p-2 hover:text-white rounded font-bold hover:bg-teal-500'
  return (
    <header className='w-full h-24 bg-blue-900  flex justify-center items-center flex-wrap'>
        <div className='w-180 h8 m-4 text-center text-2xl font-bold text-white hover:text-teal-200'><a href="/">Practicando Hooks</a></div>
        <NavBar style_n='container mx-auto flex items-center justify-between space-x-5'>
            <ItemNavBar style_i={styleItem} style_b={styleButton} links_a={"/"} content={"Inicio"}/>
            <ItemNavBar style_i={styleItem} style_b={styleButton} links_a={"/calc"} content={"UseState - Calculadora"}/>
            <ItemNavBar style_i={styleItem} style_b={styleButton} links_a={"/randombg"} content={"UseState - Background Aleatorio"}/>
            <ItemNavBar style_i={styleItem} style_b={styleButton} links_a={"/register"} content={"UseState - Registro"}/>
            <ItemNavBar style_i={styleItem} style_b={styleButton} links_a={"/listwrks"} content={"UseState - Lista tareas"}/>
        </NavBar>
    </header>
  )
}
