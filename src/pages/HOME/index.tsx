import { SimulationForm } from "../../components/SimulationForm";
import "./style.css";

export function Home() {
  return (
    <div className="home-container">
      <div className="hero-wrapper">
        <div className="hero-text">
          <h1>
            Descubra o potencial
            <br />
            do seu terreno.
          </h1>
          <p>
            Análise automática de viabilidade urbanística. Simples, rápido e
            preciso.
          </p>
        </div>

        <div className="hero-form-container">
          <SimulationForm btnText="Calcular Agora" />
        </div>
      </div>
    </div>
  );
}
