import "./Dashboard.css";
import { Container, Row, Col } from "react-bootstrap";
import HeaderDash from '../components/layouts/Desafios/headerDash/HeaderDash';
import { useMediaQuery } from "../hooks/useMediaQuery";
import FooterDash from "../components/layouts/FooterDash/FooterDash";

// Assets 
const RANKING = [
    {
        id: 4,
        name: "Emma",
        titulo: "As de la Suma",
    },
    {
        id: 5,
        name: "Leo",
        titulo: "Imparable de las Fracciones",
    },
    {
        id: 6,
        name: "Fabi",
        titulo: "Mente Matemática",
    },
    {
        id: 4,
        name: "Emma",
        titulo: "As de la Suma",
    },
    {
        id: 7,
        name: "Manu",
        titulo: "Ninja Calculador",
    }
]

const RankingPage = () => {
    const isMobile = useMediaQuery("(max-width: 768px)");

    return (
        <main style={{
            backgroundColor: "transparent",
            minHeight: "100vh",
            height: "max-content",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            overflow: "hidden"
        }}>
            <HeaderDash />
            <Container
                fluid
                className="d-flex align-items-start justify-content-between gap-0 flex-column text-white"
                style={{
                    position: "relative",
                    minHeight: "calc(100vh - 90px)",
                    width: '100%',
                    paddingLeft: "1rem",
                    paddingRight: "1rem",
                    paddingBottom: "2rem",
                    marginTop: "80px",
                    overflowY: "auto",
                    overflowX: "hidden",
                    backgroundColor: "#FFDB54",
                    gap: 40,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    marginBottom: "1rem",
                }}
            >
                <div
                    style={{
                        position: "fixed",
                        width: isMobile ? "150vw" : "110vw",
                        height: isMobile ? "50vh" : "100vh",
                        left: "50%",
                        top: "50%",
                        transform: isMobile ? "translateX(-50%) translateY(10%)" : "translateX(-50%) translateY(-10%)",
                        background: "#8FD8FD75",
                        borderRadius: "50%",
                        pointerEvents: "none",
                        zIndex: 0,
                    }}
                />

                <PodioUsuarios />


                <div style={{
                    position: "relative",
                    zIndex: 1,
                    width: "100%",
                    height: "100%",
                    overflowY: "auto",
                    marginTop: "60px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: 20,
                }}>
                    <Row
                        className="g-4"
                        style={{
                            width: "100%",
                            justifyContent: "center"
                        }}
                    >
                        {RANKING.map((mixto) => (
                            <Col
                                key={mixto.id}
                                xs={12}
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <CardRanking
                                    titulo={mixto.name}
                                    index={mixto.id}
                                    subtitulo={mixto.titulo}
                                />
                            </Col>
                        ))}
                    </Row>
                </div>
            </Container>

            <FooterDash />
        </main >
    );
}

export default RankingPage;

