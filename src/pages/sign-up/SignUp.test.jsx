import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import SignUp from ".";

const onClickHandlerMock = vi.fn();

const emptyState = {
  name: '',
  email: '',
  password: ''
};

const correctlyFilledState = {
  name: 'leo',
  email: 'email@domain.com',
  password: '12345'
};

describe('Sign Up Page', () => {
  describe('empty state', () => {
    beforeEach(() => {
      render(<SignUp onClickHandler={onClickHandlerMock} userData={emptyState} />);
    });
  
    it('renders fields correctly', () => {
      expect(screen.getByPlaceholderText(/first name/i)).toBeInTheDocument();
      expect(screen.getByPlaceholderText(/e-mail/i)).toBeInTheDocument();
      expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
    });
  
    it('password field hides what is being typed', () => {
      expect(screen.getByPlaceholderText(/password/i)).toHaveAttribute('type', 'password');
    });
  });

  describe('filled state', () => {
    beforeEach(() => {
      render(<SignUp onClickHandler={onClickHandlerMock} userData={correctlyFilledState} />);
    });

    it('renders fields with values', () => {
      expect(screen.getByPlaceholderText(/first name/i)).toHaveValue(correctlyFilledState.name);
      expect(screen.getByPlaceholderText(/e-mail/i)).toHaveValue(correctlyFilledState.email);
      expect(screen.getByPlaceholderText(/password/i)).toHaveValue(correctlyFilledState.password);
    });
  });

  it.todo('validates first name is filled');

  it.todo('validates email has the correct format');

  it.todo('enables next when all fields are properly filled');
})