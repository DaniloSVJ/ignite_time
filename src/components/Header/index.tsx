import { HeaderContainer } from './styles'
import { Timer, Scroll } from 'phosphor-react'
import Logo from '../../assets/logo-ignite.svg'
import { NavLink } from 'react-router-dom'
export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} />

      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/usuario" title="Usuario">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
