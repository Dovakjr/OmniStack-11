import React, {useState} from "react";
import "../Logon/styles.css";
import heroesImage from "../../assets/heroes.png";
import { FiLogIn } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";
import api from '../../services/api';

import logoImage from "../../assets/logo.svg";

export default function Logon() {
  const [id, setId] = useState('');

  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    console.log(id);
    
    try{
       const response = await api.post('sessions', {id});

       localStorage.setItem('ongId', id);
       localStorage.setItem('ongName', response.data.name);

       history.push('/profile');

    }catch(erro){
      alert('Não foi possível realizar o login. Tente Novamente');
    }
  }
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImage} alt="Logo be The Hero" />
        <form onSubmit ={handleLogin}>
          <h1>Faça seu logon</h1>
          <input placeholder="Sua ID" value={id} onChange ={e => setId(e.target.value)}/>
          <button type="submit" className="button">
            Entrar
          </button>
          <Link to="/register" className="back-link">
            <FiLogIn size={16} color="#E02041" />
            Não tenho Cadastro
          </Link>
        </form>
      </section>
      <img src={heroesImage} alt="Hérois" />
    </div>
  );
}