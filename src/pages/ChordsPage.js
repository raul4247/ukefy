import React, { Component } from 'react'
import { TouchableOpacity, View, Picker, Image, Alert } from 'react-native'
import styles from './ChordsPageStyle'
import CarouselComponent from '../components/CarouselComponent'
import chordsSVG from '../helpers/chordsSVG'
import Const from '../Const'
import * as RNLocalize from "react-native-localize"

class ChordsPage extends Component {
    constructor(props) {  
        super(props)
        this.state = {
            root: 'C',
            type: 'Major',
            entries: chordsSVG['C']['Major'],
            modalVisible: false,
            lang: 'en-US',
        }
    }
    componentWillMount(){
        let lang = RNLocalize.getLocales()[0].languageTag
        if(lang == 'pt-BR')
            this.setState({lang: 'pt-BR'})
    }
    showAlertDialog(lang){
        Alert.alert(
            'Ukefy!', Const.ABOUT_TEXT[lang],
            [
                { text: Const.THANKS[lang] }
            ],
            { cancelable: false },
        )
    }
    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.headerContainer}>
                    <Image style={styles.logo}
                        source={require('../../assets/imgs/logo.png')} />
                </View>
                <View style={styles.inputsContainer}>
                    <View style={styles.pickerContainer}>
                        <Picker
                            selectedValue={this.state.root}
                            style={styles.picker}
                            onValueChange={(itemValue) => {
                                let typeState = this.state.type
                                this.setState({ root: itemValue, entries: chordsSVG[itemValue][typeState] })
                            }}>
                            {Const.ROOTS.map(root => (
                                <Picker.Item key={root} label={root} value={root} />
                            ))
                            }
                        </Picker>
                    </View>
                    <View style={styles.pickerContainer}>
                        <Picker
                            selectedValue={this.state.type}
                            style={styles.picker}
                            onValueChange={(itemValue) => {
                                let rootState = this.state.root
                                this.setState({ type: itemValue, entries: chordsSVG[rootState][itemValue] })
                            }}>
                            {Const.TYPES.map(type => (
                                <Picker.Item key={type[this.state.lang]} label={type[this.state.lang]} value={type['en-US']} />
                            ))
                            }
                        </Picker>
                    </View>
                </View>
                <View style={styles.carouselContainer}>
                    <CarouselComponent entries={this.state.entries} />
                </View>
                <View style={styles.aboutContainer}>
                    <TouchableOpacity onPress={() => {this.showAlertDialog(this.state.lang)}}>
                        <Image style={styles.about}
                            source={require('../../assets/imgs/info.png')} />
                    </TouchableOpacity>
                </View>
            </View >
        )
    }
}


export default ChordsPage