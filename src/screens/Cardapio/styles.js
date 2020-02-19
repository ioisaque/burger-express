import commonStyles from '~/assets/styles/commonStyles';

export default {
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  categoryWrapper: {
    width: '100%',
    marginVertical: 8,
  },
  categoryInlineItems: {
    width: '95%',
    marginBottom: 10,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  categoryTitle: {
    ...commonStyles.text,
    fontSize: 25,
    fontWeight: 'bold',
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
    ...commonStyles.text,
    marginBottom: 5,
  },
  itemPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: commonStyles.colors.success,
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
};
