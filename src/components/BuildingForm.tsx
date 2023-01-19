import React, { useContext } from "react";
import StoreContext from "../context/StoreContext";
import Button from "./Button";
import Input from "./reusable/Input";

type Props = {};

const BuildingForm = (props: Props) => {
  const { addBuilding } = useContext(StoreContext);
  const [file, setfile] = React.useState<string | ArrayBuffer | null>();
  const [photoFile, setPhotoFile] = React.useState<File | null>(null);

  const [building, setBuilding] = React.useState({
    name: "",
    address: "",
    floors: 0,
    description: "",
    image: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBuilding({ ...building, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", building.name);
    formData.append("address", building.address);
    formData.append("floors", building.floors + "");
    formData.append("description", building.description);
    const photoToBlob = new Blob([photoFile || ""], { type: "image/jpeg" });
    formData.append("picture", photoToBlob);
    addBuilding(formData);
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
      className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800 space-y-2"
      onSubmit={handleSubmit}
    >
      <Input
        label={"Name"}
        placeholder={"Name of building"}
        name={"name"}
        type={"text"}
        value={building.name}
        onChange={handleChange}
        required={true}
      />
      <Input
        label={"Address"}
        placeholder={"Address of building"}
        name={"address"}
        type={"text"}
        value={building.address}
        onChange={handleChange}
        required={true}
      />
      <Input
        label={"Floors"}
        placeholder={"Number of Building floors"}
        name={"floors"}
        type={"number"}
        value={building.floors + ""}
        onChange={handleChange}
        required={true}
      />
      <Input
        label={"Description"}
        placeholder={"Description of building"}
        name={"description"}
        type={"text"}
        value={building.description}
        onChange={handleChange}
        required={true}
      />
      <Input
        label={"Image"}
        placeholder={"Image of building"}
        name={"image"}
        type={"file"}
        required={true}
        onChange={handleFile}
      />

      {file && <img className="h-32" src={file as string} alt="building" />}

      <Button type="submit" className="mt-4">
        Submit
      </Button>
    </form>
  );
};

export default BuildingForm;
