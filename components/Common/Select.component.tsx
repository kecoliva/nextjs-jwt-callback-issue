import { ComponentType, useState } from 'react'
import ReactSelect, {
  components as Components,
  DropdownIndicatorProps,
  Options,
  SingleValue,
  StylesConfig,
  ValueContainerProps,
} from 'react-select'
import { Option } from '../../interfaces/Option.interface'
import CaretDownIcon from './Icons/CaretDown.icon'

const Select = ({
  label,
  name,
  Icon,
  placeholder,
  options,
}: {
  label: string
  name: string
  Icon: ComponentType
  placeholder: string
  options: Options<Option>
}) => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null)

  const handleOnChange = (option: SingleValue<Option>) => {
    setSelectedOption(option)
  }

  const style: StylesConfig<Option, false> = {
    indicatorSeparator: () => {
      return {
        display: 'none',
      }
    },
    placeholder: (base) => {
      return {
        ...base,
        font: '400 14px Inter',
        color: '#717583',
        margin: '0 0 0 8px',
      }
    },
    control: (base) => {
      return {
        ...base,
        height: '100%',
        boxShadow: 'none',
        border: 'none',
      }
    },
    container: (base) => {
      return {
        ...base,
        height: '100%',
        border: '1px solid #1D212B1A',
        borderRadius: '4px',
      }
    },
    valueContainer: (base) => {
      return {
        ...base,
        display: 'flex',
      }
    },
    input: (base) => {
      return {
        ...base,
        margin: '0 0 0 8px',
      }
    },
    singleValue: (base) => {
      return {
        ...base,
        margin: '0 0 0 8px',
      }
    },
  }

  const DropdownIndicator = (props: DropdownIndicatorProps<Option, false>) => {
    return (
      <Components.DropdownIndicator {...props}>
        <CaretDownIcon className={`stroke-black ${props.selectProps.menuIsOpen && 'rotate-180'}`} />
      </Components.DropdownIndicator>
    )
  }

  const ValueContainer = ({ children, ...props }: ValueContainerProps<Option, false>) => {
    return (
      <Components.ValueContainer {...props}>
        <Icon />
        <div className="grid items-center">{children}</div>
      </Components.ValueContainer>
    )
  }

  return (
    <div className="flex w-full flex-col">
      <label className="mb-[8px] font-inter text-[12px] font-normal text-mineshaft" htmlFor={name}>
        {label}
      </label>
      <ReactSelect
        styles={style}
        placeholder={placeholder}
        value={selectedOption}
        onChange={handleOnChange}
        options={options}
        components={{ DropdownIndicator, ValueContainer }}
        inputId={name}
      />
    </div>
  )
}

export default Select
