import React, { useContext, useEffect } from "react";
import StoreContext from "../context/StoreContext";
import { Building } from "../types";
import Button from "./Button";
import Input from "./reusable/Input";

type Props = {
  edit?: boolean;
  id?: string;
  building?: Building;
};

const BuildingForm = ({ edit, id, building: currentBuilding }: Props) => {
  const { addBuilding, editBuilding, store } = useContext(StoreContext);
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
    if (!edit) {
      const photoToBlob = new Blob([photoFile || ""], { type: "image/jpeg" });
      formData.append("picture", photoToBlob);
      addBuilding(formData);
    } else {
      editBuilding(id || "", formData);
    }
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

  useEffect(() => {
    if (edit) {
      setBuilding({
        name: (currentBuilding?.name as string) || "",
        address: (currentBuilding?.address as string) || "",
        floors: (currentBuilding?.floors as number) || 0,
        description: (currentBuilding?.description as string) || "",
        image: "",
      });
    }
  }, [edit, currentBuilding]);

  return (
    <form
      className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md space-y-4"
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
      />
      {!edit && (
        <Input
          label={"Image"}
          placeholder={"Image of building"}
          name={"image"}
          type={"file"}
          required={true}
          onChange={handleFile}
        />
      )}

      {file && <img className="h-32" src={file as string} alt="building" />}

      <Button type="submit" className="mt-4" disabled={store?.isLoading}>
        {store?.isLoading ? "Wait..." : edit ? "Save Changes" : "Submit"}
      </Button>
    </form>
  );
};

export default BuildingForm;
