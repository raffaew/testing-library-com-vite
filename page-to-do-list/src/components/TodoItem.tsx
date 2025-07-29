import type { Task } from '../types/Task';
import { useState } from 'react';

interface Props {
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number, newText: string) => void;
}

export default function TodoItem({ task, onToggle, onDelete, onEdit }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const handleSave = () => {
    if (!editedText.trim()) return;
    onEdit(task.id, editedText.trim());
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <button onClick={handleSave}>Salvar</button>
          <button onClick={() => setIsEditing(false)}>Cancelar</button>
        </>
      ) : (
        <>
          <span
            style={{
              textDecoration: task.completed ? 'line-through' : 'none',
              marginRight: '10px',
            }}
          >
            {task.text}
          </span>
          <button onClick={() => onToggle(task.id)}>{task.completed ? 'Desfazer' : 'Concluir'}</button>
          <button onClick={() => setIsEditing(true)}>Editar</button>
          <button onClick={() => onDelete(task.id)}>Excluir</button>
        </>
      )}
    </li>
  );
}
