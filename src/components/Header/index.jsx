import { useAuth }  from '../../hooks/auth'
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'

import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from "./styles"
import avatarPlaceHolder from '../../assets/avatar_placeholder.svg'


export function Header() {
  const { signOut , user} = useAuth()
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder
  const navigate = useNavigate()

  function handleSignOut() {
    navigate("/")
    signOut()
  }

  return(
    <Container>
      <Profile to="/profile">
        <img src={avatarUrl} alt={user.name} />
        <div>
          <span>Bem-vindo(a)</span>
          <strong>{user.name}</strong>
        </div>
      </Profile>

      <Logout onClick={handleSignOut}>
        <RiShutDownLine/>
      </Logout>
    </Container>
  )
}