import './SobreMim.css';

function SobreMim() {
  return (
    <section id="sobre" className="sobre-mim">
      <div className="sobre-conteudo">
        <h2>Sobre mim</h2>
        <p>
          Meu nome é Fulano e eu estudo desenvolvimento web desde janeiro de 2024.
          Comecei meus estudos em HTML/CSS e hoje tenho conhecimento de diversas tecnologias.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, eos blanditiis?
          Rerum id debitis, cum sapiente incidunt accusantium deserunt reprehenderit
          aperiam, possimus, doloribus vel. Libero iste commodi nemo in voluptatum?
        </p>
      </div>
      
      <div className="conhecimentos">
        <h3>Meus conhecimentos</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>ReactJS</li>
        </ul>
      </div>
    </section>
  );
}

export default SobreMim;