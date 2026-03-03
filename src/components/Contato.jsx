import './Contato.css';

function Contato() {
  return (
    <section id="contato" className="contato">
      <h2 className="contato-title">Você pode me enviar uma mensagem! 🤙</h2>
      <p>
        Preencha o seu nome, seu e-mail e escreva a mensagem que deseja enviar para
        mim. Logo quando eu puder, irei te responder.
      </p>
      <p>Desde já, agradeço o seu contato!</p>

      <form className="form-contato">
        <label>Nome:</label>
        <input type="text" name="nome" />

        <label>Seu e-mail:</label>
        <input type="email" name="email" placeholder="exemplo@gmail.com" />

        <label>Mensagem:</label>
        <textarea name="mensagem" rows="5"></textarea>

        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default Contato;