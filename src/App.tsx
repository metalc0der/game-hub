import { Grid, GridItem, Show } from "@chakra-ui/react"


function App() {
  return <Grid templateAreas={{ 
    base: `"nav" "main"`,
    lg: `"nav nav" "aside main"`,
   }}>
    <GridItem area='nav' bg='coral'>
      Nav
    </GridItem>
    <GridItem hideBelow="lg" area='aside' bg='gold'>
      Aside
    </GridItem>
    <GridItem area='main' bg='dodgerblue'>
      Main
     </GridItem>
  </Grid>
}

export default App
