import React, { Component } from 'react';
import Webcam from 'react-webcam';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import { Container, Header } from './styles';

class RegisterClient extends Component {
  state = {
    id: '',
    avatar: null,
    name: '',
    email: '',
    phone: '',
    profession: '',
    cpf: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  convertBase64ToFile = image => {
    const byteString = atob(image.split(',')[1]);
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i += 1) {
      ia[i] = byteString.charCodeAt(i);
    }
    const newBlob = new Blob([ab], {
      type: 'image/jpeg',
    });
    return newBlob;
  };

  handleSubmit = async e => {
    e.preventDefault();

    const imageSrc = this.webcam.getScreenshot();

    await this.setState({
      avatar: this.convertBase64ToFile(imageSrc),
    });

    const data = new FormData();

    data.append('name', this.state.name);
    data.append('email', this.state.email);
    data.append('phone', this.state.phone);
    data.append('cpf', this.state.cpf);
    data.append('profession', this.state.profession);
    data.append('avatar', this.state.avatar);

    await api.post('user/create', data);

    this.props.history.push('/');
  };

  setRef = webcam => {
    this.webcam = webcam;
  };

  render() {
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: 'user',
    };

    return (
      <>
        <Header>
          <h1>Clientes</h1>
          <Link to="/">
            <div>
              <button type="button">
                <div className="text">Voltar</div>
              </button>
            </div>
          </Link>
        </Header>
        <Container>
          <form onSubmit={this.handleSubmit}>
            <input
              type="hidden"
              name="id"
              value={this.state.id}
              onChange={this.handleChange}
            />

            <label>Nome</label>
            <input
              placeholder="Digite o nome"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />

            <label>Cpf</label>
            <input
              placeholder="Digite o nome"
              name="cpf"
              value={this.state.cpf}
              onChange={this.handleChange}
            />

            <label>Email</label>
            <input
              name="email"
              placeholder="Digite o email"
              value={this.state.email}
              onChange={this.handleChange}
            />

            <label>Telefone</label>
            <input
              placeholder="Digite o telefone"
              name="phone"
              value={this.state.phone}
              onChange={this.handleChange}
            />

            <label>Profissao</label>
            <input
              placeholder="Digite o telefone"
              name="profession"
              value={this.state.profession}
              onChange={this.handleChange}
            />

            <Webcam
              audio={false}
              height={300}
              ref={this.setRef}
              screenshotFormat="image/jpeg"
              width={450}
              videoConstraints={videoConstraints}
            />
            <div>
              <button className="btn" type="submit">
                Salvar
              </button>
            </div>
          </form>
        </Container>
      </>
    );
  }
}

export default RegisterClient;
