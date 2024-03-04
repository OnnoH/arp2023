import { CssBaseline, Container } from '@mui/material'
import AppHeader from './components/AppHeader'
// import AppRouter from './components/AppRouter'
// import AppFooter from './components/AppFooter'

function App() {

  return (
    <div>
      <CssBaseline />
      <main>
        <Container maxWidth={false} disableGutters>
        <AppHeader />

          {/* <AppRouter /> */}
          {/* <AppFooter /> */}
        </Container>
      </main>
    </div>
  )
}

export default App
