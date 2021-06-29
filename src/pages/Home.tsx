import { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { firebase, auth } from '../services/firebase';

import ilustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import '../styles/auth.scss';
import { Button } from '../Components/Button';

import { TestContext} from '../App';

export function Home(){
  const history = useHistory();
  const { value, setValue } = useContext(TestContext);

  function handleCreateRoom(){
    const provider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(provider).then(result => {

    });

    history.push('/rooms/new');
  }

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
          <button onClick={handleCreateRoom} className="create-room">
            <img src={googleIconImg} alt="Logo do Google"/>
            Crie sua sala Google
          </button>
          <div className="separation">ou entre em uma sala</div>
          <form>
            <input 
              type="text"
              placeholder="Digite o código da sala"
            />
            <Button type="submit">
              Entrar na sala
            </Button>
          </form>
        </div>
      </main>
    </div>
  )
}