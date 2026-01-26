import { useEffect, useState, type ComponentProps } from "react";
import style from "./SimulationForm.module.css";
import Select from "./Select";
import SubmitButton from "./SubmitButton";
import Input from "./Input";

export type SimulationPayload = {
  zone_id: string;
  use_type_id: string;
  lot_area: number;
};

type SimulationFormProps = Omit<ComponentProps<"form">, "onSubmit"> & {
  btnText: string;
  handleSubmit: (data: SimulationPayload) => void;
  results?: any;
};

type City = { id: string | number; name: string };
type Zone = { id: string | number; name: string };
type UseType = { id: string | number; name: string };

export function SimulationForm({ handleSubmit, btnText }: SimulationFormProps) {
  const [cities, setCities] = useState<City[]>([]);
  const [zones, setZones] = useState<Zone[]>([]);
  const [useTypes, setUseTypes] = useState<UseType[]>([]);

  const [selectedCity, setSelectedCity] = useState("");
  const [selectedZone, setSelectedZone] = useState("");
  const [selectedUseType, setSelectedUseType] = useState("");
  const [lotArea, setLotArea] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/cities")
      .then((res) => res.json())
      .then((data) => setCities(data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (selectedCity) {
      fetch("http://localhost:3000/zones")
        .then((res) => res.json())
        .then((data) => {
          setZones(data);
          setSelectedZone("");
          setUseTypes([]);
        })
        .catch((err) => console.error(err));
    } else {
      setZones([]);
    }
  }, [selectedCity]);

  useEffect(() => {
    if (selectedZone) {
      fetch("http://localhost:3000/useTypes")
        .then((res) => res.json())
        .then((data) => {
          setUseTypes(data);
          setSelectedUseType("");
        })
        .catch((err) => console.error(err));
    } else {
      setUseTypes([]);
    }
  }, [selectedZone]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedZone || !selectedUseType || !lotArea) {
      alert("Preencha todos os campos obrigatórios");
      return;
    }

    const payload: SimulationPayload = {
      zone_id: selectedZone,
      use_type_id: selectedUseType,
      lot_area: Number(lotArea),
    };

    handleSubmit(payload);
  };

  return (
    <div className={style.simulationCard}>
      <form onSubmit={submit}>
        <div className={style.formHeader}>
          <h3>Simular Viabilidade</h3>
        </div>

        <Select
          name="citySelect"
          text="Selecione o Município"
          options={cities}
          handleOnChange={(e) => setSelectedCity(e.target.value)}
          value={selectedCity}
        />

        <Select
          name="zoneSelect"
          text="Selecione a Zona"
          options={zones}
          handleOnChange={(e) => setSelectedZone(e.target.value)}
          value={selectedZone}
          disabled={!selectedCity}
        />

        <Select
          name="useTypeSelect"
          text="Selecione o Tipo de Uso"
          options={useTypes}
          handleOnChange={(e) => setSelectedUseType(e.target.value)}
          value={selectedUseType}
          disabled={!selectedZone}
        />

        <Input
          text="Área do Lote (m²)"
          name="lotArea"
          value={lotArea}
          handleOnChange={(e) => setLotArea(e.target.value)}
        />

        <SubmitButton text={btnText} />
      </form>
    </div>
  );
}
