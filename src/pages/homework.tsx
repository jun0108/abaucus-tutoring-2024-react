import { useState } from 'react'
import CmInput from '../components/input'
import AddComma from '../plugins/addComma'

function HomeWorkPage() {
  const [inputValue, setInputValue] = useState<string>('')
  const [valueType, setValueType] = useState()

  const inputChange = (value: string, type: any) => {
    setInputValue(value)
    setValueType(type)
  }

  const result = AddComma(inputValue)

  return (
    <div className="flex flex-col">
      <CmInput
        value={inputValue}
        placeholder="입력하세요"
        onChange={inputChange}
      />
      <p>value: {inputValue}</p>
      {result}
      <p>type: {valueType}</p>
    </div>
  )
}

export default HomeWorkPage
