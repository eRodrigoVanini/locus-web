import style from "./SimulationForm.module.css";
import Select from "./Select";
import SubmitButton from "./SubmitButton";
import Input from "./Input";

type SimulationFormProps = {
  btnText: string;
};

export function SimulationForm({ btnText }: SimulationFormProps) {
  return (
    <div className={style.simulationCard}>
      <form>
        <div className={style.formHeader}>
          <h3>Simular Viabilidade</h3>
        </div>

        <Select
          name="citySelect"
          text="Selecione o Município"
          options={[]}
          handleOnChange={() => {}}
          value=""
        />

        <Select
          name="citySelect"
          text="Selecione a Zona"
          options={[]}
          handleOnChange={() => {}}
          value=""
        />

        <Select
          name="citySelect"
          text="Selecione o Tipo de Uso"
          options={[]}
          handleOnChange={() => {}}
          value=""
        />

        <Input text="Área do Lote (m²)" name="lotArea" value="" />

        <SubmitButton text={btnText} />
      </form>
    </div>
  );
}
