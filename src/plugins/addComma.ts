interface NumberFormatResult {
  originalNumber: number
  formattedNumber: string
}

export default function AddComma(inputNumber: number): NumberFormatResult {
  const formattedNumber = inputNumber.toLocaleString()
  return {
    originalNumber: inputNumber,
    formattedNumber: formattedNumber,
  }
}
