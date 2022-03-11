import React from 'react'
import Card from '../../img/Card.svg'
import bitcoinImage from '../../img/token/bitcoin.svg'
import ethereumImage from '../../img/token/ethereum.svg'
import usdcImage from '../../img/token/usdc.svg'
import devTokenImage from '../../img/token/devtoken.svg'
import masterCardImage from '../../img/card/mastercard.svg'
import americanExpressCardImage from '../../img/card/american-express.svg'
import visaCardImage from '../../img/card/visa.svg'
import twitterImage from '../../img/twitter.svg'

interface HomeProps {}

const Milestone: React.FC = ({ children }) => {
  return <li className="flex gap-4 before:content-['❝']">{children}</li>
}

const MilestoneInfo = ({ className }: { className?: string }) => {
  return (
    <div className={`grid justify-center gap-4 ${className}`}>
      <div className="grid grid-cols-milestone gap-4">
        <div>Apr.</div>
        <ul>
          <Milestone>Announce the first project</Milestone>
          <Milestone>Staking with ETH</Milestone>
        </ul>
      </div>
      <div className="grid grid-cols-milestone gap-4">
        <div>Jun.</div>
        <ul>
          <Milestone>Start unlocking perks</Milestone>
          <Milestone>Dynamic sTokens as a generative membership</Milestone>
        </ul>
      </div>
      <div className="grid grid-cols-milestone gap-4">
        <div>Q3</div>
        <ul>
          <Milestone>3 or more projects across multiple sectors</Milestone>
          <Milestone>Integration with Niwa</Milestone>
        </ul>
      </div>
      <div className="grid grid-cols-milestone gap-4">
        <div>Q4</div>
        <ul>
          <Milestone>Expand the payment gateways</Milestone>
          <Milestone>Renewal Stakes.social</Milestone>
        </ul>
      </div>
    </div>
  )
}

const PurchaseInfo = () => {
  return (
    <div className="grid grid-rows-2 gap-4 w-full">
      <div className="flex justify-between gap-8">
        <img src={devTokenImage} width={50} height={50} />
        <img src={bitcoinImage} width={50} height={50} />
        <img src={ethereumImage} width={50} height={50} />
        <img src={usdcImage} width={50} height={50} />
      </div>
      <div className="flex justify-between gap-8">
        <img src={visaCardImage} width={60} height={60} />
        <img src={masterCardImage} width={60} height={60} />
        <img src={americanExpressCardImage} width={60} height={60} />
      </div>
    </div>
  )
}

const Hero = () => {
  return (
    <div className="grid md:grid-cols-2 gap-2 mx-8">
      <div className="flex flex-col items-start justify-between order-last md:order-first gap-8">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">Get a premium membership NFT and join a club</h2>
        <section>
          <h3 className="text-2xl md:text-4xl mb-4">Dropping</h3>
          <p className="text-accent font-accent leading-none">4.22</p>
        </section>
        <section>
          <h3 className="text-xl md:text-3xl mb-4">Purchase with</h3>
          <div className="box-content ">
            <PurchaseInfo />
          </div>
        </section>
      </div>
      <div className="flex flex-col items-center order-first md:order-last">
        <img src={Card} className="object-fill" />
      </div>
    </div>
  )
}

const Home: React.FC<HomeProps> = () => {
  return (
    <div className="flex flex-col gap-48">
      <Hero />
      <MilestoneInfo className="text-xl md:text-2xl" />
      <div className="mx-auto">
        <a href="https://twitter.com/devprtcl" target="_blank" rel="noopener noreferrer">
          <img src={twitterImage} width={50} height={50} />
        </a>
      </div>
      <aside>
        <p className="text-xs text-center">
          All emojis designed by{' '}
          <a href="https://openmoji.org/" target="_blank" rel="noopener noreferrer">
            OpenMoji
          </a>{' '}
          – the open-source emoji and icon project. License:{' '}
          <a href="https://creativecommons.org/licenses/by-sa/4.0/#" target="_blank" rel="noopener noreferrer">
            CC BY-SA 4.0
          </a>
        </p>
      </aside>
    </div>
  )
}

export default Home
