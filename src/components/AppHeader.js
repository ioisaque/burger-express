import React from 'react';
import { View, Image, Text } from 'react-native';

import { styles } from './styles';
import commonStyles from '~/assets/styles/commonStyles';

export default props => {
    if (props.foto)
        return (
            <View style={styles.headerContainer}>
                <Image
                    style={styles.headerFOTO}
                    source={props.foto}
                    resizeMode="contain"
                />
                <Text style={styles.headerTitle}>{props.nome}</Text>
            </View>
        )
    else if (props.banner)
        return (
            <View style={styles.headerContainerStraight}>
                <Image
                    style={styles.headerLOGO}
                    source={commonStyles.logos.x}
                    resizeMode="contain"
                />

                <Image
                    style={styles.headerBanner}
                    source={{uri: commonStyles.baseDIR + props.banner}}
                    resizeMode="cover"
                />
            </View>
        )
    else
        return (
            <View style={styles.headerContainer}>
                <Image
                    style={styles.headerLOGO}
                    source={commonStyles.logos.x}
                    resizeMode="contain"
                />
                <Text style={styles.headerTitle}>{props.title}</Text>
            </View>
        )
}