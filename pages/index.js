import {
  Layout,
  Heading,
  Row,
  Column,
  Callout,
  Button,
  Link,
  formatDate,
} from '@carbonplan/components'

import { keyframes } from '@emotion/react'
import Splash from '../components/splash'
import Highlight from '../components/highlight'
import { RotatingArrow } from '@carbonplan/icons'
import { Flex, Image, Grid, Box, Divider } from 'theme-ui'

import { research1, research2, highlights, press } from '../data/recent'

const sx = {
  borderTop: {
    borderStyle: 'solid',
    borderWidth: '0px',
    borderTopWidth: '1px',
    borderColor: 'muted',
  },
  highlight: {
    mb: [3],
    fontSize: [3, 3, 3, 4],
    fontFamily: 'heading',
    letterSpacing: 'smallcaps',
    textTransform: 'uppercase',
    color: 'secondary',
  },
}

const Index = () => {
  return (
    <Layout
      links={'homepage'}
      title={'CarbonPlan'}
      description={
        'Improving the transparency and scientific integrity of climate solutions with open data and tools.'
      }
    >
      <Box
        sx={{
          mt: [-1, 0, 0, 0],
          mb: [-1, 6, 7, 8],
        }}
      >
        <Splash />
      </Box>
      <Row as='section' sx={{ position: 'relative', mt: [1] }}>
        <Column
          start={[2, 2, 3, 3]}
          width={[1]}
          sx={{
            height: '100%',
            display: ['none', 'initial', 'initial', 'initial'],
          }}
        >
          <VerticalArrow />
        </Column>
        <Column start={[1, 4, 6, 6]} width={[6, 5, 6, 6]}>
          <Row columns={[6, 5, 6, 6]}>
            <Column start={[1]} width={[5, 4, 4, 4]}>
              <Box
                as='p'
                sx={{
                  fontSize: [3, 3, 3, 4],
                  lineHeight: '1.25',
                  pt: ['2px', 0, 0, 0],
                  mb: [2, 3, 0, 0],
                  mt: [3, 4, 4, 5],
                }}
              >
                Balamer est une société de recherche et de conseil en
                investissements finançiers indépendante au sens de la directive
                MIF2. La société s'appuie sur la finance comportementale, la
                logique et les données pour développer une approche financière
                qui produira des rendements réels nettement plus élevés que ceux
                de la plupart des investisseurs pour le niveau de risque
                souhaité.
              </Box>
            </Column>
          </Row>
        </Column>
      </Row>
      <Row sx={{ mt: [5, 7, 8, 9] }}>
        <Column
          start={[1, 2]}
          width={[6, 8, 10, 10]}
          sx={{
            pt: [5, 6, 7, 8],
            ...sx.borderTop,
          }}
        />
      </Row>
      <Box sx={{ display: ['none', 'none', 'initial', 'initial'] }}>
        <Row sx={{ mb: [5, 6, 7, 8] }}>
          <Column start={[1, 2]} width={[6, 4]}>
            <Flex
              sx={{
                height: '100%',
                alignContent: 'space-between',
                flexWrap: 'wrap',
              }}
            >
              <Box sx={{ width: '100%', mt: [0, 0, '-2px', '-4px'] }}>
                <WelcomeArrow />
              </Box>
              <Box
                sx={{
                  width: '100%',
                  fontSize: [3, 4, 5, 6],
                  letterSpacing: 'heading',
                  lineHeight: 'heading',
                }}
              >
                We’re a nonprofit that analyzes climate solutions based on the
                best available science and data.
              </Box>
            </Flex>
          </Column>
          <Column start={[1, 7]} width={[6, 5]}>
            <Box>
              <Box as='p' variant='styles.p' sx={{ mt: [0] }}>
                Addressing the climate crisis requires action on several fronts.
                In addition to rapidly achieving deep emission reductions, we
                also need gigaton-scale carbon removal and sound strategies for
                adapting to climate change. Our solutions must respect science
                and support just outcomes. We no longer have time for approaches
                that don’t work.
              </Box>
              <Box as='p' variant='styles.p' sx={{ mb: [0] }}>
                Our <Link href='/team'>team</Link> analyzes the design and
                implementation of climate programs across the public and private
                sectors. Our work focuses primarily on carbon offsets, carbon
                removal, and climate risks. In all three areas, we aim to ensure
                the scientific integrity and transparency of climate services
                and solutions.
              </Box>
            </Box>
          </Column>
        </Row>
      </Box>
      <Box sx={{ display: ['initial', 'initial', 'none', 'none'] }}>
        <Row>
          <Column start={[1, 1, 2, 2]} width={[6, 3]}>
            <Box
              as='h2'
              variant='styles.h2'
              sx={{ mt: [0, 0, 0, 0], mb: [0, 3, 5, 5] }}
            >
              Our mission
            </Box>
          </Column>
        </Row>
        <Row sx={{ mb: [4, 5, 6, 7] }}>
          <Column start={[1, 2, 1, 1]} width={[6, 5, 5, 5]}>
            <Box sx={{ pb: [1] }}>
              <Box as='p' variant='styles.p' sx={{ mb: [4, 5, 6, 7] }}>
                Addressing the climate crisis requires action on several fronts.
                In addition to rapidly achieving deep emission reductions, we
                also need gigaton-scale carbon removal and sound strategies for
                adapting to climate change. Our solutions must respect science
                and support just outcomes. We no longer have time for approaches
                that don’t work.
              </Box>
            </Box>
          </Column>
        </Row>
        <Row sx={{ mb: [5, 5, 6, 7], pb: [1, 0, 0, 0] }}>
          <Column start={[1, 2, 2, 2]} width={[1]}>
            <WelcomeArrowMobile />
          </Column>
          <Column start={[2, 3, 2, 2]} width={[5, 4, 3, 3]}>
            <Box
              sx={{
                width: '100%',
                fontSize: ['28px', 5, 5, 5],
                letterSpacing: 'heading',
                lineHeight: 'heading',
              }}
            >
              We’re a nonprofit that analyzes climate solutions based on the
              best available science and data.
            </Box>
          </Column>
        </Row>
        <Row sx={{ mb: [4, 5, 6, 7] }}>
          <Column start={[1, 2, 1, 1]} width={[6, 5, 5, 5]}>
            <Box sx={{ pb: [1] }}>
              <Box as='p' variant='styles.p' sx={{ mb: [2] }}>
                Our <Link href='/team'>team</Link> analyzes the design and
                implementation of climate programs across the public and private
                sectors. Our work focuses primarily on carbon offsets, carbon
                removal, and climate risks. In all three areas, we aim to ensure
                the scientific integrity and transparency of climate services
                and solutions.
              </Box>
            </Box>
          </Column>
        </Row>
      </Box>
      <Row>
        <Column start={[1, 2]} width={[6, 10, 10, 10]}>
          <Divider sx={{ width: '100%', my: [0] }}></Divider>
        </Column>
      </Row>
       
      <Row sx={{ mt: [4, 5, 6, 7] }}>
        <Column start={[1, 2]} width={[6, 3]}>
          <Box as='h2' variant='styles.h2' sx={{ my: [0, 0, 0] }}>
            How we work
          </Box>
        </Column>
      </Row>
      <Row sx={{ mt: [4, 5, 6, 7], mb: [5, 6, 7, 8] }}>
        <Column start={[2, 3]} width={[6, 5, 3, 3]} sx={{ mb: [4, 5, 0, 0] }}>
          <Box sx={{ fontSize: [3, 3, 3, 4] }}>
            <Box
              sx={{
                mb: [3],
                fontFamily: 'heading',
                letterSpacing: 'smallcaps',
                color: 'red',
              }}
            >
              RESEARCH
            </Box>
            <Box as='p'>
              We study fundamental climate science topics relevant to both
              mitigation and adaptation, and we analyze the implementation of
              climate programs to ensure that they line up with the science.
            </Box>
          </Box>
        </Column>
        <Column start={[2, 6]} width={[6, 5, 3, 3]} sx={{ mb: [4, 5, 0, 0] }}>
          <Box sx={{ fontSize: [3, 3, 3, 4] }}>
            <Box
              sx={{
                mb: [3],
                fontFamily: 'heading',
                letterSpacing: 'smallcaps',
                color: 'yellow',
              }}
            >
              POLICY
            </Box>
            <Box as='p'>
              We work with companies, nonprofits, and government organizations
              to develop robust climate programs, and we collaborate with
              journalists to raise public awareness and promote accountability.
            </Box>
          </Box>
        </Column>
        <Column start={[2, 9]} width={[6, 5, 3, 3]}>
          <Box sx={{ fontSize: [3, 3, 3, 4] }}>
            <Box
              sx={{
                mb: [3],
                fontFamily: 'heading',
                letterSpacing: 'smallcaps',
                color: 'teal',
              }}
            >
              SOFTWARE
            </Box>
            <Box>
              We build open tools and resources to surface critical dimensions
              of climate solutions with interactive data and visuals, and we
              contribute to high-leverage open science and open source
              ecosystems.
            </Box>
          </Box>
        </Column>
      </Row>
      <Row>
        <Column start={[1, 2]} width={[6, 8, 10, 10]}>
          <Divider sx={{ width: '100%', my: [0] }}></Divider>
        </Column>
      </Row>
      <Row sx={{ mt: [4, 5, 6, 7], mb: [5, 6, 7, 8] }}>
        <Column
          start={[1, 1, 2, 2]}
          width={[6, 4, 5, 5]}
          sx={{ mb: [3, 0, 0, 0] }}
        >
          <Box
            sx={{
              fontSize: [6],
              mb: [2, 0, 0],
            }}
          >
            <Button
              href='/research'
              size={'lg'}
              suffix={<RotatingArrow sx={{ color: 'red' }} />}
            >
              <span>
                Browse our
                <br />
                latest research
              </span>
            </Button>
          </Box>
        </Column>
        <Column start={[1, 5, 7, 7]} width={[6, 4, 5, 5]}>
          <Box sx={{ fontSize: [6] }}>
            <Button
              href='/press'
              size={'lg'}
              suffix={<RotatingArrow sx={{ color: 'yellow' }} />}
            >
              <span>
                Read our press <br /> coverage
              </span>
            </Button>
          </Box>
        </Column>
      </Row>
      <Row>
        <Column start={[1, 2]} width={[6, 8, 10, 10]}>
          <Divider sx={{ width: '100%', my: [0] }}></Divider>
        </Column>
      </Row>
      <Row sx={{ my: [5, 6, 7, 8] }}>
        <Column
          start={[2, 2, 3, 3]}
          width={[5, 5, 3, 3]}
          sx={{ mb: [4, 5, 0, 0] }}
        >
          <Box sx={{ fontSize: [3, 3, 3, 4] }}>
            <Box
              sx={{
                mb: [3],
                fontFamily: 'heading',
                letterSpacing: 'smallcaps',
                color: 'teal',
                textTransform: 'uppercase',
              }}
            >
              Research highlights
            </Box>
            {highlights.map((d, i) => (
              <Button
                key={i}
                href={d.href}
                size='md'
                sx={{ mb: [1] }}
                suffix={<RotatingArrow />}
              >
                {d.label}
              </Button>
            ))}
          </Box>
        </Column>
        <Column start={[2, 2, 8, 8]} width={[5, 5, 3, 3]}>
          <Box sx={{ fontSize: [3, 3, 3, 4] }}>
            <Box
              sx={{
                mb: [3],
                fontFamily: 'heading',
                letterSpacing: 'smallcaps',
                textTransform: 'uppercase',
                color: 'red',
              }}
            >
              Press highlights
            </Box>
            {press.map((d, i) => (
              <Button
                key={i}
                href={d.href}
                size='md'
                sx={{ mb: [1] }}
                suffix={<RotatingArrow />}
              >
                {d.label}
              </Button>
            ))}
          </Box>
        </Column>
      </Row>
      <Row>
        <Column start={[1, 2]} width={[6, 8, 10, 10]}>
          <Divider sx={{ width: '100%', my: [0] }}></Divider>
        </Column>
      </Row>
      <Row sx={{ mt: [4, 5, 6, 7] }}>
        <Column start={[1, 2]} width={[6, 10]}>
          <Box as='h2' variant='styles.h2' sx={{ my: [0, 0, 0] }}>
            Explore more
          </Box>
        </Column>
      </Row>
      <Row sx={{ mt: [4, 4, 5, 6] }}>
        <Column start={[1, 3]} width={[3, 4, 2, 2]} sx={{ mb: [3, 0, 0, 0] }}>
          <Box sx={{ fontSize: [3, 3, 3, 4], mb: [3, 3, 0] }}>
            <Callout href='/team' label='team'>
              Read about our team members
            </Callout>
          </Box>
        </Column>
        <Column start={[4, 5, 5, 5]} width={[3, 4, 2, 2]}>
          <Box sx={{ fontSize: [3, 3, 3, 4], mb: [3, 3, 0] }}>
            <Callout href='https://github.com/carbonplan' label='github'>
              Check out our open source code
            </Callout>
          </Box>
        </Column>
        <Column start={[1, 7]} width={[3, 4, 2, 2]}>
          <Box sx={{ fontSize: [3, 3, 3, 4], mb: [3, 3, 0] }}>
            <Callout href='/funding' label={'funding'}>
              Learn about our sources of funding
            </Callout>
          </Box>
        </Column>
        <Column start={[4, 5, 9, 9]} width={[3, 4, 2, 2]}>
          <Box sx={{ fontSize: [3, 3, 3, 4], mb: [3, 3, 0] }}>
            <Callout href='/donate' label={'donate'}>
              Donate to our organization
            </Callout>
          </Box>
        </Column>
      </Row>
      <Row as='section' sx={{ mt: [5, 6, 7, 8], pb: [1] }}>
        <Column
          start={[1, 1, 2, 2]}
          width={[6, 8, 10, 10]}
          sx={{ pt: [5, 6, 7, 8], ...sx.borderTop }}
        >
          <Row columns={[6, 8, 10, 10]}>
            <Column start={[2, 2, 1, 1]} width={[5, 4, 3, 3]}>
              <Box sx={{ fontSize: [3, 3, 3, 4] }}>
                <Box
                  sx={{
                    ...sx.highlight,
                  }}
                >
                  Annual report
                </Box>
                <Button
                  href='https://files.carbonplan.org/CarbonPlan-Annual-Report-2023.pdf'
                  size='md'
                  sx={{ mb: [3] }}
                  suffix={<RotatingArrow />}
                >
                  Our 2023 in review
                </Button>
                <Box
                  sx={{
                    fontSize: [3, 3, 3, 4],
                    fontFamily: 'body',
                    letterSpacing: 'body',
                    lineHeight: '1.25',
                  }}
                >
                  Read all about our work and impact from last year and learn
                  more about our organization.
                </Box>
              </Box>
            </Column>
            <Column start={[2, 2, 5, 5]} width={[5, 3, 3, 3]}>
              <Box sx={{ fontSize: [3, 3, 3, 4] }}>
                <Box
                  sx={{
                    ...sx.highlight,
                    mt: [6, 6, 0, 0],
                  }}
                >
                  Research highlights
                </Box>
                {highlights.map((d, i) => (
                  <Button
                    key={i}
                    href={d.href}
                    size='md'
                    sx={{ mb: [1] }}
                    suffix={<RotatingArrow />}
                  >
                    {d.label}
                  </Button>
                ))}
              </Box>
            </Column>
            <Column start={[2, 5, 8, 8]} width={[5, 3, 3, 3]}>
              <Box sx={{ fontSize: [3, 3, 3, 4] }}>
                <Box
                  sx={{
                    ...sx.highlight,
                    mt: [6, 6, 0, 0],
                  }}
                >
                  Press highlights
                </Box>
                {press.map((d, i) => (
                  <Button
                    key={i}
                    href={d.href}
                    size='md'
                    sx={{ mb: [1] }}
                    suffix={<RotatingArrow />}
                  >
                    {d.label}
                  </Button>
                ))}
              </Box>
            </Column>
          </Row>
        </Column>
      </Row>
    </Layout>
  )
}

