class ObjectMethodsService {
  getEnhancedObject(rawObject) {
    // TODO: return an enhanced object implementing `valueOf` or `toString` depending on the context
    const item = {
      name: rawObject.name,
      age: rawObject.age,

      toString() {
        return `name: ${this.name}, age: ${this.age}`
      },
      valueOf() {
        return `age: ${this.age}`
      },
    }
    return item.age;
  }

  getEnhancedObject2(rawObject) {
    // TODO: return an enhanced object implementing `valueOf` or `toString` depending on the context
    const item = {
      name: rawObject.name,
      age: rawObject.age,

      toString() {
        return `[name="${this.name}",age=${this.age}]`
      },
      toValueOf() {
        return `age: ${this.age}`
      }

    }
    return item;
  }

  getEnhancedObjectWithoutValueOfOrToString(rawObject) {
    // TODO: return an enhanced object **WITHOUT** implementing `valueOf` nor `toString`.
    // Note: Implementing `toString` and `valueOf` will NOT be allowed in this function.
    return null;
  }
}

module.exports = ObjectMethodsService;
