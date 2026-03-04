import { describe, it, expect } from "vitest";

describe("Diagnóstico básico", () => {
  it("Vue debe estar disponible", () => {
    const vue = require("vue");
    expect(vue).toBeDefined();
    expect(vue.version).toBeDefined();
    console.log("✅ Vue versión:", vue.version);
  });

  it("El DOM debe funcionar", () => {
    const div = document.createElement("div");
    div.textContent = "test";
    document.body.appendChild(div);
    expect(document.body.contains(div)).toBe(true);
    console.log("✅ DOM funciona correctamente");
  });
});
