import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import {
  Input,
  Card,
  Button,
  Text,
  Switch,
  Overlay,
  Icon,
} from 'react-native-elements';

import { connect } from 'react-redux';
import { SIGNIN } from '../store/actions/types';

const SignInScreen = ({ navigation, user }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [remember, setRemember] = useState(true);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({
    error: false,
    visible: false,
    text: null,
  });

  const signIn = () => {
    if (user !== null) {
      if (user.email === email) {
        if (user.password === password) {
          return Promise.resolve(
            setLoading(true),
            dispatch({
              type: SIGNIN,
              payload: {
                remember: remember,
              },
            }),
          ).then(() => navigation.navigate('Home'));
        }
      }
    }

    setMessage({
      error: true,
      visible: true,
      text: 'You entered wrong or missing information, please try again!',
    });

    setLoading(false);
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{
        flex: 1,
        justifyContent: 'center',
      }}>
      <Card>
        <Input
          label="Email"
          keyboardType="email-address"
          placeholder="abc@doe.com"
          value={email}
          onChangeText={text => setEmail(text)}
          leftIcon={{ type: 'font-awesome', name: 'at' }}
        />
        <Input
          label="Password"
          placeholder="******"
          value={password}
          onChangeText={text => setPassword(text)}
          leftIcon={{ type: 'font-awesome', name: 'lock' }}
          secureTextEntry
        />
        <View style={{ flexDirection: 'row' }}>
          <Text h6>Remember Me</Text>
          <Switch
            value={remember}
            onChange={() => setRemember(!remember)}
            style={{ marginLeft: 'auto' }}
          />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('SignUp')}
          style={{ marginBottom: 10 }}>
          <Text h6> Don't have an account?</Text>
        </TouchableOpacity>
        <Button loading={loading} title="Sign In" onPress={() => signIn()} />
      </Card>
      <Overlay
        isVisible={message.visible}
        onBackdropPress={() =>
          setMessage(state => ({ ...state, visible: false }))
        }>
        {message.error ? (
          <Icon name="times" type="font-awesome" color="red" size={60} />
        ) : (
          <Icon name="check" type="font-awesome" color="green" size={60} />
        )}
        <Text style={{ textAlign: 'center' }} h4>
          {message.text}
        </Text>
      </Overlay>
    </KeyboardAwareScrollView>
  );
};

const mapStateToProps = state => ({
  user: state.user.user,
});

export default connect(mapStateToProps)(SignInScreen);
