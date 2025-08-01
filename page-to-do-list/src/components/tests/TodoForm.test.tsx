import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import TodoForm from "../TodoForm";

describe("TodoForm", () => {
  it("render input", async () => {
    const user = userEvent.setup();
    const mockOnAdd = vi.fn();

    render(<TodoForm onAdd={mockOnAdd} />);

    // Veja o DOM renderizado
    //screen.debug();

    const input = screen.getByLabelText(/adicione uma tarefa/i);
    const button = screen.getByRole("button", { name: /adicionar/i });

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();

    await user.type(input, "Estudar React");
    await user.click(button);

    expect(mockOnAdd).toHaveBeenCalledTimes(1);
    expect(mockOnAdd).toHaveBeenCalledWith("Estudar React");

    expect(input).toHaveValue("");
  });

  it('validate empty fields before onadd function', async () => {
    const user = userEvent.setup();
    const mockOnAdd = vi.fn();

    render(<TodoForm onAdd={mockOnAdd} />);

    const input = screen.getByPlaceholderText("O que você precisa fazer hoje?");
    const button = screen.getByRole('button', { name: /adicionar/i });

    await user.type(input, ' ');
    await user.click(button);

    expect(mockOnAdd).not.toHaveBeenCalled();
  });
});
