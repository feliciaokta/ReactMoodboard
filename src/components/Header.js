import React from 'react';
import styled from 'styled-components';
import ForestIcon from '@mui/icons-material/Forest';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import TextsmsIcon from '@mui/icons-material/Textsms';
import FaceIcon from '@mui/icons-material/Face';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


function Header() {
  return (
    <Wrapper>
      
      <LogoWrapper>
        <IconButton>
          <ForestIcon />
        </IconButton>
      </LogoWrapper>

      <HomePageButton>
        <a href="/">Home</a>
      </HomePageButton>

      <FollowingButton>
        <a href="/">Saved</a>
      </FollowingButton>

      <SearchWrapper>
        <SearchBarWrapper>
          
          <IconButton>
            <SearchIcon />
          </IconButton>

          <form>
            <input type="text" />
            <button type="submit"></button>
          </form>
        
        </SearchBarWrapper>
      </SearchWrapper>

      <IconsWrapper>

        <IconButton>
          <NotificationsIcon />
        </IconButton>

        <IconButton>
          <TextsmsIcon />
        </IconButton>

        <IconButton>
          <FaceIcon />
        </IconButton>

        <IconButton>
          <KeyboardArrowDownIcon />
        </IconButton>

      </IconsWrapper>
    
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  padding: 12px 4px 4px 16px;
  background-color: white;
  color: black;
`

const LogoWrapper = styled.div`
  .MuiIconButton-root {
    color: green;
    font-size: 32px;
  }
`

const HeaderButton = styled.div`
  display: flex;
  height: 48px;
  min-width: 123px;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
`

const HomePageButton = styled(HeaderButton)`
  background-color: black;

  a {
      text-decoration: none;
      color: white;
      font-weight: 700;
  }
`

const FollowingButton = styled(HeaderButton)`
  background-color: white;

  a {
    text-decoration: none;
    color: black;
    font-weight: 700;
  }

  :hover {
    background-color: #e1e1e1;
  }
`

const SearchWrapper = styled.div`
  flex: 1;
`

const SearchBarWrapper = styled.div`
  background-color: #efefef;
  display: flex;
  height: 48px;
  width: 98%;
  border-radius: 50px;
  border: none;
  padding-left: 10px;
  margin-right: 10px;

  form {
    display: flex;
    flex: 1;
  }

  form > input {
    background-color: transparent;
    border: none;
    width: 100%;
    margin-left: 5px;
    font-size: 16px;
  }

  form > button {
    display: none;
  }
`
// TODO:
// media query for icons & searchbar
// when screen is 768px and above, searchbar margin right is 0 and padding right is 10px
// when screen is phone-sized, icons on the right will move into the dropdown

const IconsWrapper = styled.div`
  margin-left: 10px;
  margin-right: 10px;
`