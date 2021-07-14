import Head from 'next/head'

import Signinform from "./signinform";
export default function Home() {
  return(
  <div className="flex flex-col-reverse sm:flex-col-reverse md:flex-row lg:flex-row xl:flex-row items-center md:justify-between justify-center ">
  <Head>
    <title>Authentication</title>
    <link rel="icon" href="https://pbs.twimg.com/profile_images/1368576519950376969/hcirLZmb_400x400.jpg" />
  </Head>
  <Signinform/>
  </div>
  )
}
