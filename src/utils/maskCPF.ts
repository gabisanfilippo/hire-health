export const maskCPF = (value: string) => {
  const onlyNumbersValue = value.replace(/\D/g, "");
  const limitedValue = onlyNumbersValue.slice(0, 11);

  const firstGroup = limitedValue.slice(0, 3);
  const secondGroup = limitedValue.slice(3, 6);
  const thirdGroup = limitedValue.slice(6, 9);
  const fourthGroup = limitedValue.slice(9);

  let maskedValue = "";
  if (firstGroup) maskedValue += firstGroup;
  if (secondGroup) maskedValue += "." + secondGroup;
  if (thirdGroup) maskedValue += "." + thirdGroup;
  if (fourthGroup) maskedValue += "-" + fourthGroup;

  return maskedValue;
};
