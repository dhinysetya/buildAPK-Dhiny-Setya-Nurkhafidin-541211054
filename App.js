import { StatusBar } from 'expo-status-bar';
import {View, Text, Image, ScrollView, TextInput, Button, Linking} from 'react-native';

const Instagram = () => {
  const url = 'https://www.instagram.com/dhnys___/';
  Linking.openURL(url);
}

const Website = () => {
  const url = 'https://theresiana.ac.id/kerjasama-content-placement/';
  Linking.openURL(url);
}

const Artikel = () => {
  const url = 'https://ardata.co.id/template-ppt-sidang-skripsi/';
  Linking.openURL(url);
}

const Web = () => {
  const url = 'https://www.figma.com/file/Z3eJqdkC1gZSMQoL7INkED/porto2?type=design&node-id=0%3A1&mode=design&t=3ZXjb3SyHG5IDj4V-1';
  Linking.openURL(url);
}

const Figma = () => {
  const url = 'https://www.figma.com/file/P4nOzP4oguBBJ5hAIIA9Zl/1?type=design&node-id=0%3A1&mode=design&t=AmAFQoe6DGXelRsC-1';
  Linking.openURL(url);
}

const App = () => {
  return (
    <ScrollView>

    <View style = {{alignItems: 'center', backgroundColor: '#FF6347', padding : 40,flex: 1 }}>
        <Image style={{width: 150, height: 150,borderRadius : 150 / 2, overflow: "hidden", backgroundColor: 'white'}} source={require('./assets/dhiny.png')}/>
    </View>

    <View style={{backgroundColor: '#FF6347',flex : 11}}>
      <Text style ={{fontWeight: 'bold', textAlign: 'center',color : 'white', fontSize: 15, marginTop: -30}}>Dhiny Setya Nurkhafidin
      </Text>
      <Text style ={{fontWeight: 'medium', textAlign: 'center', color : 'white', fontSize: 15, marginTop: 13}}>Aku adalah seorang siswi dari SMK Telkom Purwokerto jurusan Rekayasa Perangkat Lunak, yang sedang belajar mengenai React Native.
      </Text>

      <View style = {{alignItems: 'center', padding : 25 }}>
        <Button
      title='Contact Me' color= '#C0C0C0' onPress={Instagram}/>
      </View>
      
      <View style = {{alignItems: 'center', backgroundColor: 'white'}}>
      <Text style= {{margin: 20, fontWeight: 'bold', textAlign: 'center', color: 'black', fontSize: 15}}> My Recent Project </Text>
        
       <View style = {{alignItems: 'flex-start'}}>
       <Image style= {{width: 350, height: 200, marginBottom: 20, borderRadius: 5}} source={require('./assets/halamanwebsite.png')}/>
      <Text style= {{marginTop: 5, marginBottom: -10, marginLeft: -5 ,fontWeight: 'bold', color: 'black', fontSize: 15}}> Halaman Kerjasama Content Placement </Text>
      <Text style= {{paddingTop: 5, marginTop: 10, marginBottom: 20, marginLeft: -5, fontWeight: 'medium', color: 'black', fontSize: 15}}> Web Design </Text>
       <Button title='View' color= '#FF6347' onPress={Website}/>
       </View>

      <View style = {{alignItems: 'flex-start'}}>
       <Image style= {{width: 350, height: 200, marginTop: 40, marginBottom:20, borderRadius: 5}} source={require('./assets/pembuatanartikel.png')}/>
      <Text style= {{marginTop: 5, marginBottom: -10, marginLeft: -5 ,fontWeight: 'bold', color: 'black', fontSize: 15}}> Artikel </Text>
      <Text style= {{paddingTop: 5, marginTop: 10, marginBottom: 20, marginLeft: -5, fontWeight: 'medium', color: 'black', fontSize: 15}}> Copywriting </Text>
       <Button title='View' color= '#FF6347' onPress={Artikel}/>
       </View>

      <View style = {{alignItems: 'flex-start',}}>
       <Image style= {{width: 350, height: 200, marginTop: 40, marginBottom: 20, borderRadius: 5}} source={require('./assets/webdesain.png')}/>
      <Text style= {{marginTop: 5, marginBottom: -10, marginLeft: -5 ,fontWeight: 'bold', color: 'black', fontSize: 15}}> Landing Page </Text>
      <Text style= {{paddingTop: 5, marginTop: 10, marginBottom: 20, marginLeft: -5, fontWeight: 'medium', color: 'black', fontSize: 15}}> Web Design </Text>
       <Button title='View' color= '#FF6347' onPress={Web}/>
       </View>

      <View style = {{alignItems: 'flex-start'}}>
       <Image style= {{width: 350, height: 200, marginTop: 40, marginBottom: 20, borderRadius: 5}} source={require('./assets/figma.png')}/>
       <Text style= {{marginTop: 5, marginBottom: -10, marginLeft: -5 ,fontWeight: 'bold', color: 'black', fontSize: 15}}> Desain Aplikasi </Text>
      <Text style= {{paddingTop: 5, marginTop: 10, marginBottom: 20, marginLeft: -5, fontWeight: 'medium', color: 'black', fontSize: 15}}> Figma </Text>
       <Button title='View' color= '#FF6347' onPress={Figma}/>
       </View>

      <TextInput placeholder = 'Masukan dan Saran' style={{backgroundColor: '#C0C0C0', padding: 10, paddingHorizontal: 80, marginVertical: 50, borderRadius: 30, textAlign: 'center', fontWeight: 'bold'}}/>
       
      </View>
    </View>
    </ScrollView>
  );
}

export default App;