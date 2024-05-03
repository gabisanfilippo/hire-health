export const maskNumber = (value: string) => {
  const newValue = value.replace(/\D/g, "");
  return newValue;
};
