import React from 'react';
import {StyleSheet} from 'react-native';
import {FieldConfig, useField} from 'formik';

import {Box, Text} from '@ui/components';
import ErrorMessage from './ErrorMessage';
import {isAndroid} from '@shared/platform';
import Dropdown, {
  Props as DropdownProps,
  OptionType,
} from '@components/Dropdown';

type Props = Omit<DropdownProps, 'onChange' | 'value'> &
  Pick<FieldConfig, 'name' | 'value'> & {
    name: string;
    label: string;
    isRequired?: boolean;
  };
const FieldSelect = ({
  data,
  name,
  onBlur,
  label,
  isRequired,
  ...rest
}: Props) => {
  const [field, meta, helpers] = useField(name);
  const isInvalid = Boolean(meta.touched && meta.error);

  const handleChange = React.useCallback(
    (item: OptionType) => {
      helpers.setValue(item.value);
    },
    [helpers],
  );
  if (!data) return null;

  return (
    <Box>
      <Dropdown
        label={label}
        data={data}
        value={field.value}
        style={{backgroundColor: 'white'}}
        onChange={handleChange}
        {...rest}
      />
      <Box style={styles.labelContainer}>
        <Text fontSize={14}>
          {field.value && isRequired ? <Text color="error500">*</Text> : null}
        </Text>
      </Box>
      {isInvalid && <ErrorMessage>{meta.error}</ErrorMessage>}
    </Box>
  );
};

const styles = StyleSheet.create({
  labelContainer: {
    position: 'absolute',
    left: 8,
    top: 7,
  },
  selectedTextStyle: {
    height: isAndroid ? 40 : 'auto',
    paddingTop: 17,
    fontWeight: '600',
  },
});

export default FieldSelect;
