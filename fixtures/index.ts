import { test as base, request } from "@playwright/test";

export interface Fixtures {}

export const test = base.extend<Fixtures>({
  page: async ({ page }, use) => {
    const loggerContext = await request.newContext({
      baseURL: "http://localhost:8080",
    });

    await loggerContext.post("/log", {
      data: {
        message: `Starting test with title "${test.info().title}"`,
      },
    });

    await use(page);
  }
});