function InternalNav({ children, href, final = false }) {
  return (
    <Link
      href={href}
      sx={{
        fontSize: [2, 3, 3, 4],
        textTransform: 'uppercase',
        fontFamily: 'heading',
        display: 'inline-block',
        letterSpacing: 'smallcaps',
        borderStyle: 'solid',
        borderColor: 'primary',
        borderWidth: '0px',
        borderBottomWidth: '1px',
        pb: [1],
        mr: [final ? 0 : 4],
        mb: [3, 2, 2, 2],
        color: 'primary',
        textDecoration: 'none',
        transition: 'border-color 0.15s, color 0.15s',
        '@media (hover: hover) and (pointer: fine)': {
          '&:hover': {
            borderColor: 'secondary',
            color: 'secondary',
          },
        },
        '@media (hover: none) and (pointer: coarse)': {
          '&:hover': {
            color: 'primary',
          },
        },
      }}
    >
      {children}
    </Link>
  )
}

const animate = keyframes({
  '0%': {
    transform: 'translateY(0px)',
  },
  '10%': {
    transform: 'translateY(10px)',
  },
  '20%': {
    transform: 'translateY(0px)',
  },
  '100%': {
    transform: 'translateY(0px)',
  },
})

function VerticalArrow() {
  return (
    <Box
      sx={{
        justifyContent: 'center',
        alignContent: 'flex-end',
        display: 'flex',
        height: '100%',
        mt: ['-7px', '-7px', '-7px', '-78px'],
        transform: ['none', 'none', 'none', 'scale(1.4)'],
      }}
    >
      <Box
        sx={{
          display: 'block',
          alignSelf: 'flex-end',
          transform: 'translateY(0px)',
          animationDuration: '4000ms',
          animationPlayState: 'running',
          animationDelay: '1000ms',
          animationName: animate.toString(),
          animationIterationCount: 'infinite',
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '112px',
            fill: 'none',
            stroke: 'primary',
          }}
        >
          <svg x='0px' y='0px' width='27px' height='100%'>
            <circle vectorEffect='non-scaling-stroke' cx='13' cy='11' r='9' />
            <line
              vectorEffect='non-scaling-stroke'
              x1='13'
              x2='13'
              y1='20'
              y2='111'
            />
            <line
              vectorEffect='non-scaling-stroke'
              x1='2'
              x2='13'
              y1='100'
              y2='111'
            />
            <line
              vectorEffect='non-scaling-stroke'
              x1='24'
              x2='13'
              y1='100'
              y2='111'
            />
          </svg>
        </Box>
      </Box>
    </Box>
  )
}

