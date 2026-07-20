import { useMediaQuery } from "../../../hooks/useMediaQuery";
import { useAuth } from "../../../context/AuthContext";

// ============= HEADER SECTION =============
const HeaderSection = () => {
    const isMobile = useMediaQuery("(max-width: 768px)");
    const isTablet = useMediaQuery("(min-width: 769px) and (max-width: 1024px)");
    const { profile } = useAuth();

    const KPIs = [
        { title: "Racha", value: profile?.racha ?? 0, icon: "kpis/streak.png" },
        { title: "Monedas", value: profile?.tokens ?? 0, icon: "kpis/coin.png" },
        { title: "Trofeos", value: 0, icon: "kpis/cup.png" },
        { title: "Experiencia", value: profile?.puntos ?? 0, icon: "kpis/experience.png" },
    ];

    // Tamaños responsive
    const getSizes = () => {
        if (isMobile) {
            return {
                titleSize: "1.2rem",
                padding: "0.5rem 0.8rem",
                kpiHeight: "60px",
                kpiPadding: "6px",
                iconSize: "20px",
                valueSize: "18px",
                progressHeight: "70px",
                gap: "6px",
                fontSize: "10px",
            };
        }
        if (isTablet) {
            return {
                titleSize: "1.8rem",
                padding: "0.5rem 2rem",
                kpiHeight: "85px",
                kpiPadding: "10px",
                iconSize: "35px",
                valueSize: "28px",
                progressHeight: "95px",
                gap: "10px",
                fontSize: "13px",
            };
        }
        return {
            titleSize: "2.5rem",
            padding: "0.5rem 5rem",
            kpiHeight: "110px",
            kpiPadding: "12px",
            iconSize: "50px",
            valueSize: "40px",
            progressHeight: "110px",
            gap: "16px",
            fontSize: "16px",
        };
    };

    const sizes = getSizes();

    return (
        <div style={{
            width: "100%",
            padding: sizes.padding,
            gap: "0.5rem",
            backgroundColor: "transparent",
            borderRadius: "16px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
            border: "1px solid rgba(255,255,255,0.2)",
            height: "400px !important",
        }}
            className="d-flex flex-column align-items-start justify-content-start"
        >
            <h4 className="text-black" style={{
                fontWeight: "bold",
                fontSize: sizes.titleSize,
                marginBottom: "0.5rem"
            }}>
                Números Básicos
            </h4>

            <div className="d-flex align-items-center justify-content-start gap-2" style={{
                width: "100%",
                height: "auto",
                flexWrap: isMobile ? "wrap" : "nowrap",
            }}>
                <div className="d-flex align-items-center justify-content-start gap-2" style={{
                    flex: 1,
                    flexWrap: isMobile ? "wrap" : "nowrap",
                    width: "100%",
                }}>
                    {/* Barra de Progreso */}
                    <div className="d-flex flex-column align-items-center justify-content-between" style={{
                        width: isMobile ? "100%" : "200px",
                        minHeight: sizes.progressHeight,
                        backgroundColor: "white",
                        borderRadius: "10px",
                        padding: sizes.kpiPadding,
                        flex: isMobile ? "0 0 100%" : 1,
                        border: "1px solid #E2E8F0",
                    }}>
                        <div className="icon" style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: isMobile ? "0.5rem" : "1rem",
                            width: "100%"
                        }}>
                            <img
                                src={"/kpis/star.png"}
                                alt={"Progreso"}
                                style={{
                                    width: isMobile ? "24px" : "50px",
                                    height: isMobile ? "24px" : "50px"
                                }}
                            />
                            <div style={{
                                height: "100%",
                                width: isMobile ? "3px" : "4px",
                                backgroundColor: "#FFDB54",
                                borderRadius: "2px"
                            }} />
                            <div style={{
                                height: isMobile ? "6px" : "8px",
                                borderRadius: "20px",
                                backgroundColor: "#E2E8F0",
                                flex: 1,
                                position: "relative",
                                overflow: "hidden",
                            }}>
                                <div style={{
                                    width: "45%",
                                    height: "100%",
                                    backgroundColor: "#FFDB54",
                                    borderRadius: "20px",
                                    transition: "width 0.5s ease",
                                }} />
                            </div>
                        </div>
                        <span className="text-black" style={{
                            fontSize: sizes.fontSize,
                            fontWeight: 400
                        }}>
                            Progreso 45%
                        </span>
                    </div>

                    {/* KPIs */}
                    <div className="d-flex align-items-center justify-content-between gap-2" style={{
                        flex: 1,
                        flexWrap: isMobile ? "wrap" : "nowrap",
                        width: "100%",
                    }}>
                        {KPIs.map((kpi, index) => (
                            <CardKPI
                                key={index}
                                title={kpi.title}
                                value={kpi.value}
                                icon={kpi.icon}
                                isMobile={isMobile}
                                sizes={sizes}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

// ============= CARD KPI =============
const CardKPI = ({ title, value, icon, isMobile, sizes }) => {
    return (
        <div className="d-flex flex-column align-items-center justify-content-between" style={{
            minWidth: isMobile ? "55px" : "150px",
            minHeight: isMobile ? "55px" : sizes.kpiHeight,
            backgroundColor: "white",
            borderRadius: "10px",
            padding: isMobile ? "5px" : sizes.kpiPadding,
            flex: 1,
            boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            border: "1px solid #E2E8F0",
            transition: "all 0.2s ease",
        }}
            onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#F8FAFC";
                e.currentTarget.style.transform = "scale(1.02)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "white";
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.06)";
            }}
        >
            <div className="icon" style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: isMobile ? "0.25rem" : "1rem",
                width: "100%"
            }}>
                <img
                    src={icon}
                    alt={title}
                    style={{
                        width: isMobile ? "18px" : sizes.iconSize,
                        height: isMobile ? "18px" : sizes.iconSize
                    }}
                />
                <div className="text">
                    <p className="text-black" style={{
                        fontSize: isMobile ? "14px" : sizes.valueSize,
                        margin: 0,
                        fontWeight: 700,
                    }}>
                        {value}
                    </p>
                </div>
            </div>
            <span className="text-black" style={{
                fontSize: isMobile ? "8px" : sizes.fontSize,
                fontWeight: 400,
                textAlign: "center",
                color: "#64748B",
            }}>
                {title}
            </span>
        </div>
    );
};

export default HeaderSection;