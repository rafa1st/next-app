import { useState } from "react";
import PrintAviso from "./PrintAviso";

export default function AvisoBoleto() {
  const [boleto, setBoleto] = useState({
    emissao: "",
    fornecedor: "",
    nota: "",
    vencimento: "",
    cod: "",
    parcela: "",
    valor: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBoleto((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>Cadastro de boletos</h1>
      <form onSubmit={handleSubmit}>
        <label>Emissão: </label>
        <input
          type="text"
          name="emissao"
          value={boleto.emissao}
          onChange={handleChange}
          placeholder="Data de emissão"
        />
        <br />
        <label>Fornecedor: </label>
        <input
          type="text"
          name="fornecedor"
          value={boleto.fornecedor}
          onChange={handleChange}
          placeholder="Fornecedor"
        />
        <br />

        <label>Nota Fiscal: </label>
        <input
          type="text"
          name="nota"
          value={boleto.nota}
          onChange={handleChange}
          placeholder="Nota Fiscal"
        />
        <br />

        <label>Vencimento: </label>
        <input
          type="text"
          name="vencimento"
          value={boleto.vencimento}
          onChange={handleChange}
          placeholder="Vencimento"
        />
        <br />

        <label>Código: </label>
        <input
          type="text"
          name="cod"
          value={boleto.cod}
          onChange={handleChange}
          placeholder="Código"
        />
        <br />

        <label>Parcela: </label>
        <input
          type="text"
          name="parcela"
          value={boleto.parcela}
          onChange={handleChange}
          placeholder="Parcela"
        />
        <br />
        <label>Valor: </label>
        <input
          type="text"
          name="valor"
          value={boleto.valor}
          onChange={handleChange}
          placeholder="Valor da Nota"
        />
        <br />
        <input type="submit" />
      </form>
      <PrintAviso name={boleto}/>
    </div>
  );
}
