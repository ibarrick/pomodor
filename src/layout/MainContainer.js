import React from 'react'
import styled from 'styled-components'
import Container from '@material-ui/core/Container'
import { useTheme } from '@material-ui/core'
import { Switch, Route, Redirect } from 'react-router-dom'

const BackLayer = styled.div`
  height: 100vh;
  background: ${({ theme }) => theme.palette.primary.main};
`

const FrontLayer = styled.main`
  position: relative;
  top: 127px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  height: calc(100% - 127px);
  background: #fff;
  overflow: auto;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px,
    rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;

  ${({ theme }) => theme.breakpoints.up('sm')} {
    position: absolute;
    top: 64px;
    right: 0;
    z-index: 1100;
    border-top-left-radius: 33px;
    border-top-right-radius: 0;
    width: calc(100% - 92px);
    min-height: calc(100vh - 64px);
    background: #fff;
  }
`

const MainContainer = () => {
  const theme = useTheme()

  return (
    <BackLayer theme={theme}>
      <FrontLayer theme={theme}>
        <Container>
          <Switch>
            <Route exact path="/">
              <Redirect to="/timer" />
            </Route>

            <Route path="/timer">
              <div>Timer</div>
            </Route>

            <Route path="/stats">
              <div>Stats</div>
            </Route>
          </Switch>
          <Route path="/settings">
            <div>Settings</div>
          </Route>
        </Container>
      </FrontLayer>
    </BackLayer>
  )
}

export { MainContainer }