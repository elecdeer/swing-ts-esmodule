import {describe, expect, test} from "vitest";
import {sayHey} from "./hey";

describe("hey test", () => {
	test("sayHey", async () => {
		expect((await sayHey())).toBe("hey!!");
	})
})