import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import "@testing-library/jest-dom";

import TodoItem from "../TodoItem";
import type { Task } from "../../types/Task";

describe("TodoItem", () => {
  const mockTask: Task = {
    id: 1,
    text: "Estudar React",
    completed: false,
  };

  const mockOnToggle = vi.fn();
  const mockOnDelete = vi.fn();
  const mockOnEdit = vi.fn();

  const setup = () => {
    render(
      <TodoItem
        task={mockTask}
        onToggle={mockOnToggle}
        onDelete={mockOnDelete}
        onEdit={mockOnEdit}
      />
    );
  };

  it("render default task", () => {
    setup();
 
    expect(screen.getByText("Estudar React")).toBeInTheDocument();
  });

  it("function onToggle", async () => {
    setup();
    const concludeButton = screen.getByRole("button", { name: "Concluir" });
    await userEvent.click(concludeButton);
    expect(mockOnToggle).toHaveBeenCalledWith(mockTask.id);
  });

  it('function onDelete', async () => {
    setup();
    expect(screen.getByRole("button", { name: "Excluir"})).toBeInTheDocument();
    await userEvent.click(screen.getByRole("button", { name: "Excluir"}));
    expect(mockOnDelete).toHaveBeenCalledWith(mockTask.id);
  })

  it("render edit", async () => {
    setup();
    expect(screen.getByRole("button", { name: "Editar"})).toBeInTheDocument();
    await userEvent.click(screen.getByRole("button", { name: "Editar"}))
    
    expect(screen.getByDisplayValue("Estudar React")).toBeInTheDocument();
    expect(screen.getByRole("button", {name: "Salvar"})).toBeInTheDocument();
    expect(screen.getByRole("button", {name: "Cancelar"})).toBeInTheDocument();
  
  })

  it("function edit" , async () => {
    setup();
    const editButton = screen.getByRole('button', { name: 'Editar'});
    await userEvent.click(editButton);
    const editInput = screen.getByDisplayValue('Estudar React');
    await userEvent.clear(editInput);
    await userEvent.type(editInput, 'Estudar Vitest');
    const saveButton = screen.getByRole('button', { name: 'Salvar'});
    await userEvent.click(saveButton);
    expect(mockOnEdit).toHaveBeenCalledWith(1, 'Estudar Vitest');
  })
});