import { useState } from "react";
import axios from "axios";

const Publish = ({ token }) => {
  /*   const [user, setUser] = useState(""); */
  const [picture, setPicture] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [imgFromCloudinary, setImgFromCloudinary] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");

  return (
    <>
      <h2>Vends ton article</h2>
      <form
        className="post"
        onSubmit={async (event) => {
          event.preventDefault();
          try {
            const formData = new FormData();

            /*      formData.append("user", user); */
            formData.append("picture", picture);
            formData.append("title", title);
            formData.append("description", description);
            formData.append("price", price);
            formData.append("brand", brand);
            formData.append("condistion", condition);
            formData.append("city", city);
            formData.append("size", size);
            formData.append("color", color);

            const response = await axios.post(
              "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
              formData,

              {
                headers: {
                  Authorization: `Bearer ${token}`,
                  "Content-Type": "multipart/form-data",
                },
              }
            );
            console.log(formData);
            setImgFromCloudinary(response.data.secure_url);
          } catch (error) {
            console.log(error.message);
          }
        }}
      >
        <input
          type="file"
          onChange={(event) => {
            setPicture(event.target.files[0]);
          }}
        />
        <input
          type="text"
          placeholder="ex: Chemise Sézanne verte"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="ex: porté quelquefois, taille correctement"
          value={description}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />

        <input
          type="text"
          placeholder="ex: Zara"
          value={brand}
          onChange={(event) => {
            setBrand(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="ex: L / 40 / 12"
          value={size}
          onChange={(event) => {
            setSize(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="ex: Fushia"
          value={color}
          onChange={(event) => {
            setColor(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Neuf avec étiquettes"
          value={condition}
          onChange={(event) => {
            setCondition(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="ex: Paris"
          value={city}
          onChange={(event) => {
            setCity(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="0,00€"
          value={price}
          onChange={(event) => {
            setPrice(event.target.value);
          }}
        />
        <input type="checkbox" name="checkbox"></input>
        <input type="submit" value="Ajouter" />
      </form>
      {imgFromCloudinary && <img src={imgFromCloudinary} alt="" />}
    </>
  );
};

export default Publish;
