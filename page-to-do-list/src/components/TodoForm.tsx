import { useState } from 'react';
import type { FormEvent } from 'react';

interface Props {
  onAdd: (text: string) => void;
}

export default function TodoForm({ onAdd }: Props) {
  const [text, setText] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text.trim());
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task">Adicione uma tarefa</label>
      <input
        id="task"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Digite aqui..."
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}
