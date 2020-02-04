import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { View, Image, Text, TouchableOpacity } from 'react-native'

import styles from '../styles'
import LineSeparator from '~/components/LineSeparator'
import commonStyles from '~/assets/styles/commonStyles'

export default props => {
    if (props.isDefault == 1)
        return (
            <TouchableOpacity onPress={props.onPress}>
                <View style={styles.itemWrapper}>
                    <Text style={styles.itemTitle}>{`${(props.logradouro).substr(0, 20)}, ${props.numero}`}</Text>

                    <Image source={commonStyles.logos.x} style={styles.xIcon} />
                </View>
                <LineSeparator />
            </TouchableOpacity>
        )
    else
        return (
            <TouchableOpacity onPress={props.onPress}>
                <View style={styles.itemWrapper}>
                    <Text style={styles.itemTitle}>{`${(props.logradouro).substr(0, 20)}, ${props.numero}`}</Text>

                    <Icon name="map-marker" size={28} color={commonStyles.colors.black} />
                </View>
                <LineSeparator />
            </TouchableOpacity>
        )
}