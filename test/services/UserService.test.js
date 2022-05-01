const UserService = require('./../../app/services/UserService')
describe("Tests for UserService", () => {
    test("1. Create a new user using the UserService", () => {
        const user = UserService.create(1, "david2508", "David")
        expect(user.username).toBe("david2508")
        expect(user.name).toBe("David")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    });
})