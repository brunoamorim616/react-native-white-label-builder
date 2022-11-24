import React, {useId, useRef, useState} from 'react';
import {
  Button,
  FormControl,
  Input,
  Stack,
  WarningOutlineIcon,
  View,
  Icon,
  HStack,
  Toast,
} from 'native-base';
import {
  Keyboard,
  Platform,
  TextInput,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import auth from '@react-native-firebase/auth';

interface AuthCredentials {
  email: string;
  password: string;
}

interface AuthCredentialsInvalid {
  emailInvalid?: boolean;
  passwordInvalid?: boolean;
}

export function Authentication() {
  const [authCredentialsInvalid, setAuthCredentialsInvalid] =
    useState<AuthCredentialsInvalid>({
      emailInvalid: false,
      passwordInvalid: false,
    } as AuthCredentialsInvalid);
  const [authCredentials, setAuthCredentials] = useState<AuthCredentials>({
    email: '',
    password: '',
  } as AuthCredentials);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const icons = {
    google: 'logo-google',
    github: 'logo-github',
  };

  const emailInputId = useId();
  const passwordInputId = useId();
  const emailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const submitButtonRef = useRef<TouchableOpacity>(null);

  function validateFields() {
    if (authCredentials.email === '' && authCredentials.password === '')
      setAuthCredentialsInvalid({
        emailInvalid: true,
        passwordInvalid: true,
      });
    else if (authCredentials.email === '')
      setAuthCredentialsInvalid({
        emailInvalid: true,
      });
    else if (authCredentials.password === '')
      setAuthCredentialsInvalid({
        passwordInvalid: true,
      });

    return true;
  }

  function onSubmit() {
    Keyboard.dismiss();
    setIsLoading(true);

    if (!validateFields()) return setIsLoading(false);

    auth()
      .signInWithEmailAndPassword(
        authCredentials.email,
        authCredentials.password,
      )
      .then(resolve =>
        Toast.show({title: 'Successfully logged in!', variant: 'success'}),
      );
    setIsLoading(false);
  }

  function onFocusField() {
    setAuthCredentialsInvalid({} as AuthCredentialsInvalid);
  }

  return (
    <View flex={1} justifyContent="center">
      <FormControl isRequired>
        <Stack mx="4">
          <FormControl.Label>Email</FormControl.Label>
          <Input
            key={emailInputId}
            ref={emailInputRef}
            onFocus={onFocusField}
            value={authCredentials.email}
            onChangeText={text =>
              setAuthCredentials({...authCredentials, email: text})
            }
            type="text"
            defaultValue=""
            placeholder="example@email.com"
            onSubmitEditing={event => {
              event.target.blur, passwordInputRef.current?.focus();
            }}
            returnKeyType="next"
          />
          <FormControl.ErrorMessage
            isInvalid={authCredentialsInvalid.emailInvalid}
            leftIcon={<WarningOutlineIcon size="xs" />}>
            Email is required.
          </FormControl.ErrorMessage>
        </Stack>
        <Stack mx="4">
          <FormControl.Label>Password</FormControl.Label>
          <Input
            key={passwordInputId}
            ref={passwordInputRef}
            onFocus={onFocusField}
            value={authCredentials.password}
            onChangeText={text =>
              setAuthCredentials({...authCredentials, password: text})
            }
            type="password"
            defaultValue=""
            placeholder="password"
            onEndEditing={event => {
              event.target.blur, onSubmit();
            }}
            returnKeyType="go"
          />
          <FormControl.ErrorMessage
            isInvalid={authCredentialsInvalid.passwordInvalid}
            leftIcon={<WarningOutlineIcon size="xs" />}>
            Atleast 6 characters are required.
          </FormControl.ErrorMessage>
        </Stack>
      </FormControl>

      <Button
        ref={submitButtonRef}
        m="12"
        h="12"
        mx="4"
        onPress={onSubmit}
        disabled={isLoading}
        isLoading={isLoading}
        isLoadingText="Authenticating...">
        Authenticate
      </Button>

      <HStack space="8" justifyContent="center" alignItems="center">
        <Icon as={Ionicons} name={icons.google} size="12" />
        <Icon as={Ionicons} name={icons.github} size="12" />
      </HStack>
    </View>
  );
}
