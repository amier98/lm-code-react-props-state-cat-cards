import "./App.css";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Footer from "./components/footer";
import { useEffect, useState } from "react";
import Cat from "../src/data/cat";
import Dog from "./data/dog";
import Card from "./components/card";
import { v4 as uuidv4 } from "uuid";
import Form from "./components/form";

const catData: Array<Cat> = [
  {
    name: "Little Miss Purrfect",
    species: "Cat",
    favFoods: ["wet food", "dry food"],
    birthYear: 2016,
  },
  {
    name: "Mr Gwumpy",
    species: "Cat",
    favFoods: ["caviar"],
    birthYear: 2016,
  },
  {
    name: "Dopey",
    species: "Cat",
    favFoods: ["bugs"],
    birthYear: 2018,
  },
  {
    name: "Jumpy",
    species: "Scaredy Cat",
    favFoods: ["not cucumbers!"],
    birthYear: 2008,
  },
  {
    name: "Meowsalot",
    species: "Cat",
    favFoods: ["tuna", "catnip", "celery"],
    birthYear: 2012,
  },
  {
    name: "Cindy Clawford",
    species: "Cat",
    favFoods: ["mice"],
    birthYear: 2012,
  },
  {
    name: "Katy Purry",
    species: "Cat",
    favFoods: ["cigarettes", "coffee"],
    birthYear: 2015,
  },
  {
    name: "Dr. Von Belly-Rub",
    species: "Cat",
    favFoods: ["salt"],
    birthYear: 2020,
  },
  {
    name: "Blobby",
    species: "Bird?",
    favFoods: ["your soul"],
    birthYear: 2020,
  },
  {
    name: "El Taco",
    species: "Cat",
    favFoods: ["tequila", "bar snax"],
    birthYear: 1995,
  },
  {
    name: "Nibbles",
    species: "Hungry Cat",
    favFoods: ["blankets", "feet", "tinsel"],
    birthYear: 2003,
  },
  {
    name: "BoopySnoot",
    species: "Tiny Cat",
    favFoods: ["milk"],
    birthYear: 2021,
  },
  {
    name: "Captain Catface",
    species: "Sea Cattain",
    favFoods: ["fish, rum"],
    birthYear: 2016,
  },
];

const dogData: Array<Dog> = [
  {
    name: "Floofus",
    species: "Puppy",
    favFoods: ["marshmallows"],
    birthYear: 2020,
  },
  {
    name: "Doofus",
    species: "Doggo",
    favFoods: ["porridge, dog food"],
    birthYear: 2010,
  },
  {
    name: "Goofus",
    species: "Dog",
    favFoods: ["bouncy balls"],
    birthYear: 2015,
  },
];

dogData.forEach((dog) => (dog.id = uuidv4()));

catData.forEach((cat) => (cat.id = uuidv4()));

function App(): JSX.Element {
  // JavaScript/TypeScript code can be inserted here!

  const [cats, setCats] = useState<Array<Cat>>(catData);

  const [dogs, setDogs] = useState<Array<Dog>>(dogData);

  const [saveName, setSaveName] = useState("");

  const [saveSpecies, setSaveSpecies] = useState("");

  const [saveFavFoods, setFavFoods] = useState<string[]>([]);

  const [saveBirthYear, setBirthYear] = useState(0);

  const catNum = cats.length;
  const dogNum = dogData.length;
  //i need to connect this to whenever the form is submitted
  useEffect(() => {
    setCats([
      ...cats,
      {
        name: saveName,
        species: saveSpecies,
        favFoods: saveFavFoods,
        birthYear: saveBirthYear,
      },
    ]);
  }, []);

  console.log(cats);

  return (
    <>
      <Navbar />
      <Header catNumber={catNum} dogNumber={dogNum} />

      <main>
        <div className="cards__wrapper">
          {cats.map((cat, index) => (
            <Card
              key={cat.id}
              name={cat.name}
              species={cat.species}
              favFoods={cat.favFoods}
              birthYear={cat.birthYear}
              indexNumber={index}
            />
          ))}
          {dogs.map((dog, index) => (
            <Card
              key={dog.id}
              name={dog.name}
              species={dog.species}
              favFoods={dog.favFoods}
              birthYear={dog.birthYear}
              indexNumber={index}
            />
          ))}
        </div>
      </main>
      <Form
        name={saveName}
        onChangeName={(value) => setSaveName(value)}
        species={saveSpecies}
        onChangeSpecies={(value) => setSaveSpecies(value)}
        favFoods={saveFavFoods}
        onChangeFavFoods={(value) => setFavFoods(value)}
        birthYear={saveBirthYear}
        onChangeBirthYear={(value) => setBirthYear(value)}
      />
      <Footer />
    </>
  );
}

export default App;
