"use strict";
const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");

describe("ekp-nestjst:app", () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, "../generators/app"))
      .withPrompts({ someAnswer: true });
  });

  it("creates files", () => {
    assert.file([".helm/values.yaml"]);
    assert.file([".gitignore"]);
    assert.file([".env"]);
  });
});
