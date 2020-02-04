import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from '../styles';
import LineSeparator from '~/components/LineSeparator'
import commonStyles from '~/assets/styles/commonStyles';

export default props => {
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.categoryWrapper}>
            <View style={styles.categoryInlineItems}>
                <Text style={styles.categoryTitle}>{props.nome}</Text>
                <Icon
                    size={30}
                    style={{ marginBottom: -3 }}
                    color={props.icon_color ? props.icon_color : commonStyles.colors.black}
                    name={props.icon}
                />
            </View>
            <LineSeparator/>
        </TouchableOpacity>
    )
}