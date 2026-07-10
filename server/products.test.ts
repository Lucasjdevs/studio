import { describe, expect, it, vi, beforeEach } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// Mock getDb so tests run without a real database
vi.mock("./db", () => ({
  getDb: vi.fn().mockResolvedValue({
    select: vi.fn().mockReturnValue({
      from: vi.fn().mockReturnValue({
        orderBy: vi.fn().mockResolvedValue([
          {
            id: 1,
            name: "Pedra Hijau",
            slug: "pedra-hijau",
            category: "Piscinas e Revestimentos",
            description: "Pedra natural da Indonésia com tons verdes únicos.",
            shortDescription: "Pedra natural da Indonésia com tons verdes únicos.",
            imageUrl: "/manus-storage/pedra-hijau.webp",
            whatsappMessage: "Olá! Tenho interesse na Pedra Hijau.",
            featured: true,
            sortOrder: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 2,
            name: "Pedra Hitam",
            slug: "pedra-hitam",
            category: "Piscinas e Revestimentos",
            description: "Pedra natural com tons escuros e sofisticados.",
            shortDescription: "Pedra natural com tons escuros e sofisticados.",
            imageUrl: "/manus-storage/pedra-hitam.webp",
            whatsappMessage: "Olá! Tenho interesse na Pedra Hitam.",
            featured: true,
            sortOrder: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ]),
        where: vi.fn().mockReturnValue({
          orderBy: vi.fn().mockResolvedValue([
            {
              id: 1,
              name: "Pedra Hijau",
              slug: "pedra-hijau",
              category: "Piscinas e Revestimentos",
              description: "Pedra natural da Indonésia com tons verdes únicos.",
              shortDescription: "Pedra natural da Indonésia com tons verdes únicos.",
              imageUrl: "/manus-storage/pedra-hijau.webp",
              whatsappMessage: "Olá! Tenho interesse na Pedra Hijau.",
              featured: true,
              sortOrder: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]),
          limit: vi.fn().mockResolvedValue([
            {
              id: 1,
              name: "Pedra Hijau",
              slug: "pedra-hijau",
              category: "Piscinas e Revestimentos",
              description: "Pedra natural da Indonésia com tons verdes únicos.",
              shortDescription: "Pedra natural da Indonésia com tons verdes únicos.",
              imageUrl: "/manus-storage/pedra-hijau.webp",
              whatsappMessage: "Olá! Tenho interesse na Pedra Hijau.",
              featured: true,
              sortOrder: 1,
              createdAt: new Date(),
              updatedAt: new Date(),
            },
          ]),
        }),
      }),
    }),
  }),
}));

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: { protocol: "https", headers: {} } as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };
}

describe("products router", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("products.list returns an array", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);
    const result = await caller.products.list();
    expect(Array.isArray(result)).toBe(true);
  });

  it("products.featured returns featured products", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);
    const result = await caller.products.featured();
    expect(Array.isArray(result)).toBe(true);
    if (result.length > 0) {
      expect(result[0]).toHaveProperty("name");
      expect(result[0]).toHaveProperty("slug");
      expect(result[0]).toHaveProperty("imageUrl");
    }
  });

  it("products.bySlug returns a product or null", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);
    const result = await caller.products.bySlug("pedra-hijau");
    if (result !== null) {
      expect(result).toHaveProperty("name");
      expect(result).toHaveProperty("slug", "pedra-hijau");
    }
  });

  it("products.bySlug throws on non-string input", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);
    await expect(caller.products.bySlug(123 as unknown as string)).rejects.toThrow();
  });
});
