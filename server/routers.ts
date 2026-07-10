import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { getDb } from "./db";
import { products } from "../drizzle/schema";
import { eq, asc } from "drizzle-orm";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),

  products: router({
    list: publicProcedure.query(async () => {
      const db = await getDb();
      if (!db) return [];
      return db.select().from(products).orderBy(asc(products.sortOrder));
    }),

    featured: publicProcedure.query(async () => {
      const db = await getDb();
      if (!db) return [];
      return db
        .select()
        .from(products)
        .where(eq(products.featured, true))
        .orderBy(asc(products.sortOrder));
    }),

    bySlug: publicProcedure
      .input((val: unknown) => {
        if (typeof val !== "string") throw new Error("slug must be a string");
        return val;
      })
      .query(async ({ input }) => {
        const db = await getDb();
        if (!db) return null;
        const result = await db
          .select()
          .from(products)
          .where(eq(products.slug, input))
          .limit(1);
        return result[0] ?? null;
      }),
  }),
});

export type AppRouter = typeof appRouter;
