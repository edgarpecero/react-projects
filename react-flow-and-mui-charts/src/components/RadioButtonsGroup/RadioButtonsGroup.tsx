import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { SxProps, Theme } from '@mui/material';

export interface RadioButtonsGroupProps {
  buttons: RadioButton[];
}

export interface RadioButton {
  label: string;
  value: string;
  disable: boolean;
}

const radioButtonStyle: SxProps<Theme> = {
  '& .MuiSvgIcon-root': {
    color: 'orange',
  },
  '&.Mui-checked .MuiSvgIcon-root': {
    color: 'orange',
  },
};

const RadioButtonsGroup = ({ buttons }: RadioButtonsGroupProps) => {
  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        {buttons.map(({ label, value }: RadioButton) => (
          <FormControlLabel value={value} control={<Radio sx={radioButtonStyle} />} label={label} />
        ))}
      </RadioGroup>
    </FormControl>
  );
}

export default RadioButtonsGroup;
