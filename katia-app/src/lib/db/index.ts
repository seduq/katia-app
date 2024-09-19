import { PrismaClient } from "@prisma/client";

declare global {
  var db: PrismaClient | undefined;
}

export const prisma =
  global.db ||
  new PrismaClient({
    log: ["query"],
  });

if (process.env.NODE_ENV !== "production") global.db = prisma;
