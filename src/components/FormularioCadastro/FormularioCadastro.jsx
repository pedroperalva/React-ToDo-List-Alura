import React, { Component } from "react";
import "./estilo.css";

class FormularioCadastro extends Component {

  constructor(props){
    super(props);
    this.titulo = "";
    this.texto = "";
  }
  _handleMudancaTitulo = (e)=>{
    this.titulo = e.target.value
  }
  _handleMudancaTexto = (e)=>{
    this.texto = e.target.value
  }
  _criarNota = (e)=>{
    e.preventDefault()
    e.stopPropagation()
    this.props.criarNota(this.titulo, this.texto)
  }

  render() {
    return (
      <form className="form-cadastro "
      onSubmit={this._criarNota}>
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this._handleMudancaTitulo}
          />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this._handleMudancaTexto}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;
