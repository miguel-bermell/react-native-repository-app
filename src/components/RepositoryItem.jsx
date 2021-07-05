import React from 'react'
import { Image, View, StyleSheet } from 'react-native'
import StyledText from './StyledText.jsx'
import RepositoryStats from './RepositoryStats.jsx'
import theme from '../theme.js'
const RepositoryItemHeader = ({ avatarUrl, id, company, email, name, tel }) => (
  <View style={{ flexDirection: 'row', paddingBottom: 2 }}>
    <View style={{ paddingRight: 10 }}>
      <Image style={styles.image} source={{ uri: avatarUrl }} />
    </View>
    <View style={{ flex: 1 }}>
      <StyledText fontSize='subheading' style={styles.company}>{company}</StyledText>
      <StyledText blue>Email: {email}</StyledText>
      <StyledText>Name: {name}</StyledText>
      <StyledText>Tel: {tel}</StyledText>
    </View>

  </View>
)
const RepositoryItem = (props) => (
  <View key={props.id} style={styles.container}>
    <RepositoryItemHeader {...props} />
    <RepositoryStats {...props} />
  </View>
)

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingVertical: 5
  },
  strong: {
    color: '#09f',
    fontWeight: 'bold',
    marginBottom: 3
  },
  company: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-start',
    marginVertical: 5,
    borderRadius: 5,
    overflow: 'hidden'
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 5
  }
})

export default RepositoryItem
