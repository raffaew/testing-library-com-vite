import type { Task } from "../types/Task";
import { useState } from "react";
import "./TodoItem.scss";
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
          <div className="buttons">
            <button className="complete-save" onClick={handleSave}>
              Salvar
            </button>
            <button
              className="delete-cancel"
              onClick={() => setIsEditing(false)}
            >
              Cancelar
            </button>
          </div>
        </>
      ) : (
        <>
          <span
            style={{
              textDecoration: task.completed ? "line-through" : "none",
              marginRight: "10px",
            }}
            title={task.text}
          >
            {task.text}
          </span>
          <div className="buttons">
            <button className="complete-save" onClick={() => onToggle(task.id)}>
              {task.completed ? "Desfazer" : "Concluir"}
            </button>
            <button className="edit" onClick={() => setIsEditing(true)}>
              Editar
            </button>
            <button className="delete-cancel" onClick={() => onDelete(task.id)}>
              Excluir
            </button>
          </div>
        </>
      )}
    </li>
  );
}
