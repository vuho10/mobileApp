import {View, Text,Button } from 'react-native';

function Detail({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text> HELLO Details Screen</Text>
        <Button
                    title="Go to Home"
                    onPress={() => navigation.navigate('Home')}/>
      </View>
    );
  }

  export default Detail;