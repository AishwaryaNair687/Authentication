import Head from 'next/head'
import Forgot from "./elements/forgotform";
export default function Home() {
  return (
    <div className="flex flex-col-reverse sm:flex-col-reverse md:flex-row lg:flex-row xl:flex-row items-center md:justify-between justify-center ">
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Authentication</title>
        <link rel="icon" href="https://pbs.twimg.com/profile_images/1368576519950376969/hcirLZmb_400x400.jpg" />
      </Head>
      <Forgot/>
</div>
  )
}
