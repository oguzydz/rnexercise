import React from 'react';
import { View } from 'react-native';
import { Card, Button, Text } from 'react-native-elements';
import { connect, useDispatch } from 'react-redux';
import { SIGNOUT } from '../store/actions/types';

const HomeScreen = ({ user }) => {
  const dispatch = useDispatch();

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 5, justifyContent: 'center' }}>
        <Card>
          <Card.Title h3 h3Style={{ textAlign: 'left' }}>
            Welcome, {user.name}
          </Card.Title>
          <Text>Full Name: {user.name}</Text>
          <Text>Email: {user.email}</Text>
        </Card>
      </View>
      <View style={{ flex: 1, padding: 20, justifyContent: 'flex-end' }}>
        <Button
          onPress={() => dispatch({ type: SIGNOUT })}
          title="Sign Out"
          type="outline"
        />
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  user: state.user.user,
});

export default connect(mapStateToProps)(HomeScreen);
