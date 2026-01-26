import { useLocation, useNavigate } from "react-router-dom";
import "./style.css";

type ResultSection = Record<string, string | number>;

type SimulationResponse = {
  allowed: boolean;
  message: string;
  inputs: ResultSection;
  indices: ResultSection;
  results: ResultSection;
};

export function Analyzes() {
  const location = useLocation();
  const navigate = useNavigate();

  const data = location.state as SimulationResponse;

  if (!data) {
    return (
      <div className="analyzes-container">
        <h2>Nenhum resultado disponível.</h2>
        <button className="back-btn" onClick={() => navigate("/")}>
          Voltar
        </button>
      </div>
    );
  }

  const formatKey = (key: string) => {
    return key.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
  };

  const renderList = (obj: ResultSection) => {
    if (!obj) return <p>Sem dados.</p>;
    return (
      <ul className="data-list">
        {Object.entries(obj).map(([key, value]) => (
          <li key={key}>
            <span className="label">{formatKey(key)}:</span>
            <span className="value">{String(value)}</span>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="analyzes-container">
      <div className={`status-banner ${data.allowed ? "success" : "error"}`}>
        <h1>{data.allowed ? "Viável" : "Inviável"}</h1>
        <p>{data.message}</p>
      </div>

      <div className="grid-container">
        <div className="card results-card">
          <h3>Resultados Finais</h3>
          {renderList(data.results)}
        </div>

        <div className="card indices-card">
          <h3>Índices Urbanísticos</h3>
          {renderList(data.indices)}
        </div>

        <div className="card inputs-card">
          <h3>Dados de Entrada</h3>
          {renderList(data.inputs)}
        </div>
      </div>

      <button className="new-simulation-btn" onClick={() => navigate("/")}>
        Nova Simulação
      </button>
    </div>
  );
}
