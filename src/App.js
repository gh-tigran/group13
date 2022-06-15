import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  Pressable,
} from 'react-native';
import PropsTypes from 'prop-types';
import noImage from './assets/images/noimage.jpeg';
import loading from './assets/images/Landscape-Color.png';

function App(props) {
  const { navigator } = props;
  const [error, setError] = useState(false);
  const [value, setValue] = useState('');
  useEffect(() => {
    Image.prefetch('https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg');
  }, []);
  return (
    <View style={styles.wrapper}>
      <View style={styles.box} />
      <View style={[styles.box, styles.yellowBox]} />
      <Text
        numberOfLines={3}
        dataDetectorType="all"
        selectable
        accessibilityValue="2"
        selectionColor="red"
        style={styles.text}
      >
        Lorem ipsum +37493092610 dolor https://sjhdjashd.com sit test@test.com amet,
        consectetur adipisicing elit.
        Aliquam animi aperiam consequatur corporis dolor, ex id labore minus
        molestias mollitia nam nemo nobis numquam
        porro quasi saepe tenetur voluptas voluptates.
      </Text>
      <Pressable onLongPress={() => navigator.navigate()} onPress={() => alert(1)}>
        <Image
          onError={() => setError(true)}
          defaultSource={loading}
          source={error ? noImage : { uri: 'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg?asdasdasdasdsadasdasdasdasdasda' }}
          style={styles.image}
        />
      </Pressable>

      <TextInput
        autoComplete="email"
        contextMenuHidden
        multiline
        editable={false}
        dataDetectorTypes="all"
        autoCapitalize="sentences"
        value={value}
        onChangeText={setValue}
        style={styles.input}
      />
      <TextInput />

    </View>
  );
}

App.propTypes = {
  navigator: PropsTypes.object.isRequired,
};

const styles = StyleSheet.create({
  wrapper: {
    // flexDirection: 'row'
    flex: 1,
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
  yellowBox: {
    backgroundColor: 'yellow',
  },
  text: {
    color: '#333',
    fontSize: 22,
  },
  image: {
    width: '100%',
    height: 100,
    backgroundColor: 'yellow',
    resizeMode: 'contain',
  },
  input: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black',
    paddingHorizontal: 10,
    paddingVertical: 5,
    height: 80,
  },
});

export default App;
