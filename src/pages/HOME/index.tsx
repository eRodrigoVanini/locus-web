import { SimulationForm } from "../../components/SimulationForm";
import "./style.css";

export function Home() {
  function handleSimulationSubmit(lotData: any) {
    if (!lotData.cityId || !lotData.area) {
      alert("Preencha todos os campos!");
      return;
    }

    const payload = {
      ...lotData, // Espalha os dados (cityId, zoneId, etc.)
    };

    fetch("http://localhost:3000/simulations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload), // Envia o objeto montado
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Sucesso:", data);
        alert("Simulação salva com sucesso!");
      })
      .catch((error) => console.error("Erro:", error));
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
