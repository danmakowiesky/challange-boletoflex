import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import { Repositories, Header } from './styles';

const Info = () => {
  const [repositorie, setRepositorie] = useState([]);

  useEffect(() => {
    api.get('user').then(response => {
      const repos = response.data;

      setRepositorie(repos);
    });
  }, []);

  return (
    <>
      <Header>
        <h1>Clientes</h1>
        <Link to="/cadastrar">
          <div>
            <button type="button">
              <div className="text">Novo Cliente</div>
            </button>
          </div>
        </Link>
      </Header>
      <Repositories>
        {repositorie.map(r => (
          <Link
            to={{
              pathname: `/client/${r.id}`,
              state: { id: r.id },
            }}
          >
            <div>
              <strong>{r.name}</strong>
              <p>{r.email}</p>
            </div>
          </Link>
        ))}
      </Repositories>
    </>
  );
};

export default Info;
