import logo from './logo.svg';
import './App.css';

//recoil root
import React, { useCallback, useEffect } from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

import CharacterCounter from './components/CharacterCounter';
import TodoList from './components/TodoList';

// styled components
import Button from "./css/styled-button";
// styled components

// css
import './css/todoListCss.scss';
import './css/darkmode.scss';

import { ThemeProvider } from 'styled-components';
import { themesAtom } from './atoms/themeAtoms';
import {lightTheme, darkTheme} from './atoms/themeAtoms';
import GlobalStyle from './components/theme';
// css

// theme
import ThemeChange from './components/themeComponents/themeChange';
// theme

function App() {

  const [theme, setTheme] = useRecoilState(themesAtom);

  return (

    // 여기는 atoms랑 selectors 를 가지고 인풋에 텍스트를 집어넣었을 때 상태변화를 보여주는 컴포넌트입니다.
    
        <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
          <GlobalStyle />
        <TodoList />
        {/* <Button color=""
        >common button</Button>
        <Button primary>primary button</Button>
        <Button children={"버튼 텍스트"}></Button> */}
        
        {/* <CharacterCounter /> */}
        {/* <StyledButton>styled-components test</StyledButton> */}
        
        <ThemeChange></ThemeChange>
        </ThemeProvider>
      
    // 여기는 atoms랑 selectors 를 가지고 인풋에 텍스트를 집어넣었을 때 상태변화를 보여주는 컴포넌트입니다.

    
  );
}

export default App;

// 7월 7일 깃 레포지토리 하나 만들어서 소스 업로드 하고 scss, 다크모드에 관한 이슈들 정리해서
// 라벨온 css 건들일 때 소스 공유

// https://velog.io/@velopert/velog-dark-mode