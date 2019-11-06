import React, { useState } from 'react';
import Input from './Input';
import { Link } from 'react-router-dom';
import './Cursos.scss';
import Button from './Button';

const Curso = () => {
    const nomeRef = React.useRef("");
    const idadeRef = React.useRef("");
    const rgREf = React.useRef("");
    const cpfRef = React.useRef("");
    const nascimentoRef = React.useRef("");
    const sexoRef = React.useRef("");
    const emailRef = React.useRef("");
    const telefoneRef = React.useRef("");
    const bairroRef = React.useRef("");
    const enderecoRef = React.useRef("");
    const residenciaRef = React.useRef("");
    const periodoRef = React.useRef("");



    const Cadastrar = (event) => {
        event.preventDefault();

        fetch('http://localhost:8000/api/cursos/', {
            method: 'POST',
            body: JSON.stringify({
                nome: nomeRef.current.value,
                idade: idadeRef.current.value,
                rg: rgREf.current.value,
                cpf: cpfRef.current.value,
                dataNascimento: nascimentoRef.current.value,
                sexo: sexoRef.current.value,
                email: emailRef.current.value,
                telefone: telefoneRef.current.value,
                endereco: enderecoRef.current.value,
                bairro: bairroRef.current.value,
                numero_de_recidencia: residenciaRef.current.value,
                periodo: periodoRef.current.value,

            }),
            headers: {
                'Content-type': 'application/json'
            }
        }).then(value => {
            return value.json()
        }).then(value => {
            if (value.id && value.idade >= 16) {

                alert("uau você acaba de se cadastrar ")
                localStorage.setItem("id", value.id)
                window.location = "/finalc"

            } else {
                alert("houve um erro")
            }

            nomeRef.current.value = "";
            idadeRef.current.value = "";
            rgREf.current.value = "";
            cpfRef.current.value = "";
            nascimentoRef.current.value = "";
            sexoRef.current.value = "";
            emailRef.current.value = "";
            telefoneRef.current.value = "";
            enderecoRef.current.value = "";
            bairroRef.current.value = "";
            residenciaRef.current.value = "";
            periodoRef.current.value = "";

        })
    }
    return (
        <div className="Cursos">
            <h1>Matricule-se aqui!</h1>
            <form onSubmit={Cadastrar}>
                <input type="text" ref={nomeRef} placeholder={"digite seu nome"} />
                <input type="text" ref={idadeRef} placeholder={"digite sua idade"} />
                <input type="text" ref={rgREf} placeholder={"digite seu RG"} />
                <input type="text" ref={cpfRef} placeholder={"digite seu CPF"} />
                <input type="text" ref={nascimentoRef} placeholder={"digite sua data de nascimento"} />
                <label >Sexo:</label>
                <select ref={sexoRef} name="sexo" >
                    <option value="sexo">---</option>
                    <option value="M"> Masculino</option>
                    <option value="F"> Feminino</option>
                    <option value="ND">Não definido</option>
                </select>
                <input type="text" ref={emailRef} placeholder={"digite seu email"} />
                <input type="text" ref={telefoneRef} placeholder={"digite seu telefone"} />
                <input type="text" ref={enderecoRef} placeholder={"digite seu endereco"} />
                <input type="text" ref={bairroRef} placeholder={"digite o bairro que mora"} />
                <input type="text" ref={residenciaRef} placeholder={"digite o numero de sua residencia"} />
                <label >Periodo:</label>
                <select ref={periodoRef} name="periodo" >
                    <option value="perido">---</option>
                    <option value="M">Manhã</option>
                    <option value="T">Tarde</option>
                    <option value="N"> Noite </option>
                </select>
                <Button> Registar</Button>
            </form>
        </div>
    )
}



export default Curso;
