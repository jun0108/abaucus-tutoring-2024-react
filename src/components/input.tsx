import React from 'react'

interface CmInputProps {
  className?: string
  value: string | number
  placeholder: string
  readOnly?: boolean
  disabled?: boolean
  onChange: (value: string, type: string) => void
}

const CmInput: React.FC<CmInputProps> = ({
  className,
  value,
  placeholder,
  readOnly = false,
  disabled = false,
  onChange,
}: CmInputProps) => {
  const valueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value

    let type: string | number | '' | undefined

    if (newValue.trim() === '') {
      type = 'string' // 공백 인식
    } else if (!isNaN(Number(newValue))) {
      type = 'number'
    } else {
      type = 'string'
    }
    // 입력값이 없을 경우
    if (newValue === '') {
      type = ''
    }

    onChange(newValue, type)
  }

  return (
    <div className="cm-input">
      <input
        type="text"
        className={className}
        value={value}
        placeholder={placeholder}
        readOnly={readOnly}
        disabled={disabled}
        onChange={valueChange}
      />
    </div>
  )
}

export default CmInput
