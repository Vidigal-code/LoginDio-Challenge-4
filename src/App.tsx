import React, { useState } from "react";
import "./StyleAll.css";
import {
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiFillEye,
  AiFillEyeInvisible,
} from "react-icons/ai";
// import { useForm, SubmitHandler } from "react-hook-form";

function App() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [viewPassowrd, setViewPassword] = useState(false);
  const [validPass, setValidPass] = useState({
    size: false,
    lower: false,
    upper: false,
    number: false,
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const atualizedPassword = e.target.value;
    setPassword(() => atualizedPassword);
    const validSize = /.{8,}/.test(atualizedPassword);
    const validLower = /[a-z]/.test(atualizedPassword);
    const validUpper = /[A-Z]/.test(atualizedPassword);
    const validNumber = /\d/.test(atualizedPassword);
    setValidPass(() => {
      return {
        size: validSize,
        lower: validLower,
        upper: validUpper,
        number: validNumber,
      };
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid =
      validPass.size && validPass.lower && validPass.upper && validPass.number;
    if (isValid) alert(`Bem-vindo, ${email}`);
    else alert("As informações inseridas não cumprem os requisitos de entrada");
  };

  const handleVisualizador = () => {
    setViewPassword((view) => !view);
  };

  return (
    <form className="form-login-card" onSubmit={handleSubmit}>
      <div className="form-login-card-top"></div>
      <div className="containerall-form-login-card">
        <h1 className="text-by">Created By Kauan Vidigal  GITHUB:<a className="text-link" href="https://github.com/Vidigal-code"> Vidigal-code</a></h1>
        <h1 className="text-login">Login</h1>
        <div className="container_login">
          <label htmlFor="email" className="label_login">
            E-mail
          </label>
          <input
            type="email"
            name="email"
            placeholder="kauan@gmail.com"
            className="input_login input_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="container_login">
          <label htmlFor="password" className="label_login">
            Senha
          </label>
          <div className="container_input">
            <input
              type={!viewPassowrd ? "password" : "text"}
              name="password"
              placeholder="*************"
              className="input_login input_senha"
              value={password}
              onChange={handleInput}
              required
            />
            <button
                type="button"
                className="visualizar_senha"
                onClick={handleVisualizador}
                aria-label={viewPassowrd ? "Hide password" : "Show password"}
            >
              {viewPassowrd ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
            </button>
          </div>
          <div className="senha_requisitos">
            <p
              className={`senha_requisito ${
                validPass.size ? "greentextcolor" : "redtextcolor"
              }`}
            >
              {validPass.size ? (
                <AiOutlineCheckCircle size={14} />
              ) : (
                <AiOutlineCloseCircle size={14} />
              )}{" "}
              Conter 8 ou mais caractéres
            </p>
            <p
              className={`senha_requisito ${
                validPass.lower ? "greentextcolor" : "redtextcolor"
              }`}
            >
              {validPass.size ? (
                <AiOutlineCheckCircle size={14} />
              ) : (
                <AiOutlineCloseCircle size={14} />
              )}{" "}
              Conter letra minúscula
            </p>
            <p
              className={`senha_requisito ${
                validPass.upper ? "greentextcolor" : "redtextcolor"
              }`}
            >
              {validPass.size ? (
                <AiOutlineCheckCircle size={14} />
              ) : (
                <AiOutlineCloseCircle size={14} />
              )}{" "}
              Conter letra maiúscula
            </p>
            <p
              className={`senha_requisito ${
                validPass.number ? "greentextcolor" : "redtextcolor"
              }`}
            >
              {validPass.size ? (
                <AiOutlineCheckCircle size={14} />
              ) : (
                <AiOutlineCloseCircle size={14} />
              )}{" "}
              Conter valor numérico
            </p>
          </div>
        </div>
        <button
          type="submit"
          className="button-login"
          disabled={
            validPass.size &&
            validPass.lower &&
            validPass.upper &&
            validPass.number
              ? false
              : true
          }
        >
          Entrar
        </button>
      </div>
    </form>
  );
}

export default App;