const CardRanking = ({ titulo, index, subtitulo, monedas = "52.425", avatar = "/user.png" }) => {
    const isMobile = useMediaQuery("(max-width: 768px)");
    const isTablet = useMediaQuery("(min-width: 769px) and (max-width: 1024px)");

    // Determinar tamaños según dispositivo
    const getSizes = () => {
        if (isMobile) {
            return {
                padding: "12px 16px",
                avatarSize: "40px",
                fontSize: "14px",
                coinSize: "18px",
                gap: "8px",
                borderRadius: "16px",
                numberFontSize: "14px"
            };
        }
        if (isTablet) {
            return {
                padding: "16px 20px",
                avatarSize: "50px",
                fontSize: "16px",
                coinSize: "24px",
                gap: "10px",
                borderRadius: "18px",
                numberFontSize: "16px"
            };
        }
        return {
            padding: "20px 24px",
            avatarSize: "60px",
            fontSize: "20px",
            coinSize: "30px",
            gap: "12px",
            borderRadius: "20px",
            numberFontSize: "18px"
        };
    };

    const sizes = getSizes();

    // Colores según posición (top 3)
    const getPositionColors = () => {
        if (index === 1) {
            return {
                bg: "#FFF8E1",
                border: "2px solid #FFD700",
                shadow: "0 4px 12px rgba(255, 215, 0, 0.3)"
            };
        }
        if (index === 2) {
            return {
                bg: "#F5F5F5",
                border: "2px solid #C0C0C0",
                shadow: "0 4px 12px rgba(192, 192, 192, 0.3)"
            };
        }
        if (index === 3) {
            return {
                bg: "#FFF5EE",
                border: "2px solid #CD7F32",
                shadow: "0 4px 12px rgba(205, 127, 50, 0.3)"
            };
        }
        return {
            bg: "#FFFFFF",
            border: "none",
            shadow: "0 2px 8px rgba(0,0,0,0.06)"
        };
    };

    const colors = getPositionColors();

    // Medallas para top 3
    const getMedalIcon = () => {
        if (index === 1) return "🥇";
        if (index === 2) return "🥈";
        if (index === 3) return "🥉";
        return null;
    };

    const medal = getMedalIcon();

    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "black",
            gap: sizes.gap,
            width: "100%",
            background: colors.bg,
            padding: sizes.padding,
            borderRadius: sizes.borderRadius,
            border: colors.border,
            boxShadow: colors.shadow,
            transition: "all 0.3s ease",
            cursor: "pointer",
            flexWrap: isMobile ? "wrap" : "nowrap",
            position: "relative",
            overflow: "hidden",
            minHeight: isMobile ? "70px" : "80px",
        }}
        // Efecto hover
        onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.02)";
            e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.1)";
        }}
        onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = colors.shadow;
        }}
        >
            {/* Indicador de posición destacada en mobile */}
            {isMobile && medal && (
                <div style={{
                    position: "absolute",
                    top: "4px",
                    right: "8px",
                    fontSize: "20px",
                    opacity: 0.8
                }}>
                    {medal}
                </div>
            )}

            {/* Sección izquierda: número, avatar, nombre */}
            <div style={{ 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                gap: isMobile ? "8px" : "12px",
                flex: isMobile ? "1" : "0 0 auto",
                minWidth: isMobile ? "0" : "auto",
                width: isMobile ? "100%" : "auto",
            }}>
                {/* Número de posición */}
                <span style={{
                    fontSize: sizes.numberFontSize,
                    fontWeight: "700",
                    color: index <= 3 ? "#FFD700" : "#999",
                    minWidth: isMobile ? "24px" : "32px",
                    textAlign: "center",
                    fontVariantNumeric: "tabular-nums",
                }}>
                    #{index}
                </span>

                {/* Avatar */}
                <div
                    style={{
                        position: "relative",
                        borderRadius: "100%",
                        backgroundImage: `url(${avatar})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        width: sizes.avatarSize,
                        height: sizes.avatarSize,
                        backgroundColor: "#FFDB54",
                        flexShrink: 0,
                        border: index <= 3 ? `2px solid ${index === 1 ? "#FFD700" : index === 2 ? "#C0C0C0" : "#CD7F32"}` : "none",
                    }}
                >
                    {/* Indicador de top 3 en desktop */}
                    {!isMobile && medal && (
                        <div style={{
                            position: "absolute",
                            bottom: "-4px",
                            right: "-4px",
                            fontSize: "18px",
                            backgroundColor: "white",
                            borderRadius: "50%",
                            padding: "2px",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                            lineHeight: 1,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "28px",
                            height: "28px",
                        }}>
                            {medal}
                        </div>
                    )}
                </div>

                {/* Información del usuario */}
                <div style={{ 
                    display: "flex", 
                    flexDirection: "column", 
                    alignItems: "flex-start", 
                    justifyContent: "center", 
                    gap: "2px",
                    minWidth: 0, // Permite truncar texto
                    flex: "1",
                }}>
                    <h3 style={{
                        margin: 0,
                        fontSize: sizes.fontSize,
                        fontWeight: 600,
                        whiteSpace: isMobile ? "normal" : "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        maxWidth: isMobile ? "120px" : "200px",
                    }}>
                        {titulo}
                    </h3>
                    <p style={{
                        color: "#52C5FE",
                        fontSize: `calc(${sizes.fontSize} - 4px)`,
                        margin: 0,
                        whiteSpace: isMobile ? "normal" : "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        maxWidth: isMobile ? "120px" : "200px",
                    }}>
                        {subtitulo}
                    </p>
                </div>
            </div>

            {/* Sección derecha: monedas y tendencia */}
            <div style={{ 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "flex-end", 
                gap: isMobile ? "6px" : "12px",
                flexShrink: 0,
                marginLeft: isMobile ? "auto" : "0",
                paddingLeft: isMobile ? "8px" : "0",
            }}>
                <img 
                    src="/kpis/coin.png" 
                    alt="monedas" 
                    style={{ 
                        width: sizes.coinSize, 
                        height: sizes.coinSize,
                        objectFit: "contain",
                    }} 
                />
                <p style={{
                    color: "black",
                    fontSize: sizes.fontSize,
                    margin: 0,
                    fontWeight: "600",
                    fontVariantNumeric: "tabular-nums",
                }}>
                    {typeof monedas === 'number' ? monedas.toLocaleString() : monedas}
                </p>

                {/* Indicador de tendencia */}
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "2px",
                    color: index % 2 === 0 ? "#4CAF50" : "#F44336",
                }}>
                    <img 
                        src="/up.png" 
                        alt={index % 2 === 0 ? "subir" : "bajar"}
                        style={{ 
                            width: isMobile ? "16px" : "24px", 
                            height: isMobile ? "16px" : "24px",
                            transform: index % 2 === 0 ? "rotate(0deg)" : "rotate(180deg)",
                            transition: "transform 0.3s ease",
                            objectFit: "contain",
                        }} 
                    />
                    {!isMobile && (
                        <span style={{
                            fontSize: `calc(${sizes.fontSize} - 6px)`,
                            fontWeight: "500",
                            color: index % 2 === 0 ? "#4CAF50" : "#F44336",
                        }}>
                            {index % 2 === 0 ? "+12%" : "-8%"}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

const UserCard = ({
    name,
    title,
    coins,
    isYou = false,
    isFirst = false,
    isSecond = false,
    isThird = false,
    medalImage = "/medalla.png",
    userImage = "/user.png"
}) => {
    const isMobile = useMediaQuery("(max-width: 768px)");
    const isTablet = useMediaQuery("(min-width: 769px) and (max-width: 1024px)");

    // Escalas según la posición y dispositivo
    const getScale = () => {
        if (isMobile) {
            if (isFirst) return "scale(1)";
            if (isSecond) return "scale(0.95)";
            if (isThird) return "scale(0.9)";
            return "scale(1)";
        }
        if (isFirst) return "scale(1.2)";
        if (isSecond) return "scale(1.1)";
        if (isThird) return "scale(1)";
        return "scale(1)";
    };

    // Tamaños según dispositivo
    const getSizes = () => {
        if (isMobile) {
            return {
                avatarSize: "70px",
                fontSize: "14px",
                padding: "0.8rem 1rem",
                medalSize: "22px",
                gap: "6px"
            };
        }
        if (isTablet) {
            return {
                avatarSize: "85px",
                fontSize: "16px",
                padding: "1rem 1.5rem",
                medalSize: "26px",
                gap: "8px"
            };
        }
        return {
            avatarSize: "100px",
            fontSize: "20px",
            padding: "1rem 2rem",
            medalSize: "30px",
            gap: "10px"
        };
    };

    const sizes = getSizes();

    return (
        <div
            style={{
                boxShadow: "0px 1px 3px 1px #00000026",
                backgroundColor: isYou ? "#FFF8E1" : "#FFFFFF", // Resaltar al usuario
                padding: sizes.padding,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: "24px",
                gap: sizes.gap,
                zIndex: 100,
                color: "black",
                transform: getScale(),
                transition: "all 0.3s ease",
                width: isMobile ? "100%" : "auto",
                maxWidth: isMobile ? "200px" : "none",
                border: isYou ? "3px solid #FFD700" : "none", // Borde dorado para el usuario
                position: "relative",
                order: isMobile ? (isSecond ? -1 : 0) : 0,
            }}
        >
            {/* Indicador de posición en mobile */}
            {isMobile && (
                <div style={{
                    position: "absolute",
                    top: "-10px",
                    right: "-10px",
                    backgroundColor: isFirst ? "#FFD700" : isSecond ? "#C0C0C0" : "#CD7F32",
                    color: "white",
                    borderRadius: "50%",
                    width: "28px",
                    height: "28px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "14px",
                    fontWeight: "bold",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.2)"
                }}>
                    {isFirst ? "1" : isSecond ? "2" : "3"}
                </div>
            )}

            <div
                style={{
                    position: "relative",
                    borderRadius: "100%",
                    backgroundImage: `url(${userImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: sizes.avatarSize,
                    height: sizes.avatarSize,
                    backgroundColor: "#FFDB54",
                    border: isYou ? "3px solid #FFD700" : "none",
                }}
            >
                <img
                    src={medalImage}
                    alt="medalla"
                    style={{
                        position: "absolute",
                        bottom: 0,
                        right: 0,
                        width: sizes.medalSize,
                        height: sizes.medalSize,
                    }}
                />
            </div>

            <h2 style={{
                fontSize: sizes.fontSize,
                fontWeight: "600",
                margin: 0,
                textAlign: "center"
            }}>
                {name} {isYou && "⭐"}
            </h2>
            <p style={{
                fontSize: `calc(${sizes.fontSize} - 4px)`,
                fontWeight: 400,
                margin: 0,
                textAlign: "center"
            }}>
                {title}
            </p>
            <span style={{
                fontSize: `calc(${sizes.fontSize} - 4px)`,
                fontWeight: 400,
                margin: 0,
                textAlign: "center",
                color: "#52C5FE"
            }}>
                {coins} Monedas+
            </span>
        </div>
    );
};

