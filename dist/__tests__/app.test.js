"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../app"));
let username;
describe("users", () => {
    const userData = {
        first_name: "Kunle",
        last_name: "Shobowale",
        username: "kunleckt",
        date_of_birth: "01/10/2009"
    };
    test("create user", async () => {
        const response = await (0, supertest_1.default)(app_1.default)
            .post("/api/users")
            .send(userData);
        console.log(response.body);
        username = response.body.savedUser.username;
        expect(response.status).toBe(200);
        expect(response.body.success).toBe(true);
        expect(response.body.message).toBe("A User has been created");
    });
    test("get all users", async () => {
        const response = await (0, supertest_1.default)(app_1.default)
            .get("/api/users");
        expect(response.status).toBe(200);
    });
    test("delete a user", async () => {
        const response = await (0, supertest_1.default)(app_1.default)
            .delete(`/api/${username}`);
        expect(response.status).toBe(200);
    });
});
