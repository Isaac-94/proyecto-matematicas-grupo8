import "./Dashboard.css";
import { Container } from "react-bootstrap";
import HeaderDash from '../components/layouts/Desafios/headerDash/HeaderDash';
import { LuBookText } from "react-icons/lu";
import ButtonFloat from "../components/ui/ButtonFloat/ButtonFloat";
import CursoSection from "../components/cursos/Section";

// Assets 

const DashboardPage = () => {
    return (
        <main style={{ backgroundColor: "#A3DFFD", minHeight: "100vh" }}>
            <HeaderDash />
            <Container
                fluid
                className="d-flex align-items-start justify-content-between gap-0 flex-column text-white"
                style={{
                    minHeight: '100vh',
                    width: '100%',
                    paddingTop: "90px",
                    position: 'relative'
                }}
            >
                {/* <HeaderSection /> */}
                <ButtonFloat
                    className="btn btn-primary"
                    style={{
                        height: '60px',
                        backgroundColor: '#FFDB54',
                        border: 'none',
                        top: "10rem",
                        left: 0,
                        padding: "0 1.5rem",
                        position: 'absolute',
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                        borderTopLeftRadius: '0',
                        borderBottomLeftRadius: '0',
                        opacity: "75%",
                        zIndex: 100
                    }}
                >
                    <LuBookText color="black" size={30} />
                </ButtonFloat>
                <CursoSection />
                <Footer />
            </Container>
        </main>
    );
}

// const HeaderSection = () => {
//     const KPIs = [
//         { title: "Racha", value: 1, icon: "kpis/streak.png" },
//         { title: "Monedas", value: 0, icon: "kpis/coin.png" },
//         { title: "Trofeos", value: 0, icon: "kpis/cup.png" },
//         { title: "Experiencia", value: 0, icon: "kpis/experience.png" },
//     ];

//     return (
//         <div style={{ width: "100%", padding: ".5rem 5rem", gap: ".5rem" }} className="d-flex flex-column align-items-start justify-content-start">
//             <h4 className="text-black" style={{ fontWeight: "bold", fontSize: "2.5rem" }}>Números Básicos</h4>

//             <div className="d-flex align-items-center justify-content-start gap-2" style={{ width: "100%", height: "100px" }}>
//                 <div className="d-flex align-items-center justify-content-start gap-2" style={{ flex: 1 }}>
//                     <div className="d-flex flex-column align-items-center justify-content-between" style={{ width: "200px", height: "110px", backgroundColor: "white", borderRadius: "10px", padding: "12px", flex: 1 }}>
//                         <div className="icon" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", width: "100%" }}>
//                             <img src={"/kpis/star.png"} alt={"Progreso"} style={{ width: "50px", height: "50px" }} />
//                             <div style={{ height: "100%", width: 4, backgroundColor: "#FFDB54", borderRadius: "2px" }} />
//                             <div style={{ height: "8px", borderRadius: "20px", backgroundColor: "#8FD8FD", flex: 1 }} />
//                         </div>
//                         <span className="text-black" style={{ fontSize: 16, fontWeight: 400 }}>Progreso 0%</span>
//                     </div>
//                     <div className="d-flex align-items-center justify-content-between gap-2" style={{ flex: 1 }}>
//                         {
//                             KPIs.map((kpi, index) => (
//                                 <CardKPI key={index} title={kpi.title} value={kpi.value} icon={kpi.icon} />
//                             ))
//                         }
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// const CardKPI = ({ title, value, icon }) => {
//     return (
//         <div className="d-flex flex-column align-items-center justify-content-between" style={{ minWidth: "150px", height: "110px", backgroundColor: "white", borderRadius: "10px", padding: "12px", flex: 1 }}>
//             <div className="icon" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", width: "100%" }}>
//                 <img src={icon} alt={title} style={{ width: "50px", height: "50px" }} />
//                 <div className="text">
//                     <p className="text-black" style={{ fontSize: "40px", margin: 0 }}>{value}</p>
//                 </div>
//             </div>
//             <span className="text-black" style={{ fontSize: 16, fontWeight: 400 }}>{title}</span>
//         </div>
//     )
// }

const Footer = () => {
    return (
        <div className="d-flex align-items-center justify-content-between px-5" style={{ width: "100%", height: "40px", gap: "1rem" }}>
            <p style={{ color: "#1A202C", fontSize: 16, fontWeight: 600 }}>©2026 Equipo 8. Innova Lab</p>
            <div className="d-flex align-items-center justify-content-center gap-5" style={{ height: "100%" }}>
                <p style={{ color: "#1A202C", fontSize: 16, fontWeight: 600 }}>Privacy & Policy</p>
                <p style={{ color: "#1A202C", fontSize: 16, fontWeight: 600 }}>Terms & Conditions</p>
            </div>
        </div>
    )
}

export default DashboardPage;