import {PrismaClient} from '@prisma/client'

export const db = globalThis.prisma || new PrismaClient(); // it check if there exists a global prisma client, if not it creates one because of NextJs reloading 
// mechanism for every edge request 

if (process.env.NODE_ENV !== 'production') globalThis.prisma = db