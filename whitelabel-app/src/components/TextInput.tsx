import React, {ReactElement, useId} from 'react';
import {
  TextInput as PaperTextInput,
  TextInputProps as PaperTextInputProps,
} from 'react-native-paper';

import {responsiveWidth} from '../hooks/useResponsiveDimensions';

type TextInputExtends = Omit<PaperTextInputProps, 'theme'>;

interface TextInputProps extends TextInputExtends {
  width?: number;
}

/** Defines the defaults width of the component.*/
const DEFAULT_WIDTH = 95;

export function TextInput({
  width = DEFAULT_WIDTH,
  ...rest
}: TextInputProps): ReactElement {
  /** Creates a unique element key*/
  const componentKey = useId();

  /** Intercepting the provided width and apply responsive value. */
  width = responsiveWidth(width);

  return (
    <PaperTextInput
      key={componentKey}
      style={{width: width}}
      mode="outlined"
      {...rest}
    />
  );
}
