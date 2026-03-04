import { vi } from "vitest";
import { config } from "@vue/test-utils";

// Mock de useCyberSound
vi.mock("../composables/useCyberSound", () => ({
  useCyberSound: () => ({
    playClick: vi.fn(),
    playHover: vi.fn(),
    playSuccess: vi.fn(),
    playError: vi.fn(),
  }),
}));

// Mock de vue-i18n
vi.mock("vue-i18n", () => ({
  useI18n: () => ({
    t: (key) => key,
    locale: { value: "es" },
  }),
}));

// Configuración global
config.global.mocks = {
  $t: (msg) => msg,
};
