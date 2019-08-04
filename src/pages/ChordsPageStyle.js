import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Theme from '../style/Theme'

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Theme.background
  },
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 150,
    height: 150
  },
  inputsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: hp('2%') //5
  },
  pickerContainer: {
    borderWidth: 0.8,
    borderRadius: 30,
    borderColor: 'black',
    marginVertical: 5,
    paddingLeft: wp('3%'), // 15
    textAlign: 'center',
    fontFamily: "Oswald-Regular",
    color: 'blue',
  },
  picker: {
    width: wp('35%'), //130
  },
  carouselContainer: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  aboutContainer: {
    position: 'absolute',
    bottom: 0,
    marginBottom: wp('3%'), //15
    marginLeft: wp('3%') //15
  },
  about: {
    width: 20,
    height: 20
  }
})