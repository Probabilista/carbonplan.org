import Layout from '../components/layout'
import { Box, Text, Heading, Link } from 'theme-ui'
import { default as NextLink } from 'next/link'

function Resources (props) {
  return (
    <Layout>
      <Box sx={{ maxWidth: '700px' }}>
        <Heading sx={{ my: [5], fontSize: [6] }}>
          Team
        </Heading>
        <Heading sx={{ my: [3], fontSize: [4] }}>
          Core team
        </Heading>
        <Text>
          Jeremy Freeman, Joe Hamman, Danny Cullenward
        </Text>
        <Heading sx={{ my: [3], fontSize: [4] }}>
          Board
        </Heading>
        <Text>
          Kelly Gannon, Zeke Hausfather
        </Text>
        <Heading sx={{ my: [3], fontSize: [4] }}>
          Collaborators
        </Heading>
        <Text>
          Bill Anderegg, Grayson Badgley, Anna Trugman, Jennifer Wilcox, Helene Pilgore, 
          Noah McQueen, Caleb Woodall, Andrew Bergman, Toly Rinberg, Jane Zelikova
        </Text>
      </Box>
    </Layout>
  )
}

export default Resources