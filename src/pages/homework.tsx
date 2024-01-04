import { useEffect, useState } from 'react'
import CmInput from '../components/input'
import AddComma from '../plugins/addComma'
import MouseTracker from '../composables/useMouse'

function HomeWorkPage() {
  const [inputValue, setInputValue] = useState('')
  const [valueType, setValueType] = useState()

  const inputChange = (value: string, type: any) => {
    setInputValue(value)
    setValueType(type)
  }

  const position = MouseTracker()
  return (
    <div className="flex flex-col">
      <CmInput
        value={inputValue}
        placeholder="입력하세요"
        onChange={inputChange}
      />
      <p>value: {AddComma(inputValue).result}</p>
      <p>type: {valueType}</p>

      {/* 마우스 좌표 계산하기 */}
      <div className="flex flex-col mt-3">
        <p className="text-lg">마우스 좌표</p>
        <span>X: {AddComma(position.x).result} </span>
        <span>Y: {AddComma(position.y).result} </span>
      </div>
    </div>
  )
}

export default HomeWorkPage
