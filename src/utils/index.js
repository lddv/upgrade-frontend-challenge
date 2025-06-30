export function isValidEmail(email) {
  const noSpaceOrAt = '[^\\s@]';
  const regex = new RegExp(`^${noSpaceOrAt}+@${noSpaceOrAt}+\\.${noSpaceOrAt}+$`);
  return regex.test(email);
}
