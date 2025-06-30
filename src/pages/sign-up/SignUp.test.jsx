import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import SignUp from ".";

const onClickHandlerMock = vi.fn();

describe('Sign Up Page', () => {
  it('renders fields correctly', () => {
    render(<SignUp onClickHandler={onClickHandlerMock} />);

    expect(screen.getByPlaceholderText(/first name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/e-mail/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
  });

  it('password field hides what is being typed', () => {
    render(<SignUp onClickHandler={onClickHandlerMock} />);
    expect(screen.getByPlaceholderText(/password/i)).toHaveAttribute('type', 'password');
  });

  it.todo('validates first name is filled');

  it.todo('validates email has the correct format');

  it.todo('enables next when all fields are properly filled');
})