// Componente principal del podio
const PodioUsuarios = () => {
    const isMobile = useMediaQuery("(max-width: 768px)");

    return (
        <div
            style={{
                display: "flex",
                alignItems: isMobile ? "center" : "flex-end",
                justifyContent: isMobile ? "center" : "space-around",
                width: "100%",
                gap: isMobile ? "16px" : "30px",
                flexDirection: isMobile ? "column" : "row",
                padding: isMobile ? "1rem 0.5rem" : "0",
                minHeight: isMobile ? "auto" : "300px",
            }}
        >
            {/* Segundo puesto (izquierda en desktop, arriba en mobile) */}
            <UserCard
                name="Juanok"
                title="As de la Suma"
                coins="93.499,38"
                isSecond={true}
                userImage="/user.png"
                medalImage="/medalla.png"
            />

            {/* Primer puesto (centro, más grande) */}
            <UserCard
                name="John Doe (tú)"
                title="Mente Matemática"
                coins="93.499,38"
                isFirst={true}
                isYou={true}
                userImage="/user.png"
                medalImage="/medalla.png"
            />

            {/* Tercer puesto (derecha en desktop, abajo en mobile) */}
            <UserCard
                name="Marta"
                title="Ninja Calculador"
                coins="93.499,38"
                isThird={true}
                userImage="/user.png"
                medalImage="/medalla.png"
            />
        </div>
    );
};