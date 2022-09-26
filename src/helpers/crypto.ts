if (typeof global === "undefined") {
  (global as any) = { crypto };
}

if (typeof window !== "undefined") {
  window.global = global;
}

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import cryptoIsomorphic from "isomorphic-crypto";
import type { createHash as createHashT } from "crypto";

global.crypto = cryptoIsomorphic;

if (typeof window !== "undefined") {
  window.crypto = cryptoIsomorphic;
}

/* eslint-disable @typescript-eslint/no-unsafe-member-access */
export const createHash = cryptoIsomorphic.createHash as typeof createHashT;
