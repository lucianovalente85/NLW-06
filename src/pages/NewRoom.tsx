import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TestContext} from '../App';

import ilustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';

import '../styles/auth.scss';
import { Button } from '../Components/Button';

export function NewRoom(){
  const {value, setValue } = useContext(TestContext);

  return(
    <div id="page-auth">
      <aside>
        <img src={ilustrationImg} alt="Ilstração simbolizando pergutas e respostas"/>
        <strong>Cria salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas de sua audiência em tempo real</p>
      </aside>
      <main>
      <h1>{value}</h1>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask"/>
          <h2>Criar uma nova sala</h2>
          <form>
            <input 
              type="text"
              placeholder="Nome da sala"
            />
            <Button type="submit">
              Criar sala
            </Button>
          </form>
          <p>Quer entrar em uma sala existente? <Link to="/">clique aqui</Link></p>
        </div>
      </main>
    </div>
  )
}