import * as Nord from './nordPalette'

export const countryOptionsStyles = {
  menu: (provided: any) => ({
    ...provided,
    outline: 0,
    background: `${Nord.snowStorm0}`,
  }),
  option: (provided: any, state: { isSelected: any; }) => ({
    ...provided,
    backgroundColor: state.isSelected ? `${Nord.frost2}` : `${Nord.snowStorm0}`,
    color: `${Nord.polarNight0}`,
    outline: 0,
    border: 0,
    fontSize: '18px',
    cursor: 'pointer',
    boxSizing: 'border-box',
    '&:hover': {
      background: `${Nord.aurora3}`
    }
  }),
  control: () => ({
    background: `${Nord.snowStorm0}`,
    borderRadius: '4px',
    fontSize: '18px',
    height: '40px',
    borderWidth: 0,
    outline: 0,
    cursor: 'pointer',
    '&:hover': {
      background: `${Nord.aurora3}`
    }
  }),
  input: (provided: any,) => ({
    ...provided,
    fontFamily: 'Voltaire',
    '& input': {
      font: 'inherit',
    },
  }),
  placeholder: (provided: any,) => ({
    ...provided,
    top: '55%'
  }),
  singleValue: (provided: any,) => ({
    ...provided,
    top: '55%'
  }),
  noOptionsMessage: (provided: any,) => ({
    ...provided,
    fontSize: '18px'
  }),
}
