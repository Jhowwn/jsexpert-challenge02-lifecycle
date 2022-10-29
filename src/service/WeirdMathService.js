class WeirdMathService {
  getWeirdBooleanNumberMath(boolean, number) {
    // TODO: implement function in order to get the expected result in WeirdMathService.test.js
    const result = boolean + number 
    return result;
  }

  getWeirdStringBooleanMath(string, boolean) {
    // TODO: implement function in order to get the expected result in WeirdMathService.test.js
    const result = string + boolean
    return result;
  }

  getWeirdStringBooleanMath2(string, boolean) {
    // TODO: implement function in order to get the expected result in WeirdMathService.test.js
    const result = string - boolean
    return result;
  }

  getWeirdStringNumberMath(string, number) {
    // TODO: implement function in order to get the expected result in WeirdMathService.test.js
    const result = string - number
    return result;
  }
}

module.exports = WeirdMathService;
