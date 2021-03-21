import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { Container, Header } from './styles';

const Client = props => {
  const [repositorie, setRepositorie] = useState([]);
  useEffect(() => {
    const { id } = props.location.state;
    api
      .get(`/user`, {
        params: {
          idUser: id,
        },
      })
      .then(response => {
        const repos = response.data;

        setRepositorie(repos);
      });
  }, []);

  return (
    <>
      <Header>
        <h1>Perfil</h1>
        <Link to="/">
          <div>
            <button type="button">
              <div className="text">Voltar</div>
            </button>
          </div>
        </Link>
      </Header>
      <Container>
        {repositorie.map(repo => (
          <>
            <header>
              <img
                src={`http://localhost:3456/files/${repo.avatar}`}
                alt={repo.name}
              />
            </header>
            <section className="body">
              <h2>{repo.name}</h2>
              <p>{repo.email}</p>
              <p>{repo.cpf}</p>
              <p>{repo.phone}</p>
              <p>{repo.profession}</p>
            </section>
          </>
        ))}
      </Container>
    </>
  );
};

export default Client;
