import React, {ReactElement, useId} from 'react';
import {
  Button as PaperButton,
  ButtonProps as PaperButtonProps,
} from 'react-native-paper';
import {responsiveWidth} from '../hooks/useResponsiveDimensions';

type ButtonPropsExtends = Omit<PaperButtonProps, 'theme'>;

interface ButtonProps extends ButtonPropsExtends {
  width?: number;
}

/** Defines the default width of the component.*/
const DEFAULT_WIDTH = 90;

export function Button({
  width = DEFAULT_WIDTH,
  ...rest
}: ButtonProps): ReactElement {
  /** Creates a unique element key*/
  const componentKey = useId();

  /** Intercepting the provided width and apply responsive values. */
  width = responsiveWidth(width);

  return (
    <PaperButton key={componentKey} style={{width: width}} {...rest}>
      {rest.children}
    </PaperButton>
  );
}