const animateRight = keyframes({
  '0%': {
    transform: 'translateX(0px)',
  },
  '10%': {
    transform: 'translateX(10px)',
  },
  '20%': {
    transform: 'translateX(0px)',
  },
  '100%': {
    transform: 'translateX(0px)',
  },
})

const animateDown = keyframes({
  '0%': {
    transform: 'translateY(0px)',
  },
  '10%': {
    transform: 'translateY(10px)',
  },
  '20%': {
    transform: 'translateY(0px)',
  },
  '100%': {
    transform: 'translateY(0px)',
  },
})

function WelcomeArrow() {
  return (
    <Grid
      columns={[
        '30px 1fr 30px',
        '30px 1fr 30px',
        '30px 1fr 30px',
        '40px 1fr 40px',
      ]}
      gap={[0]}
      sx={{
        animationDuration: '4000ms',
        animationPlayState: 'running',
        animationDelay: '1000ms',
        animationName: animateRight.toString(),
        animationIterationCount: 'infinite',
      }}
    >
      <Box
        sx={{
          stroke: 'primary',
          display: 'inline-block',
          fill: 'none',
          width: ['30px', '30px', '30px', '40px'],
          height: ['30px', '30px', '30px', '40px'],
          strokeWidth: 1,
        }}
      >
        <svg x='0px' y='0px' viewBox='0 0 20 20'>
          <circle vectorEffect='non-scaling-stroke' cx='10' cy='10' r='8.5' />
        </svg>
      </Box>
      <Box
        sx={{
          stroke: 'primary',
          display: 'inline-block',
          fill: 'none',
          width: [
            'calc(100% + 30px)',
            'calc(100% + 42px)',
            'calc(100% + 32px)',
            'calc(100% + 42px)',
          ],
          ml: '-2px',
        }}
      >
        <Box
          as='svg'
          x='0px'
          y='0px'
          width='100%'
          sx={{ height: ['30px', '30px', '30px', '40px'] }}
        >
          <line x1='0' x2='100%' y1='50%' y2='50%' />
        </Box>
      </Box>
      <Box
        sx={{
          display: 'inline-block',
          float: 'right',
          stroke: 'primary',
          fill: 'none',
          width: ['30px', '30px', '30px', '40px'],
          height: ['30px', '30px', '30px', '40px'],
          strokeWidth: 1,
        }}
      >
        <svg x='0px' y='0px' viewBox='0 0 20 20'>
          <line
            vectorEffect='non-scaling-stroke'
            x1='9'
            y1='0'
            x2='20'
            y2='10'
          />
          <line
            vectorEffect='non-scaling-stroke'
            x1='9'
            y1='20'
            x2='20'
            y2='10'
          />
        </svg>
      </Box>
    </Grid>
  )
}

