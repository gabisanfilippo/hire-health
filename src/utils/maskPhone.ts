export const maskPhone = (value: string) => {
  const onlyNumbersValue = value.replace(/\D/g, "");
  const limitedValue = onlyNumbersValue.slice(0, 11);

  const ddd = limitedValue.slice(0, 2);
  const firstGroup = limitedValue.slice(2, 7);
  const secondGroup = limitedValue.slice(7);

  let maskedValue = "";
  if (ddd) maskedValue += `(${ddd}`;
  if (firstGroup) maskedValue += `) ${firstGroup}`;
  if (secondGroup) maskedValue += `-${secondGroup}`;

  return maskedValue;
};
