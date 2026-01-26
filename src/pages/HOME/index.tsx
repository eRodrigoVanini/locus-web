import {
  SimulationForm,
  type SimulationPayload,
} from "../../components/SimulationForm";
import "./style.css";

export function Home() {
  function handleSimulationSubmit(data: SimulationPayload) {
    fetch("http://localhost:3000/simulations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((respostaApi) => {
        console.log(respostaApi);
        alert("Sucesso!");
      })
      .catch((error) => console.error(error));
  }

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
          <SimulationForm
            btnText="Calcular Agora"
            handleSubmit={handleSimulationSubmit}
          />
        </div>
      </div>
    </div>
  );
}
