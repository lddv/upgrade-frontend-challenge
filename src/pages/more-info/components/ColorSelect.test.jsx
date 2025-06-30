import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import { useGetColors } from "../data/useGetColors";
import ColorSelect from "./ColorSelect";
import { expect } from "vitest";

vi.mock('../data/useGetColors');

describe('ColorSelect', () => {
  it('shows loading message whenever the api is still fetching', () => {
    useGetColors.mockImplementation(() => ({
      isLoading: true,
      colors: [],
      error: undefined,
    }));

    render(<ColorSelect />);

    expect(screen.getByTestId('color-loading')).toBeInTheDocument();
    expect(screen.queryByTestId('color-error')).not.toBeInTheDocument();
  });

  it('shows error message whenever the api has a problem', () => {
    useGetColors.mockImplementation(() => ({
      isLoading: false,
      colors: [],
      error: 'there has been an error',
    }));

    render(<ColorSelect />);

    expect(screen.queryByTestId('color-loading')).not.toBeInTheDocument();
    expect(screen.getByTestId('color-error')).toBeInTheDocument();
  });

  it('shows colors when api has the correct return', () => {
    useGetColors.mockImplementation(() => ({
      isLoading: false,
      colors: [
        "black",
        "blue",
        "green",
        "red",
        "white"
      ],
      error: null,
    }));

    render(<ColorSelect />);

    expect(screen.queryByTestId('color-loading')).not.toBeInTheDocument();
    expect(screen.queryByTestId('color-error')).not.toBeInTheDocument();

    const select = screen.getByRole('combobox');
    expect(select).toBeInTheDocument();
    expect(select.children).toHaveLength(6); // 5 options from mock, plus one placeholder
  });
})