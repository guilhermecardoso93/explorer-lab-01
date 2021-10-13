import "./styles.scss";

export default function Curriculo() {
  return (
    <div className="curriculo">
      <h2>
          Guilherme Cardoso da Silva</h2>
      <br />
      <strong>Idade: </strong> 28 anos
      <br />
      <strong>Localidade: </strong>Brasileiro Cabo Frio, RJ/Brasil
      <p className="objetivo">
        <strong>Objetivo</strong>: Desenvolvedor Front-End Júnior
      </p>
      <p><strong>Formação</strong>
        <ul className='cargos'>
          
          <li>Rockeseat - Ignite - ReactJS - 2021</li>
          <li>Rockeseat - Discovery - 2021</li>
          <li>Imagine School - Desenvolvedor Front-End - 2021</li>
          <li>UNOPAR - Técnico Logistíca - 2017/2019</li>
          <li>Ensino Médio 2o. Grau Completo - 2010 </li>
        </ul>
      </p>
      <p>
        <ul>
          {" "}
          <strong>Experiência</strong>
          <li>
            <ul className='cargos'>
                <strong>Cargo:</strong> Assistente Administrativo
                            <li>
                <strong>Empresa:</strong> Supermercado Barcelos Ltda.
              </li>
              <li>
                <strong>Tempo:</strong> Jan/2015 a Emprego Atual
              </li>
              <li>
                <strong>Localidade:</strong>Cabo Frio, Rio de Janeiro, Brasil
              </li>
              <li>
                {" "}
                <strong>Atividades:</strong>
                <ul className="atividades">
                  <li>Lançamento/Recebimento de Notas Fiscais</li>
                  <li>Contas a Pagar</li>
                  <li>Recebimento de Mercadoria</li>
                  <li>SPEED</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <ul className='cargos'>
              <li>
                <strong>Cargo:</strong> Auxiliar Administrativo
              </li>
              <li>
                <strong>Empresa:</strong> Supermercado Barcelos Ltda.
              </li>
              <li>
                <strong>Tempo:</strong> Out/2011 a Jun/2015
              </li>
              <li>
                <strong>Localidade:</strong>Cabo Frio, Rio de Janeiro, Brasil
              </li>
              <li>
                {" "}
                <strong>Atividades:</strong>
                <ul className="atividades">
                  <li>Lançamento/Recebimento de Notas Fiscais</li>
                  <li>Contas a Pagar</li>
                  <li>Recebimento de Mercadoria</li>
                  <li>SPEED</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </p>
    </div>
  );
}
