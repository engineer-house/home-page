import type { NextPage } from 'next'
import {
  Box,
  Heading,
  HStack,
  Image,
  Link,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'
import EhCard from './components/molucules/EhCard'

const Home: NextPage = () => (
  <>
    <VStack h="100vh" justifyContent="center">
      <Box position="sticky" top="0" pt="4">
        <Heading p="8" as="h2" size="3xl">
          Welcome to{' '}
          <Text display="inline" color="dodgerblue">
            Engineer House!
          </Text>
        </Heading>
      </Box>
      <Heading as="h4" size="lg">
        Get started by scrolling down
      </Heading>
    </VStack>

    <EhCard title="ABOUT">
      <Text m="0" fontSize="lg">
        大阪・長居の一軒家にエンジニアが集まって、電子工作・木工・ソフトウェア開発など、それぞれ思い思いに制作しています。
        <br />
        普段は土日の昼から夕方までを中心に活動中で、たまにイベントも開催しています。
        <br />
        つくるのが好きな方はぜひ、参加してみてください。
      </Text>
    </EhCard>

    <EhCard title="ACCESS">
      <Stack spacing="8">
        <Box h="0" pt="50%" position="relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13136.59566833695!2d135.51735646773676!3d34.60039568387014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f5!3m3!1m2!1s0x6000ddf50e99f2ed%3A0xcc624ea7fe5551e7!2z44Ko44Oz44K444OL44Ki44OP44Km44K5!5e0!3m2!1sja!2sjp!4v1664120955066!5m2!1sja!2sjp"
            width="100%"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{
              filter: 'invert(85%)',
              position: 'absolute',
              top: '0',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          />
        </Box>

        <List spacing="2" textAlign="left">
          <ListItem>
            <HStack alignItems="baseline" spacing="0">
              <ListIcon as={CheckCircleIcon} color="green.500" />
              <Text style={{ textIndent: '-1px' }}>
                お車：3
                台まで停められます。（満車の場合は近隣の駐車場をご利用ください）
              </Text>
            </HStack>
          </ListItem>
          <ListItem>
            <HStack alignItems="baseline" spacing="0">
              <ListIcon as={CheckCircleIcon} color="green.500" />
              <Text style={{ textIndent: '-1px' }}>
                電車：御堂筋線 長居駅 (徒歩 15 分)
                <Box pl="48px">近鉄南大阪線 矢田駅 (徒歩 15 分)</Box>
              </Text>
            </HStack>
          </ListItem>
          <ListItem>
            <HStack alignItems="baseline" spacing="0">
              <ListIcon as={CheckCircleIcon} color="green.500" />
              <Text style={{ textIndent: '-1px' }}>
                レンタサイクル：
                <Link
                  display="contents"
                  color="#598bff"
                  fontWeight="bold"
                  href="https://docomo-cycle.jp/osaka/"
                >
                  大阪バイクシェア
                </Link>
                を利用して、長居駅もしくは矢田駅から自転車を利用できます。
                エンジニアハウス最寄りのバイクステーションは「UR
                サンヴァリエ東長居」です。
              </Text>
            </HStack>
          </ListItem>
        </List>
      </Stack>
    </EhCard>

    <Link
      href="https://lin.ee/rCMzAn7"
      target="_blank"
      rel="noopener noreferrer"
      position="fixed"
      bottom="10"
      right="16vw"
    >
      <Image src="/line.svg" alt="友だち追加" height="16" />
    </Link>
  </>
)

export default Home
