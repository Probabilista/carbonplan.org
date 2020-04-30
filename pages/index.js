import Layout from '../components/layout'
import Carbon from '../components/carbon'
import { Box, Text, Heading, Link, Grid } from 'theme-ui'
import { default as NextLink } from 'next/link'

const link = {
  width: 'fit-content',
  color: 'text',
  fontSize: [4],
  borderStyle: 'solid',
  borderColor: 'primary',
  borderWidth: '0px',
  borderBottomWidth: '1px',
  display: 'block',
  '&:hover': {
    color: 'secondary',
    borderBottomWidth: '1px',
    borderColor: 'secondary'
  }
}

function Index () {
  return (
    <Layout>
      <Grid gap={['12px', '16px', '64px']} columns={[1, null, '400px 1fr']}>
        <Box>
          <Heading sx={{ my: [5], fontSize: [6] }}>
            Data and science for carbon removal
          </Heading>
          <Heading sx={{ my: [5], fontSize: [4] }}>
            Improving the transparency and scientific integrity of carbon removal 
            and climate solutions through open data and tools
          </Heading>
          <NextLink href='/about'><Link sx={link}>About</Link></NextLink>
          <NextLink href='/team'><Link sx={link}>Team</Link></NextLink>
          <NextLink href='/research'><Link sx={link}>Research</Link></NextLink>
          <Link href='https://reports.carbonplan.now.sh/' sx={link}>Reports</Link>
          <NextLink href='/faq'><Link sx={link}>FAQ</Link></NextLink>
        </Box>
        <Box sx={{ display: ['none', 'none', 'inherit'], pr: [4], pt: [5] }}>
          <Carbon></Carbon>
        </Box>
      </Grid>
    </Layout>
  )
}

export default Index