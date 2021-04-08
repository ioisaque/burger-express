import commonStyles from '~/assets/styles/commonStyles';

export default {
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  FilaWrapper: {
    flex: 1,
  },
  FilaContent: {
    width: '100%',
    marginVertical: 5,
    paddingHorizontal: 5,
  },
  FilaHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  FilaTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: commonStyles.colors.black,
  },
  FilaData: {
    alignSelf: 'flex-end',
    ...commonStyles.text,
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
    fontSize: 16,
    fontWeight: 'bold',
    color: commonStyles.colors.black,
  },
  itemDescrip: {
    marginBottom: 5,
    ...commonStyles.text,
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
    color: commonStyles.colors.success,
  },
  payStamp: {
    width: 85,
    height: 50,
    marginLeft: 5,
    marginRight: 35,
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
};
