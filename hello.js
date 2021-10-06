const sayHello = function (name) {
  console.log("hello, " + name)
}
sayHello("caliban")
sayHello("miranda")
sayHello("ferdinand")

const sayHelloToConsole = function (name) {
  console.log("Hello, " + name)
}
sayHelloToConsole('john')

const returnSayHello = function (name) {
  return "hello, " + name
}
const greeting = returnSayHello('john')
console.log(greeting)