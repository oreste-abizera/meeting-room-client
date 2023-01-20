import React, { useContext } from "react";
import StoreContext from "../context/StoreContext";
import Button from "./Button";
import Input from "./reusable/Input";

type Props = {
  buildingId: string;
};

const PlaceForm = ({ buildingId }: Props) => {
  const { addPlace } = useContext(StoreContext);
  const [file, setfile] = React.useState<string | ArrayBuffer | null>();
  const [photoFile, setPhotoFile] = React.useState<File | null>(null);

  const [place, setPlace] = React.useState({
    name: "",
    location: "",
    floor: 0,
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlace({ ...place, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", place.name);
    formData.append("location", place.location);
    formData.append("floor", place.floor + "");
    formData.append("description", place.description);
    formData.append("building", buildingId);
    const photoToBlob = new Blob([photoFile || ""], { type: "image/jpeg" });
    formData.append("picture", photoToBlob);
    addPlace(formData);
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    let tempFile = e.target.files?.item(0);
    setPhotoFile(tempFile || null);
    const reader = new FileReader();

    reader.addEventListener(
      "load",
      function () {
        setfile(reader.result);
      },
      false
    );

    if (tempFile) {
      reader.readAsDataURL(tempFile);
    }
  };

  return (
    <form
      className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md space-y-4"
      onSubmit={handleSubmit}
    >
      <Input
        label={"Name"}
        placeholder={"Name of place"}
        name={"name"}
        type={"text"}
        value={place.name}
        onChange={handleChange}
        required={true}
      />
      <Input
        label={"location"}
        placeholder={"location of place"}
        name={"location"}
        type={"text"}
        value={place.location}
        onChange={handleChange}
        required={true}
      />
      <Input
        label={"Floor"}
        placeholder={"Number of place floor"}
        name={"floor"}
        type={"number"}
        value={place.floor + ""}
        onChange={handleChange}
        required={true}
      />
      <Input
        label={"Description"}
        placeholder={"Description of place"}
        name={"description"}
        type={"text"}
        value={place.description}
        onChange={handleChange}
      />
      <Input
        label={"Image"}
        placeholder={"Image of place"}
        name={"image"}
        type={"file"}
        required={true}
        onChange={handleFile}
      />

      {file && <img className="h-32" src={file as string} alt="place" />}

      <Button type="submit" className="mt-4">
        Submit
      </Button>
    </form>
  );
};

export default PlaceForm;
