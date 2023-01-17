import { ThemeProvider } from 'styled-components' 
import { Button } from "./components/Button"

import { GlobalStyle } from './Styles/global'
import { defaultTheme } from './Styles/themes/default'


export function App() {


  return (
      <ThemeProvider theme={defaultTheme}>
      <Button variant="success" />
      <Button variant="danger" />
      <Button variant="primary" />
      <Button variant="secondary"/>
      <Button />

      <GlobalStyle />
      </ThemeProvider>

  )
}
