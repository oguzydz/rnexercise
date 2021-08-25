import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch } from 'react-redux';
import { Input, Card, Button, Text, Overlay, Icon } from 'react-native-elements';
import { SIGNUP } from '../store/actions/types';

const SignUpScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({
    visible: false,
    text: null,
  });

  const signUp = () => {
    return Promise.resolve(
      setLoading(true),
      dispatch({
        type: SIGNUP,
        payload: {
          name: name,
          email: email,
          password: password,
        },
      }),
    ).then(res => {
      setMessage({
        visible: true,
        text: 'You have been successfully registered!',
      });
      setTimeout(
        () =>
          navigation.navigate('SignIn', {
            email: email,
          }),
        1500,
      );
    });
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{
        flex: 1,
        justifyContent: 'center',
      }}>
      <Card>
        <Input
          label="Full Name"
          placeholder="John Doe"
          value={name}
          onChangeText={text => setName(text)}
          leftIcon={{ type: 'font-awesome', name: 'user' }}
        />
        <Input
          label="Email"
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
        <TouchableOpacity
          onPress={() => navigation.navigate('SignIn')}
          style={{ marginBottom: 10 }}>
          <Text h6> Already registered?</Text>
        </TouchableOpacity>
        <Button loading={loading} title="Sign Up" onPress={() => signUp()} />
      </Card>
      <Overlay isVisible={message.visible}>
        <Icon name="check" type="font-awesome" color="green" size={60} />
        <Text style={{ textAlign: 'center' }} h4>
          {message.text}
        </Text>
      </Overlay>
    </KeyboardAwareScrollView>
  );
};

export default SignUpScreen;
