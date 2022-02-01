import supertest from 'supertest';
import app from "../app";


let username: string;

describe("users", () => {
const userData = {
  first_name: "Kunle",
  last_name: "Shobowale",
  username: "kunleckt",
  date_of_birth:"01/10/2009"
};

  test("create user", async () => { 
    const response = await supertest(app)
      .post("/api/users")
      .send(userData);
      console.log(response.body)
      username = response.body.savedUser.username;
    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.message).toBe("A User has been created");

  });

  test("get all users", async () => {

      const response = await supertest(app)
        .get("/api/users")
      expect(response.status).toBe(200);
  });
  
  
  test("delete a user", async () => {
    const response = await supertest(app)
      .delete(`/api/${username}`)
    expect(response.status).toBe(200);

});

})

