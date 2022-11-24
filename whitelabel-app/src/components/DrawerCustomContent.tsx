import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {ReactNode} from 'react';

interface OptionConfigurationProps {
  name: string;
}

interface DrawerCustomContentComponentProps
  extends DrawerContentComponentProps {
  optionsConfiguration: OptionConfigurationProps[];
}

export function DrawerCustomContent(props: DrawerCustomContentComponentProps) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}
