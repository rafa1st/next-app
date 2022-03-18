import styles from "../styles/Home.module.css";

export default function AvisoBoleto() {
  return (
    <div className={styles.container}>
      <h1 className={styles.headings}>Cadastro de boletos</h1>
      <form action="">
        <label htmlFor="">Fornecedor</label>
        <label htmlFor="">Vencimento</label>
        <br />
        <label htmlFor="">Código</label>
        <label htmlFor="">Parcela</label>
        <label htmlFor="">Valor</label>
        <br />
      </form>
      <p>
        O boleto referente à Nota Fiscal n° emitido na data não estava anexado
        na hora que foi efetivada a entrada no sistema. Caso não chegar até o
        vencimento acima, por favor, entrar em contato com o fornecedor e
        solicitar uma segunda via.
      </p>
    </div>
  );
}
