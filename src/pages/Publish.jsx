import { useState } from "react";
import axios from "axios";

const Publish = ({ token }) => {
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
      <div className="container">
        <h2>Vends ton article</h2>
        <form
          className="post"
          onSubmit={async (event) => {
            event.preventDefault();
            try {
              const formData = new FormData();
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
              setImgFromCloudinary(response.data.secure_url);
            } catch (error) {
              console.log(error.response);
            }
          }}
        >
          <div className="file-select">
            <div className="dashed-preview-without">
              <div className="input-design-default">
                <label htmlFor="filePicker" className="label-file">
                  + Ajoute une photo
                </label>
                <input
                  style={{ display: "none" }}
                  type="file"
                  className="input-file"
                  onChange={(event) => {
                    setPicture(event.target.files[0]);
                  }}
                />
              </div>
            </div>
          </div>

          <div className="text-input-section">
            <div className="text-input">
              <h4>Titre</h4>
              <input
                type="text"
                placeholder="ex: Chemise Sézanne verte"
                value={title}
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
              />
            </div>
            <div className="text-input">
              <h4>Décris ton article</h4>
              <input
                type="text"
                placeholder="ex: porté quelquefois, taille correctement"
                value={description}
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
              />
            </div>
          </div>
          <div className="text-input-section">
            <div className="text-input">
              <h4>Marque</h4>
              <input
                type="text"
                placeholder="ex: Zara"
                value={brand}
                onChange={(event) => {
                  setBrand(event.target.value);
                }}
              />
            </div>
            <div className="text-input">
              <h4>Taille</h4>
              <input
                type="text"
                placeholder="ex: L / 40 / 12"
                value={size}
                onChange={(event) => {
                  setSize(event.target.value);
                }}
              />
            </div>
            <div className="text-input">
              <h4>Couleur</h4>
              <input
                type="text"
                placeholder="ex: Fushia"
                value={color}
                onChange={(event) => {
                  setColor(event.target.value);
                }}
              />
            </div>
            <div className="text-input">
              <h4>Etat</h4>
              <input
                type="text"
                placeholder="Neuf avec étiquettes"
                value={condition}
                onChange={(event) => {
                  setCondition(event.target.value);
                }}
              />
            </div>
            <div className="text-input">
              <h4>Lieu</h4>
              <input
                type="text"
                placeholder="ex: Paris"
                value={city}
                onChange={(event) => {
                  setCity(event.target.value);
                }}
              />
            </div>
          </div>
          <div className="text-input-section">
            <div className="text-input">
              <h4>Prix</h4>
              <input
                type="text"
                placeholder="0,00€"
                value={price}
                onChange={(event) => {
                  setPrice(event.target.value);
                }}
              />{" "}
            </div>
            <div className="checkbox-input">
              <input type="checkbox" name="exchange"></input>
              <span>Je suis intéressé(e) par les échanges</span>
            </div>
          </div>
          <div className="form-button-div">
            <input type="submit" value="Ajouter" className="form-validation" />
          </div>
        </form>
      </div>
    </>
  );
};

export default Publish;
