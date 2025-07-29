import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import "@testing-library/jest-dom";

import TodoList from "../TodoList";
import type { Task } from "../../types/Task";

describe("TodoList", () => {
  const mockTaks: Task[] = [
    { id: 1, text: "Estudar React", completed: false },
    { id: 2, text: "Estudar TypeScript", completed: false },
  ];

  const mockOnToggle = vi.fn();
  const mockOnEdit = vi.fn();
  const mockOnDelete = vi.fn();

  it("render list", () => {
    render(
      <TodoList
        tasks={mockTaks}
        onToggle={mockOnToggle}
        onEdit={mockOnEdit}
        onDelete={mockOnDelete}
      />
    );

    expect(screen.getByText("Estudar React")).toBeInTheDocument();
    expect(screen.getByText("Estudar TypeScript")).toBeInTheDocument();
  });
});
