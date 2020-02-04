import commonStyles from '~/assets/styles/commonStyles';

export default {
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    queueWrapper: {
        flex: 1,
        marginVertical: 8,
    },
    queueContent: {
        width: '100%',
        marginBottom: 5,
        paddingHorizontal: 15,
    },
    queueHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'space-between',
    },
    queueTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: commonStyles.colors.black,
    },
    queueData: {
        fontSize: 16,
        alignSelf: 'flex-end',
        color: commonStyles.colors.black,
    },


    

    itemWrapper: {
        marginBottom: 10,
    },
    itemHeader: {
        width: '100%',
        marginBottom: 5,
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'space-between',
    },
    itemTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: commonStyles.colors.black,
    },
    itemDescrip: {
        fontSize: 16,
        marginBottom: 5,
        color: commonStyles.colors.black,
    },
    itemPrice: {
        fontSize: 20,
        fontWeight: 'bold',
        color: commonStyles.colors.success,
    },


    totalWrapper: {
        marginVertical: 20,
    },
    totalHeader: {
        marginHorizontal: 5,
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'space-between',
    },
    totalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginRight: 5,
        color: commonStyles.colors.black,
    },
    totalPrice: {
        fontSize: 23,
        fontWeight: 'bold',
        color: commonStyles.colors.black,
    },
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
}