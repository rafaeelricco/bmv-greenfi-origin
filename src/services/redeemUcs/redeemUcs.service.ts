import { RedeemUcsDTO } from './types/redeemUcs.dto'
import { RedeemUcsEntity } from './types/redeemUcs.entity'

type Response = {
   status: number
   data: RedeemUcsEntity | null
   message?: string
}

export async function redeemUcsService(data: RedeemUcsDTO): Promise<Response> {
   const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/ucs/redeem`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
         'Content-Type': 'application/json',
         Authorization: `${process.env.API_TOKEN}`
      }
   })

   const responseData = await response.json()

   if (response.status !== 200) {
      return {
         status: response.status,
         data: null,
         message: responseData.message || 'Error in redeem UCS'
      }
   }

   return {
      status: response.status,
      data: responseData
   }
}
