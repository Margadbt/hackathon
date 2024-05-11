"use client";
import { useState } from "react";
import "./style.css";

function EventForm() {
    const [image, setImage] = useState(null);
    const [name, setName] = useState("");
    const [when, setWhen] = useState("");
    const [where, setWhere] = useState("");
    const [description, setDescription] = useState("");
    const [organization, setOrginization] = useState("");


    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            "name": name,
            "date": when,
            "location": where,
            "description": description,
            "image_url": "oyuna",
            "organization": organization
        };
        async function postRequest(data){
            const response = await fetch("/api/event/create", {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                  
                },
                body: JSON.stringify(data)
              });
              return response
        }
        
        console.log(postRequest(data))

    };

    return (
        <div>
            <div className="EventFrom"><b>Үйл ажиллагааны бүртгэл</b></div>
            <div className="request-form-card">
                <form onSubmit={handleSubmit}>
                    <div className="column">
                        <label className="imgName" htmlFor="image">Зураг</label>
                        <label className="image" htmlFor="image">
                            Зураг сонгох
                            <input
                                type="file"
                                id="image"
                                name="image"
                                accept="image/*"
                                style={{ display: 'none' }} // Hide the default file input button
                                onChange={handleImageChange}
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="name1">Үйл ажиллагааны нэр</label>
                        <textarea
                            className="form-attr"
                            id="name1"
                            name="name1"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            cols="50"
                            rows="10"
                            required
                        ></textarea>
                         <label htmlFor="Bname1">Зохиож буй байгууллагын нэр</label>
                        <textarea
                            className="form-attr"
                            id="orginization1"
                            name="orginization1"
                            value={organization}
                            onChange={(e) => setOrginization(e.target.value)}
                            cols="50"
                            rows="10"
                            required
                        ></textarea>
                        <label htmlFor="description1">Үйл ажиллагааны талаар дэлгэрэнгүй тайлбар</label>
                        <textarea
                            className="form-attr"
                            id="description1"
                            name="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            cols="50"
                            rows="10"
                            required
                        ></textarea>

                        <label htmlFor="when2">Хэзээ</label>
                        <div>
                            <textarea
                                className="form-attr"
                                id="when2"
                                name="when"
                                value={when}
                                onChange={(e) => setWhen(e.target.value)}
                                cols="50"
                                required
                            ></textarea>
                        </div>
                        <div className="where">
                            <label htmlFor="where1">Хаана</label>
                            <div>
                                <input
                                    className="form-attr"
                                    name="where"
                                    value={where}
                                    onChange={(e) => setWhere(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <button className="submit-button" type="submit">
                        Бүртгүүлэх
                    </button>
                </form>
            </div>
        </div>
    );
}

export default EventForm;
