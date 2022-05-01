const UserService = require('./../../app/services/UserService')
describe("Tests for UserService", () => {
    test("1. Create a new user using the UserService", () => {
        const user = UserService.create(1, "david2508", "David")
        expect(user.username).toBe("david2508")
        expect(user.name).toBe("David")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    });

    test("2. Get all user data in a list", () => {
        const user = UserService.create(1, "david2508", "David")
        const userInfoInList=UserService.getInfo(user)
        expect (userInfoInList[0]).toBe(1)
        expect(userInfoInList[1]).toBe("david2508")
        expect (userInfoInList[2]).toBe("David")
        expect (userInfoInList[3]).toBe("Sin bio")
        });
    
        test("3. Update username", () => {
            const user = UserService.create(1, "david2508", "David")
            UserService.updateUserUsername(user, "merino25")
            expect(user.username).toBe("merino25")
            
            });
        
            test("4. Given a list of users give me the list of usernames", () => {
                const user1=UserService.create(1, "davidmerino1", "David")
                const user2 = UserService.create(1,"davidmerino2", "David")
                const user3 = UserService.create(1,"davidmerino3", "David")
                const usernames =UserService.getAllUsernames([user1, user2, user3])
                expect (usernames).toContain("davidmerino1")
                expect (usernames).toContain("davidmerino2")
                expect (usernames).toContain("davidmerino3")
                })
})