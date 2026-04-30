const auth = {
  isAuthenticated: async () => false,
  me: async () => null,
  logout: async (redirectUrl) => {
    if (redirectUrl && typeof window !== "undefined") {
      window.location.href = redirectUrl;
    }
  },
  redirectToLogin: async (redirectUrl) => {
    if (redirectUrl && typeof window !== "undefined") {
      window.location.href = redirectUrl;
    }
  },
};

export const db = {
  auth,
  entities: new Proxy(
    {},
    {
      get: () => ({
        filter: async () => [],
        get: async () => null,
        create: async () => ({}),
        update: async () => ({}),
        delete: async () => ({}),
        list: async () => [],
      }),
    },
  ),
  integrations: {
    Core: {
      UploadFile: async () => ({ file_url: "" }),
    },
  },
};

export const base44 = db;
export default db;
