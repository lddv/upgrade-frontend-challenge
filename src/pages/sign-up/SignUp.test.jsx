import '@testing-library/jest-dom'
import { act, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import SignUp from "./SignUp";
import userEvent from '@testing-library/user-event';

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
  beforeEach(() => {
    vi.resetAllMocks();
  });

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

  it('validates first name is filled', async () => {
    const user = userEvent.setup();
    
    render(<SignUp onClickHandler={onClickHandlerMock} userData={emptyState} />);

    const nameInput = screen.getByPlaceholderText(/first name/i);
    const formElement = screen.getByRole('form');
    const nextButton = screen.getByText(/next/i);

    user.click(nextButton);

    expect(formElement.checkValidity()).toBe(false);

    await user.type(nameInput, 'leo');
    expect(nameInput).toHaveValue('leo');

    expect(formElement.checkValidity()).toBe(false);
    expect(nameInput.validity.valid).toBe(true);
  });

  it('validates email has the correct format', async () => {
    const user = userEvent.setup();
    
    render(<SignUp onClickHandler={onClickHandlerMock} userData={{ name: 'leo', email: '', password: '1234567890' }} />);

    const formElement = screen.getByRole('form');
    const emailInput = screen.getByPlaceholderText(/e-mail/i);
    const nextButton = screen.getByText(/next/i);

    user.click(nextButton);

    expect(formElement.checkValidity()).toBe(false);

    await user.type(emailInput, 'leo');

    expect(formElement.checkValidity()).toBe(false);
    expect(emailInput.validity.valid).toBe(false);
    
    await user.type(emailInput, '@upgrade');

    await act(() => user.click(nextButton)) 

    expect(formElement.checkValidity()).toBe(false);
    expect(emailInput.validity.valid).toBe(false);

    await user.type(emailInput, '.com');

    await act(() => user.click(nextButton));

    expect(formElement.checkValidity()).toBe(true);
    expect(emailInput.validity.valid).toBe(true);
    expect(onClickHandlerMock).toHaveBeenCalledOnce();
  });

  it('validates password has at least 8 chars', async () => {
    const user = userEvent.setup();
    
    render(<SignUp onClickHandler={onClickHandlerMock} userData={{ name: 'leo', email: 'leo@upgrade.com', password: '' }} />);

    const formElement = screen.getByRole('form');
    const password = screen.getByPlaceholderText(/password/i);
    const nextButton = screen.getByText(/next/i);

    user.click(nextButton);

    expect(formElement.checkValidity()).toBe(false);
    expect(password.validity.valid).toBe(false);

    await user.type(password, '12345678');
    await act(() => user.click(nextButton));

    expect(formElement.checkValidity()).toBe(true);
    expect(password.validity.valid).toBe(true);
    expect(onClickHandlerMock).toHaveBeenCalledOnce();
  });
})