import React, {forwardRef, memo, useCallback} from 'react';
import {StyleProp, TextStyle} from 'react-native';
import {palette, useAppRestyle} from '@theme';
import {FieldConfig, useField} from 'formik';
import {Box, Input, Text} from '@ui/components';
import {restyleFunctionsField} from './constants';
import ErrorMessage from './ErrorMessage';
import type {BoxProps, InputProps} from '@ui/components';
import type {ComponentWithAs} from '@ui/types';
import MaskInput, {Masks} from 'react-native-mask-input';

export type Props = InputProps & {
  suffix?: string;
  label?: string;
  styleInput?: StyleProp<TextStyle>;
  isClearButtonModeIcon?:
    | 'while-editing'
    | 'never'
    | 'unless-editing'
    | 'always';
  styleContent?: StyleProp<TextStyle>;
  boxProps?: BoxProps;
} & Pick<FieldConfig<any>, 'name' | 'type' | 'value'>;

const FieldDate = forwardRef<typeof Input, Props>(
  (
    {
      name,
      value,
      defaultValue,
      onBlur,
      onChangeText,
      styleInput,
      styleContent,
      isClearButtonModeIcon = 'while-editing',
      boxProps,
      label,
      ...rest
    },
    ref,
  ) => {
    const [focussed, setFocussed] = React.useState(false);

    const [field, {error, touched}] = useField({
      name,
      value,
      defaultValue,
    });
    const {style: containerStyle = {}, ...passedProps} = useAppRestyle(
      restyleFunctionsField,
      rest,
    );
    const isInvalid = Boolean(error && touched);

    const handleChangeText = useCallback(
      (text: string) => {
        onChangeText?.(text);
        field.onChange(name)(text);
      },
      [onChangeText, field, name],
    );

    return (
      <Box {...boxProps} style={[containerStyle]}>
        <Text my="xxs" variant="labelField">
          {label}
        </Text>
        <MaskInput
          value={field.value}
          mask={Masks.DATE_DDMMYYYY}
          onChangeText={handleChangeText}
          onFocus={() => {
            setFocussed(true);
          }}
          keyboardType="numeric"
          style={{
            height: 60,
            padding: 10,
            borderWidth: 1,
            borderColor: focussed ? palette.base400 : palette.base100,
            borderRadius: 8,
            fontSize: 15,
          }}
        />
        {isInvalid && <ErrorMessage>{error}</ErrorMessage>}
      </Box>
    );
  },
);

export default memo(FieldDate) as ComponentWithAs<typeof Input, Props>;
