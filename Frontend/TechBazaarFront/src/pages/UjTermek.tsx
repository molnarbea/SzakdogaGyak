import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router';

function UjTermek() {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e: FormEvent<HTMLFormElement>){
    e.preventDefault();
    alert(`A megadott termék : ${title}`)
    navigate("/admin")
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Termék neve: </label>
        <input
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label htmlFor="description">Leírás: </label>
        <textarea id="description" name="description" required rows={4} />

        <label htmlFor="color">Szín: </label>
        <input id="color" name="color" required />

        <label htmlFor="price">Ár (Ft): </label>
        <input id="price" name="price" type="number" min="1" step="1" required />

        <label htmlFor="condition_status">Állapot: </label>
        <select id="condition_status" name="condition_status" defaultValue="Factory New" required>
          <option value="Factory New">Újszerű</option>
          <option value="Minimal Wear">Kiváló</option>
          <option value="Field-Tested">Jó</option>
          <option value="Well-Worn">Használt</option>
          <option value="Battle-Scarred">Viseltes</option>
        </select>

        <button type="submit">Mentés</button>
      </form>
    </div>
  )
}

export default UjTermek