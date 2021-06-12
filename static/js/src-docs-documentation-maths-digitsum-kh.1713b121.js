(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"./src/docs/documentation/maths/digitsum.kh.mdx":function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return a}));var i=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),s=(t("./node_modules/react/index.js"),t("./node_modules/@mdx-js/react/dist/esm.js")),u={};function a(n){var e=n.components,t=Object(i.a)(n,["components"]);return Object(s.b)("wrapper",Object.assign({},u,t,{components:e,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"digitsum"},"DigitSum"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"What is Digit Sum?")),Object(s.b)("p",null,"In mathematics, the digit sum of a natural number in a given number base is the sum of all its digits."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Example")),Object(s.b)("p",null,"The digit sum of the decimal number 9045 would be ",Object(s.b)("inlineCode",{parentName:"p"},"9 + 0 + 4 + 5 = 18"),"."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Java")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-js"},"public class DigitSum {\n  public static void main(String[] args) {\n    System.out.println(digitSum(-123) == 6);\n    System.out.println(digitSumRecursion(123) == 6);\n  }\n\n  public static int digitSum(int n) {\n    n = n < 0 ? -n : n;\n    int sum = 0;\n\n    while (n != 0) {\n      sum += n % 10;\n      n /= 10;\n    }\n\n    return sum;\n  }\n\n  public static int digitSumRecursion(int n) {\n    n = n < 0 ? -n : n;\n    return n < 10 ? n : n % 10 + digitSumRecursion(n / 10);\n  }\n}\n")))}a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/docs/documentation/maths/digitsum.kh.mdx"}}),a.isMDXComponent=!0}}]);
//# sourceMappingURL=src-docs-documentation-maths-digitsum-kh.2996003d06fac7d5f91f.js.map