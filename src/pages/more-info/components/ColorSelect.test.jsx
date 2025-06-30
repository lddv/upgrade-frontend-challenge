import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import { expect } from "vitest";

import ColorSelect from "./ColorSelect";

describe('ColorSelect', () => {
  it('shows loading message', () => {
    render(<ColorSelect {...{
      isLoading: true,
      colors: [],
      error: undefined,
    }} />);

    expect(screen.getByTestId('color-loading')).toBeInTheDocument();
    expect(screen.queryByTestId('color-error')).not.toBeInTheDocument();
  });

  it('shows error message whenever the api has a problem', () => {
    render(<ColorSelect {...{
      isLoading: false,
      colors: [],
      error: 'there has been an error',
    }} />);

    expect(screen.queryByTestId('color-loading')).not.toBeInTheDocument();
    expect(screen.getByTestId('color-error')).toBeInTheDocument();
  });

  it('shows colors when api has the correct return', () => {
    render(<ColorSelect {...{
      isLoading: false,
      colors: [
        "black",
        "blue",
        "green",
        "red",
        "white"
      ],
      error: null,
    }} />);

    expect(screen.queryByTestId('color-loading')).not.toBeInTheDocument();
    expect(screen.queryByTestId('color-error')).not.toBeInTheDocument();

    const select = screen.getByRole('combobox');
    expect(select).toBeInTheDocument();
    expect(select.children).toHaveLength(6); // 5 options from mock, plus one placeholder
  });
})