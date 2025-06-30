import { useGetColors } from '../data/useGetColors'

const ColorSelect = () => {
  const {isLoading, colors, error } = useGetColors();
  
  return (
    <>
      {isLoading && <span data-testid="color-loading">Finding colors...</span>}
      {error && <span data-testid="color-error">{error}</span>}
      {colors.length > 0 && (
        <select name="colors">
          <option value="">SELECT YOUR FAVORITE COLOR</option>
          {colors.map((color) => (<option key={color} value={color}>{color}</option>))}
        </select>
      )}
    </>
  );
};

export default ColorSelect;
