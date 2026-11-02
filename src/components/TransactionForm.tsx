import { useState } from "react";
import type { Transaction } from "./types";

type Props = {
    onAdd: (t: Omit<Transaction, "id">) => void;
}

export default function TransactionForm({ onAdd }: Props) {
  const [type, setType] = useState<Transaction["type"]>("expense");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState(() => new Date().toISOString().slice(0, 10));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const value = parseFloat(amount.replace(",", "."));
    if (isNaN(value) || !description.trim()) return;

    onAdd({
      type,
      amount: value,
      description: description.trim(),
      category: category.trim(),
      date,
    });

    setAmount("");
    setDescription("");
    setCategory("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <select value={type} onChange={(e) => setType(e.target.value as Transaction["type"])}>
        <option value="expense">Meno</option>
        <option value="income">Tulo</option>
      </select>

      <input
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Summa"
        inputMode="decimal"
      />

      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Kuvaus"
      />

      <input
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Kategoria"
      />

      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />

      <button type="submit">Lisää</button>
    </form>
  );
}