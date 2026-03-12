import { betterAuth } from "better-auth"
import { PrismaClient } from "../generated/prisma/client"
import { prismaAdapter } from "@better-auth/prisma-adapter"
import { PrismaPg } from "@prisma/adapter-pg"

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
})

export const prisma = new PrismaClient({
  adapter,
})

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),

  emailAndPassword: {
    enabled: true,
  },

  trustedOrigins:["http://localhost:3000"]
})