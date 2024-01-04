interface NumberFormatResult {
  result: string
}

export default function AddComma(
  numberValue: number | string
): NumberFormatResult {
  if (typeof numberValue === 'number') {
    const change = Number(numberValue)
    const formattedNumber = change.toLocaleString()

    return {
      result: formattedNumber,
    }
  } else {
    return {
      result: numberValue,
    }
  }
}
