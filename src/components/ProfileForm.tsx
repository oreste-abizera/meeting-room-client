import React, { useContext, useEffect } from "react";
import StoreContext from "../context/StoreContext";
import Button from "./Button";
import Input from "./reusable/Input";
import avatar from "../static/images/avatar.png";
import { UserDTO } from "../types";

type Props = {};

const ProfileForm = (props: Props) => {
  const { changeProfile, getCurrentUser, store } = useContext(StoreContext);
  const [file, setfile] = React.useState<string | ArrayBuffer | null>();
  const [photoFile, setPhotoFile] = React.useState<File | null>(null);
  const [currentImage, setCurrentImage] = React.useState<string>("");

  const [profile, setprofile] = React.useState({
    firstName: "",
    lastName: "",
    companyName: "",
    country: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setprofile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("firstName", profile.firstName);
    formData.append("lastName", profile.lastName);
    formData.append("companyName", profile.companyName);
    formData.append("country", profile.country);
    if (photoFile) {
      const photoToBlob = new Blob([photoFile || ""], { type: "image/jpeg" });
      formData.append("picture", photoToBlob);
    }
    changeProfile(formData);
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
    getCurrentUser().then((res: UserDTO) => {
      setprofile({
        firstName: res.firstName as string,
        lastName: res.lastName as string,
        companyName: res.companyName as string,
        country: res.country as string,
      });
      setCurrentImage(res.profilePicture?.image_url as string);
    });
  }, []);

  return (
    <form
      className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md space-y-4 dark:bg-gray-800"
      onSubmit={handleSubmit}
    >
      <div className="border border-gray-200 rounded-md p-10">
        <div className="w-52 h-52 relative image-fit cursor-pointer mx-auto">
          <img
            className="rounded-md w-full h-full"
            alt=""
            src={(file as string) || currentImage || avatar}
          />
        </div>
        <div className="w-40 mx-auto cursor-pointer relative mt-5 flex flex-col items-center">
          <Button title="Change Photo" />
          <input
            type="file"
            className="w-full h-full top-0 left-0 absolute opacity-0 cursor-pointer"
            onChange={handleFile}
          />
        </div>
      </div>

      <Input
        label={"First Name"}
        placeholder={"First name"}
        name={"firstName"}
        type={"text"}
        value={profile.firstName}
        onChange={handleChange}
        required={true}
      />
      <Input
        label={"Last Name"}
        placeholder={"Last name"}
        name={"lastName"}
        type={"text"}
        value={profile.lastName}
        onChange={handleChange}
        required={true}
      />
      <Input
        label={"companyName"}
        placeholder={"Company name"}
        name={"companyName"}
        type={"text"}
        value={profile.companyName}
        onChange={handleChange}
      />

      <Button type="submit" className="mt-4" disabled={store?.isLoading}>
        {store?.isLoading ? "Wait..." : "Save"}
      </Button>
    </form>
  );
};

export default ProfileForm;
