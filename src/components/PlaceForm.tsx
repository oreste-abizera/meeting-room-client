import React, { useContext, useEffect } from "react";
import StoreContext from "../context/StoreContext";
import { Place } from "../types";
import Button from "./Button";
import Input from "./reusable/Input";

type Props = {
  buildingId: string;
  edit?: boolean;
  currentPlace?: Place;
  placeId?: string;
};

const PlaceForm = ({ buildingId, edit, currentPlace, placeId }: Props) => {
  const { addPlace, editPlace, store } = useContext(StoreContext);
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
    if (!edit) {
      const photoToBlob = new Blob([photoFile || ""], { type: "image/jpeg" });
      formData.append("picture", photoToBlob);
      addPlace(formData);
    } else {
      editPlace(placeId || "", formData);
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
    if (edit && currentPlace) {
      setPlace({
        name: currentPlace.name as string,
        location: currentPlace.location as string,
        floor: currentPlace.floor as number,
        description: currentPlace.description as string,
      });
    }
  }, [currentPlace, edit]);

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
      {!edit && (
        <Input
          label={"Image"}
          placeholder={"Image of place"}
          name={"image"}
          type={"file"}
          required={true}
          onChange={handleFile}
        />
      )}

      {file && <img className="h-32" src={file as string} alt="place" />}

      <Button type="submit" className="mt-4" disabled={store?.isLoading}>
        {store?.isLoading ? "Wait..." : edit ? "Save Changes" : "Add"}
      </Button>
    </form>
  );
};

export default PlaceForm;
