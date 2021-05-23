(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"./src/docs/documentation/maths/factorial.en.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i}));var a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/esm.js")),c={};function i(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object.assign({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"factorial"},"Factorial"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"What is Factorial?")),Object(o.b)("p",null,"The factorial of a positive integer n, denoted by n!, is the product of all positive integers less than or equal to n."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"n! = n * (n - 1) * (n - 2) * (n - 3) ... 3 * 2 * 1")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Example")),Object(o.b)("p",null,"The factorial of 0! is 1 The factorial of 5! is 5 ",Object(o.b)("em",{parentName:"p"}," 4 ")," 3 ",Object(o.b)("em",{parentName:"p"}," 2 ")," 1 = 120."),Object(o.b)("p",null,"Write a function to calculate factorial of n using iteration."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Java")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"public class Factorial {\n  public static void main(String[] args) {\n    System.out.println(factorial(0) == 1);\n    System.out.println(factorial(1) == 1);\n    System.out.println(factorial(2) == 2);\n    System.out.println(factorial(3) == 6);\n  }\n\n  /**\n   * calculate factorial of n using iteration\n   *\n   * @param n the number\n   * @return the factorial of {@code n}\n   */\n  public static long factorial(int n) {\n    long fact = 1;\n\n    for (int i = 1; i <= n; i++) {\n      fact *= i;\n    }\n    \n    return fact;\n  }\n}\n")))}i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/docs/documentation/maths/factorial.en.mdx"}}),i.isMDXComponent=!0}}]);
//# sourceMappingURL=src-docs-documentation-maths-factorial-en.8c24fd80ddc924413b3c.js.map