function WelcomeArrowMobile() {
  return (
    <Box
      sx={{
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'space-between',
        height: '100%',
        display: 'flex',
        animationDuration: '4000ms',
        animationPlayState: 'running',
        animationDelay: '1000ms',
        animationName: animateDown.toString(),
        animationIterationCount: 'infinite',
        mt: '1px',
      }}
    >
      <Box sx={{ flex: 0, width: '100%', height: '20px' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            stroke: 'primary',
            strokeWidth: 1,
            fill: 'none',
          }}
        >
          <svg x='0px' y='0px' width='23px' height='22px'>
            <circle vectorEffect='non-scaling-stroke' cx='11' cy='10' r='9' />
          </svg>
        </Box>
      </Box>
      <Box sx={{ height: '100%', transform: 'translateX(calc(50% - 1px))' }}>
        <Box
          sx={{
            height: '100%',
            width: '1px',
            mt: '-1px',
            pb: '5px',
            bg: 'primary',
          }}
        />
      </Box>
      <Box
        sx={{
          position: 'relative',
          top: '10px',
          mt: '-21px',
          width: '100%',
          height: '20px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            stroke: 'primary',
            strokeWidth: 1,
            fill: 'none',
          }}
        >
          <svg x='0px' y='0px' width='23px' height='22px'>
            <line
              vectorEffect='non-scaling-stroke'
              x1='1'
              x2='11'
              y1='0'
              y2='10'
            />
            <line
              vectorEffect='non-scaling-stroke'
              x1='21'
              x2='11'
              y1='0'
              y2='10'
            />
          </svg>
        </Box>
      </Box>
    </Box>
  )
}

export default Index
