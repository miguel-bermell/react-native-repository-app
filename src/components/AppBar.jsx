import React from 'react'
import { View, StyleSheet } from 'react-native'
import StyledText from './StyledText'
import Constants from 'expo-constants'
import theme from '../theme'
import { Link } from 'react-router-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.appBar.primary,
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight + 10,
    paddingBottom: 10,
  },
  text: {
    color: theme.appBar.textPrimary,
    paddingHorizontal: 10
  }
})

const AppBarTab = ({ active, children, to }) => {
  return (
    <Link to={to}>
      <StyledText fontWeight='bold' style={styles.text}>
        {children}
      </StyledText>
    </Link>
  )
}

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab active to='/'>Clients</AppBarTab>
      <AppBarTab active to='/signin'>Sign In</AppBarTab>
    </View>
  )
}

export default AppBar
