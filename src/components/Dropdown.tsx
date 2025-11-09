import {Box, Text} from '@ui/components';
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Dropdown as DropdownComponent} from 'react-native-element-dropdown';
import type {DropdownProps} from 'react-native-element-dropdown/lib/typescript/components/Dropdown/model';

export type OptionType = {label: string; value: string | number};

export type Props = DropdownProps<OptionType> & {
  label: string;
  value: string;
  onChange: (newValue: OptionType) => void;
};
const Dropdown: React.FC<Props> = ({value, onChange, label, data, ...rest}) => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <Box style={styles.container}>
      <Text variant="labelField" my="s">
        {label}
      </Text>

      <DropdownComponent
        {...rest}
        style={[styles.dropdown, isFocus && {borderColor: '#4A90E2'}]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        itemTextStyle={{fontSize: 14}}
        data={data}
        search
        maxHeight={150}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Choose' : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          onChange(item.value);
          setIsFocus(false);
        }}
      />
    </Box>
  );
};

export default Dropdown;

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
  },
  label: {
    marginBottom: 6,
    fontSize: 14,
    fontWeight: '600',
  },
  dropdown: {
    height: 60,
    borderColor: '#C7C7CC',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
  },
  placeholderStyle: {
    fontSize: 14,
    color: '#999',
  },
  selectedTextStyle: {
    fontSize: 14,
  },
});
