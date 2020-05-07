import Layout from '../components/layout'
import { Box, Text, Heading, Link } from 'theme-ui'
import { default as NextLink } from 'next/link'

function FAQ () {
  return (
    <Layout>
      <Box sx={{ maxWidth: '700px' }}>
      <Heading sx={{ my: [5], fontSize: [7] }}>
        FAQ
      </Heading>
      <Box sx={{ my: [5] }}>
        <Heading sx={{ my: [3], fontSize: [5] }}>
          Are you a nonprofit?
        </Heading>
        <Text sx={{ fontSize: [3] }}>
          Yes. We are a registered non-profit public benefit corporation in California. Our 501(3)(c) status is pending.
          Our commitment and responsability is to the public's interest in a safe and stable climate, not to shareholders.
        </Text>
      </Box>
      <Box sx={{ my: [5] }}>
        <Heading sx={{ my: [3], fontSize: [5] }}>
          How are you funded?
        </Heading>
        <Text sx={{ fontSize: [3] }}>
          Our current list of support over $5k includes seed funding from a 
          Carbon180 Entrepreneur in Residence Fellowship to our founder, 
          a donation from Hampus Jakobsson, and a donation from a private individual 
          who has a personal connection to our founder and would prefer to remain anonymous 
          but whom is not known publicly and has no business interests in carbon removal or climate policy. 
          We also have support committed from Incite Labs, 
          pending IRS approval of our 501(c)(3) status.
        </Text>
      </Box>
      <Box sx={{ my: [5] }}>
        <Heading sx={{ my: [3], fontSize: [5] }}>
          Are you a verifier?
        </Heading>
        <Text sx={{ fontSize: [3] }}>
          No, we are not a verifier. Several organizations act as third-party verifiers
          in the space of carbon removal and carbon offsets. We play a different role.
          We validate the scientific integrity of projects and technologies.
          Our focus is understanding, quantifying, and clarifying the underlying data and science. 
          Using this information, we help guide future procurement and deployment.
        </Text>
      </Box>
      <Box sx={{ my: [5] }}>
        <Heading sx={{ my: [3], fontSize: [5] }}>
          What are your qualifications?
        </Heading>
        <Text sx={{ fontSize: [3] }}>
          Our team...
        </Text>
      </Box>
      <Box sx={{ my: [5] }}>
        <Heading sx={{ my: [3], fontSize: [5] }}>
          Who designed this website?
        </Heading>
        <Text sx={{ fontSize: [3] }}>
          We've been working with <Link href='https://cidsgn.co'>Cast Iron Design</Link>. They are incredible. 
          They developed the brand and design system and we've worked collaboratively 
          on the site design and implementation. Talk to them about your next project. Seriously.
        </Text>
      </Box>
      </Box>
    </Layout>
  )
}

export default FAQ