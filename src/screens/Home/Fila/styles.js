import commonStyles from '~/assets/styles/commonStyles';

export default {
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    FilaWrapper: {
        flex: 1,
        marginVertical: 8,
    },
    FilaContent: {
        width: '100%',
        marginBottom: 5,
        paddingHorizontal: 15,
    },
    FilaHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'space-between',
    },
    FilaTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: commonStyles.colors.black,
    },
    FilaData: {
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
    payStamp: {
        width: 85,
        height: 50,
        marginLeft: 5,
        marginRight: 35,
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
}