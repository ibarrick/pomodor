import React from 'react'
import styled from 'styled-components'
import { Box, useTheme } from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite'
import TwitterIcon from '@material-ui/icons/Twitter'
import GitHubIcon from '@material-ui/icons/GitHub'
import coffee from './coffee.jpg'

export const Footer = () => {
  const theme = useTheme()

  return (
    <Container>
    </Container>
  )
}

const Container = styled.footer`
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 5px;
  padding-top: 20px;
`

const Text = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 0;
  flex: 0 0 auto;
`

const Heart = styled(FavoriteIcon)`
  margin: 0 2px;
  position: relative;
  bottom: 4px;
`

const CoffeeLink = styled.a`
  width: 150px;
  margin: auto;
  margin-bottom: 5px;
`

const CoffeeImage = styled.img`
  width: 100%;
  border-radius: 5px;
`

const Twitter = styled(TwitterIcon)`
  fill: ${({ theme }) =>
    theme.palette.type === 'dark' ? '#a0a0a0' : '#757575'};
`

const GitHub = styled(GitHubIcon)`
  fill: ${({ theme }) =>
    theme.palette.type === 'dark' ? '#a0a0a0' : '#757575'};
`
