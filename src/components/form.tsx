import React from "react";

interface FormDataProps {
  name: string;
  species: string;
  favFoods: string[];
  birthYear: number;
  onChangeName: (value: string) => void;
  onChangeSpecies: (value: string) => void;
  onChangeFavFoods: (value: string[]) => void;
  onChangeBirthYear: (value: number) => void;
}

const Form: React.FC<FormDataProps> = ({
  name,
  species,
  favFoods,
  birthYear,
  onChangeName,
  onChangeSpecies,
  onChangeFavFoods,
  onChangeBirthYear,
}) => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <h3 className="form__title">Add your cat</h3>
      <form className="form-wrapper" onSubmit={handleSubmit}>
        <label>Cat Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => onChangeName(e.target.value)}
        ></input>
        <br />
        <label>Species:</label>
        <input
          type="text"
          value={species}
          onChange={(e) => onChangeSpecies(e.target.value)}
        ></input>
        <label>FavFoods:</label>
        <input
          type="text"
          value={favFoods}
          onChange={(e) => onChangeFavFoods([e.target.value])}
        ></input>
        <label>BirthYear:</label>
        <input
          type="number"
          value={birthYear}
          onChange={(e) => onChangeBirthYear(parseInt(e.target.value))}
        ></input>
        <button type="submit">Save</button>
      </form>
    </>
  );
};

export default Form;
