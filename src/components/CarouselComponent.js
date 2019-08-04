import React, { Component } from 'react'
import { SafeAreaView, TouchableOpacity, View, Image, Dimensions } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import styles from './CarouselStyle'
import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

// const { width: viewportWidth } = Dimensions.get('window')


class CarouselComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeSlide: 0,
            entries: [],
            leftArrowStatus: true,
            rightArrowStatus: false,            
            leftArrowOpacity: 0.2,
            rightArrowOpacity: 1
        }
    }
    _renderItem({ item }) {
        const ItemSVG = item.svg
        return (
            <View style={styles.slide}>
                <ItemSVG />
            </View>
        )
    }
    componentWillReceiveProps() {
        this._carousel.snapToItem(0)
    }
    updatePagination(index){
        if(index == 0)
            this.setState({leftArrowStatus: true, leftArrowOpacity:0.2, rightArrowStatus: false, rightArrowOpacity:1})
        else if(index == (this.props.entries.length-1))
            this.setState({leftArrowStatus: false, leftArrowOpacity:1, rightArrowStatus: true, rightArrowOpacity:0.2})
        else
            this.setState({leftArrowStatus: false, leftArrowOpacity:1, rightArrowStatus: false, rightArrowOpacity:1})
    }
    render() {
        return (
            <SafeAreaView style={sty.container}>
                <TouchableOpacity
                    disabled={this.state.leftArrowStatus}
                    onPress={
                        () => { this._carousel._snapToItem(this._carousel.currentIndex-1) }
                    }>
                    <Image style={[ {width: 35, height: 35}, { opacity: this.state.leftArrowOpacity }]} source={require('../../assets/imgs/arrow-left.png')} />
                </TouchableOpacity>
                <View>
                    <Carousel
                        data={this.props.entries}
                        ref={(c) => { this._carousel = c }}
                        renderItem={this._renderItem}
                        onSnapToItem={(index) => this.updatePagination(index) }
                        sliderWidth={wp('70%')} //(viewportWidth-100)
                        sliderHeight={hp('40%')} //300
                        windowSize={3}
                        initialNumToRender={3}
                        itemWidth={wp('70%')} //(viewportWidth-100)
                    />
                </View>
                <TouchableOpacity
                    disabled={this.state.rightArrowStatus}
                    onPress={
                        () => { this._carousel._snapToItem(this._carousel.currentIndex+1) }
                    }>
                    <Image style={[ {width: 35, height: 35}, { opacity: this.state.rightArrowOpacity }]} source={require('../../assets/imgs/arrow-right.png')} />
                </TouchableOpacity>
            </SafeAreaView>
            /*

                   

                

            <View style={{ marginTop: -200 }}>
                <Carousel
                    style={styles.carousel}
                    ref={(c) => { this._carousel = c }}
                    data={this.props.entries}
                    renderItem={this._renderItem}
                    initialNumToRender={3}
                    windowSize={3}
                    sliderWidth={viewportWidth}
                    sliderHeight={300}
                    itemWidth={viewportWidth}
                    contentContainerCustomStyle={{ alignItems: 'center' }}
                    onSnapToItem={(index) => this.setState({ activeSlide: index })}
                />
                <View style={{ marginTop: -60 }}>
                    <Pagination
                        dotsLength={this.props.entries.length}
                        activeDotIndex={this.state.activeSlide}
                        dotStyle={{ backgroundColor: Theme.primaryDark }}
                        inactiveDotOpacity={0.4}
                        inactiveDotScale={0.6}
                    />
                </View>
            </View>
            */

        )
    }
}
const sty = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default CarouselComponent
