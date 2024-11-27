const request = require("supertest");

const app = require ("./app");

describe("GET /books", () =>{
    it("should return a list of books", async () => {
        const response = await request(app).get("/books");
        expect(response.status).toBe(200);
        expect(response.body.message).toBe("list of books");
    });
});


describe("GET /authors", () => {
    it("should return a list of authors", async () => {
        const response = await request(app).get("/authors");
        expect(response.status).toBe(200);
        expect(response.body.message).toBe("list of authors");
    });
});


describe("GET /unknown", () => {
    it("should return 404 for unknown routes", async () => {
        const response = await request(app).get("/unknown");
        expect(response.status).toBe(404);
    });
});

