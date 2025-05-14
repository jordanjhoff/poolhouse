import { SignJWT, jwtVerify } from 'jose'

const secret = process.env.JWT_SECRET
if (!secret) throw new Error('Missing JWT_SECRET')

const encoder = new TextEncoder()
const key = encoder.encode(secret)

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('10000d')
    .sign(key)
}

type SessionPayload = {
    userId: string
    name?: string
  }
  
  export async function decrypt(token?: string): Promise<SessionPayload | null> {
    if (!token) return null
  
    try {
      const { payload } = await jwtVerify(token, key)
      return payload as SessionPayload
    } catch (e) {
      console.error('Session decryption failed:', e)
      return null
    }
  }