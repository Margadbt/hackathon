"use client";
import { useState } from "react";
import "./style.css";

function RequestForm() {
  const [purpose, setPurpose] = useState("клуб");
  const [description, setDescription] = useState("");
  const [people, setPeople] = useState(2);
  const [phoneNumber1, setPhoneNumber1] = useState("");
  const [phoneNumber2, setPhoneNumber2] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="request-form-card">
      <form onSubmit={handleSubmit}>
        <label htmlFor="purpose1">Ашиглах зорилго</label>
        <select
          className="form-attr"
          name="purpose"
          id="purpose1"
          value={purpose}
          onChange={(e) => setPurpose(e.target.value)}
          required
        >
          <option value="клуб">Клубын уулзалт</option>
          <option value="хурал">Хурал, цуглаан</option>
          <option value="сургалт">Сургалт, давтлага</option>
          <option value="хичээл">Хичээл хийх</option>
          <option value="чөлөөт">Урлагийн наадам</option>
        </select>
        <label htmlFor="description2">Нэмэлт тайлбар</label>
        <div>
          <textarea
            className="form-attr"
            id="description2"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            cols="50"
            rows="10"
            required
          ></textarea>
        </div>
        <div className="people">
          <label htmlFor="people1">Хэдэн хүн?</label>
          <div>
            <input
              className="form-attr"
              type="number"
              name="people"
              max="50"
              min="2"
              value={people}
              onChange={(e) => setPeople(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="phone-number1">
          <label htmlFor="phone-number1">Утас 1</label>
          <div>
            <input
              className="form-attr"
              type="tel"
              name="phone"
              pattern="[0-9]{4}-[0-9]{4}"
              value={phoneNumber1}
              onChange={(e) => setPhoneNumber1(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="phone-number2">
          <label htmlFor="phone-number2">Утас 2</label>
          <div>
            <input
              className="form-attr"
              type="tel"
              name="phone"
              pattern="[0-9]{4}-[0-9]{4}"
              value={phoneNumber2}
              onChange={(e) => setPhoneNumber2(e.target.value)}
              required
            />
          </div>
        </div>
        <button className="submit-button" type="submit">
          Захиалах
        </button>
      </form>
    </div>
  );
}

export default RequestForm;
