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
    ...commonStyles.text,
    fontSize: 18,
    fontWeight: 'bold',
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
    ...commonStyles.text,
    fontSize: 18,
    fontWeight: 'bold',
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
    ...commonStyles.text,
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 5,
  },
  totalPrice: {
    ...commonStyles.text,
    fontSize: 23,
    fontWeight: 'bold',
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
