import { AuthPage } from '@/components/templates/AuthPage/AuthPage'
import useRedirectByCheck from '@/hooks/useRedirectByCheck'
import Head from 'next/head'


export default function Auth() {
  const { shouldLoadContent } = useRedirectByCheck(true)
  return (
    <>
      <Head>
        <title>Hamsters | {shouldLoadContent ? 'Авторизация' : ''}</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel='icon' type='image/svg' sizes='32x32' href='/img/logo.svg' />
      </Head>
      {shouldLoadContent && <AuthPage />}
    </>
  )
}
