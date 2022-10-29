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
    // TODO: return an enhanced object **WITHOUT** implementing `valueOf` or `toString`.
    // Note: Implementing `toString` and `valueOf` will NOT be allowed in this function.
    const item = {
      name: rawObject.name,
      age: rawObject.age,

      [Symbol.toPrimitive](coercionType) {
        const types = {
          string: `[name=${JSON.stringify(this.name)},age=${JSON.stringify(this.age)}]`,
          number: this.age
        }
        return types[coercionType] || types.string
      }
    }
    return item;
  }
}

module.exports = ObjectMethodsService;