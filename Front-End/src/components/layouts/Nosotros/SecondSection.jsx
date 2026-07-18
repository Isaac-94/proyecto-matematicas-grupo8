import { FaGithub, FaLinkedin } from 'react-icons/fa';
import teamPhoto from '../../../assets/image.png';
import hernanPhoto from '../../../assets/Fotos/hernan.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Nosotros.css';

const teamMembers = [
  {
    name: 'César Ramos',
    role: 'Backend Developer',
    quote: 'Creo soluciones robustas que hacen que la app funcione con velocidad y confiabilidad.',
    image: teamPhoto,
    linkedin: '#',
    github: 'https://github.com/cesardevuardo',
  },
  {
    name: 'Isaac Carranza',
    role: 'Backend Developer',
    quote: 'Diseño la arquitectura invisible que sostiene a Mate+, creando una base sólida, segura y lista para escalar.',
    image: teamPhoto,
    linkedin: 'https://www.linkedin.com/in/isaac-carran/',
    github: 'https://github.com/Isaac-94',
  },
  {
    name: 'Lisandro Salvareschi',
    role: 'Frontend Developer',
    quote: 'Transformo diseños estáticos en experiencias interactivas y fluidas, cuidando cada píxel y cada animación.',
    image: teamPhoto,
    linkedin: 'https://www.linkedin.com/in/salvareschilisandro/',
    github: 'https://github.com/Slisandro',
  },
  {
    name: 'Romina Ruiz',
    role: 'Frontend Developer',
    quote: 'Conecto el diseño visual con la potencia del backend, haciendo que el código del navegador cobre vida.',
    image: teamPhoto,
    linkedin: 'https://www.linkedin.com/in/romina-s-ruiz-/',
    github: 'https://github.com/Romina-Ruiz',
  },
    {
    name: 'Soledad Peloc',
    role: 'Frontend Developer',
    quote: 'Mi meta es que la interfaz de Mate+ no solo sea atractiva, sino rápida, accesible y responsiva en cualquier pantalla.',
    image: teamPhoto,
    linkedin: 'www.linkedin.com/in/sol-peloc',
    github: 'https://github.com/SolPeloc',
  },
  {
    name: 'Florencia Luna',
    role: 'Diseñadora UX/UI',
    quote: 'Le doy identidad visual a la plataforma, creando un entorno amigable y estimulante que invita a aprender jugando.',
    image: teamPhoto,
    linkedin: 'https://www.linkedin.com/in/luna-florencia/',
    github: 'https://github.com/florencialu',
  },
  {
    name: 'Sofia Digiano',
    role: 'Diseñadora UX/UI',
    quote: 'Estudio cómo interactúan los usuarios para diseñar caminos sencillos, intuitivos y libres de frustraciones.',
    image: teamPhoto,
    linkedin: 'www.linkedin.com/in/sofía-inés-digiano',
    github: 'https://github.com/SofiaDigiano',
  },
  {
    name: 'Mayra Capra',
    role: 'Diseñadora UX/UI',
    quote: 'Diseño productos intuitivos que conectan con el usuario y potencian el aprendizaje.',
    image: teamPhoto,
    linkedin: '#',
    github: '#',
  },
    {
    name: 'Maribel Chura Yujra',
    role: 'Tester QA',
    quote: 'Exploro cada rincón de la aplicación buscando fallos para garantizar que la experiencia del usuario sea impecable.',
    image: teamPhoto,
    linkedin: '#',
    github: '#',
  },
  {
    name: 'Hernan Luciano',
    role: 'Tester QA',
    quote: 'Desafío al código y automatizo pruebas para que cada actualización de Mate+ salga a la luz sin fricciones.',
    image: hernanPhoto,
    linkedin: 'https://www.linkedin.com/in/hernanluciano/',
    github: 'https://github.com/hernycai',
  },
  {
    name: 'Marcos Marfeo',
    role: 'Data Analytics',
    quote: 'Transformo datos puros en información estratégica, ayudando al equipo a tomar decisiones basadas en la realidad.',
    image: teamPhoto,
    linkedin: '#',
    github: '#',
  },
  {
    name: 'Tony Arturo Curi Caballero',
    role: 'Data Analytics',
    quote: 'Analizo los patrones de aprendizaje para entender dónde se divierten más los usuarios y dónde necesitan más apoyo.',
    image: teamPhoto,
    linkedin: '#',
    github: 'https://github.com/tonycuri',
  },
    {
    name: 'Gustavo Ovejero',
    role: 'Coordinador de Proyecto',
    quote: 'Creo soluciones robustas que hacen que la app funcione con velocidad y confiabilidad.',
    image: teamPhoto,
    linkedin: 'https://www.linkedin.com/in/gustavo-ovejero/',
    github: 'https://github.com/ovejero92',
  },
  
];

function SecondSection() {
  return (
    <section className="team-section">
      <Container className="team-container py-5">
        <Row className="g-4 justify-content-center">
          {teamMembers.map((member) => (
            <Col key={member.name} xs={12} sm={6} lg={4} xl={3}>
              <article className="team-card">
                <div className="team-card-image">
                  <img src={member.image} alt={`${member.name} perfil`} />
                </div>
                <div className="team-card-body">
                  <h3>{member.name}</h3>
                  <p className="team-card-role">{member.role}</p>
                  <p className="team-card-text">{member.quote}</p>
                </div>
                <div className="team-card-footer">
                  <a href={member.linkedin} target="_blank" rel="noreferrer" aria-label={`${member.name} LinkedIn`}>
                    <FaLinkedin />
                  </a>
                  <a href={member.github} target="_blank" rel="noreferrer" aria-label={`${member.name} GitHub`}>
                    <FaGithub />
                  </a>
                </div>
              </article>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default SecondSection;
