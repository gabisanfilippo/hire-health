export const maskCurrency = (value: string) => {
  // Remove todos os caracteres não numéricos, exceto a vírgula
  const newValue = value.replace(/[^\d,]/g, "");

  // Separa o valor antes e depois da vírgula
  const [integerPart, decimalPart] = newValue.split(",");

  // Formata a parte inteira com separadores de milhares
  const formattedIntegerPart = integerPart.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    "."
  );

  // Monta o valor completo com o símbolo "R$", a parte inteira formatada e a parte decimal (com no máximo 2 dígitos)
  let formattedValue = `R$ ${formattedIntegerPart}`;
  if (decimalPart !== undefined) {
    formattedValue += `,${decimalPart.slice(0, 2)}`;
  }

  return formattedValue;
};
