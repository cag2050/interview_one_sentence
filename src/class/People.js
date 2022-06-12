import Person from "./Person"

class People {
    #privateField
    publicField
    // 私有成员
    #person

    constructor() {
        this.#person = new Person()
        console.log(this.#person.publicField)
        this.publicField = "publicField_People"
    }

    printName() {
        // 访问私用成员的public方法
        return this.#person.getName()
    }

    #privateMethod() {
        return "#privateMethod"
    }
}

export default People
