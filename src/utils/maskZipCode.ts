export const maskZipCode = (value: string) => {
  const onlyNumbersValue = value.replace(/\D/g, "");
  const limitedValue = onlyNumbersValue.slice(0, 8);

  const firstGroup = limitedValue.slice(0, 5);
  const secondGroup = limitedValue.slice(5);

  let maskedValue = "";
  if (firstGroup) maskedValue += `${firstGroup}`;
  if (secondGroup) maskedValue += `-${secondGroup}`;

  return maskedValue;
};
