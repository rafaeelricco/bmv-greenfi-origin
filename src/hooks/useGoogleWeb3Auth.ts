import { CHAIN_NAMESPACES, WALLET_ADAPTERS, WEB3AUTH_NETWORK } from '@web3auth/base'
import { EthereumPrivateKeyProvider } from '@web3auth/ethereum-provider'
import { Web3AuthNoModal } from '@web3auth/no-modal'
import { OpenloginAdapter } from '@web3auth/openlogin-adapter'

import React from 'react'

export const useGoogleWeb3Auth = (): UseGoogleWeb3AuthReturn => {
   const [web3auth, setWeb3auth] = React.useState<Web3AuthNoModal | null>(null)

   React.useEffect(() => {
      const init = async () => {
         try {
            const chainConfig = {
               chainNamespace: CHAIN_NAMESPACES.EIP155,
               chainId: '0x1',
               rpcTarget: 'https://rpc.ankr.com/eth',
               displayName: 'Ethereum Devnet',
               blockExplorerUrl: 'https://etherscan.io/',
               ticker: 'ETH',
               tickerName: 'Ethereum',
               logo: 'https://cryptologos.cc/logos/ethereum-eth-logo.png'
            }

            const privateKeyProvider = new EthereumPrivateKeyProvider({
               config: { chainConfig }
            })

            const web3auth = new Web3AuthNoModal({
               clientId: process.env.WEB3AUTH_CLIENT_ID || 'your_client_id',
               web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_DEVNET,
               privateKeyProvider
            })

            const openloginAdapter = new OpenloginAdapter({
               adapterSettings: {
                  uxMode: 'popup',
                  loginConfig: {
                     google: {
                        verifier: process.env.WEB3AUTH_VERIFIER || 'your_verifier',
                        typeOfLogin: 'google',
                        clientId: process.env.GOOGLE_ID || 'google_id'
                     }
                  }
               }
            })

            web3auth.configureAdapter(openloginAdapter)
            setWeb3auth(web3auth)
            await web3auth.init()
         } catch (error) {
            console.error(error)
         }
      }

      init()
   }, [])

   const getGoogleWallet = async (): Promise<string | undefined> => {
      if (!web3auth) {
         //  toast.error('Web3Auth not initialized yet')
         console.error('Web3Auth not initialized yet')
         return undefined
      }

      try {
         const web3authProvider = await web3auth.connectTo(
            WALLET_ADAPTERS.OPENLOGIN,
            { loginProvider: 'google' }
         )
         if (!web3authProvider) {
            throw new Error('Failed to get Web3Auth provider')
         }

         const accounts = await web3authProvider.request<never, string[]>({
            method: 'eth_accounts'
         })
         if (!accounts || !accounts[0]) {
            throw new Error('Failed to get wallet address')
         }

         return accounts[0]
      } catch (error) {
         console.error('Google wallet generation error:', error)
         //  toast.error('Failed to generate wallet')
         console.error('Failed to generate wallet')
         return undefined
      }
   }

   return { getGoogleWallet }
}

interface UseGoogleWeb3AuthReturn {
   getGoogleWallet: () => Promise<string | undefined>
}
