(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./src/docs/documentation/assignments/assignment1.mdx":function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return i}));var a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/esm.js")),b={};function i(t){var e=t.components,n=Object(a.a)(t,["components"]);return Object(r.b)("wrapper",Object.assign({},b,n,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"assignment1"},"Assignment1"),Object(r.b)("p",null,"Write a function that:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"accepts an array of non-negative integers"),Object(r.b)("li",{parentName:"ul"},"returns the second largest integer in the array"),Object(r.b)("li",{parentName:"ul"},"return -1 if there is no second largest")),Object(r.b)("p",null,"The signature of the function is ",Object(r.b)("inlineCode",{parentName:"p"},"int f(int[] a)"),":"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},"Input array"),Object(r.b)("th",{parentName:"tr",align:"left"},"Return"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},"{1, 2, 3, 4}"),Object(r.b)("td",{parentName:"tr",align:"left"},"3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},"{4, 1, 2, 3}"),Object(r.b)("td",{parentName:"tr",align:"left"},"3")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},"{1, 1, 2, 2}"),Object(r.b)("td",{parentName:"tr",align:"left"},"1")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},"{1, 1}"),Object(r.b)("td",{parentName:"tr",align:"left"},"-1")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},"{1}"),Object(r.b)("td",{parentName:"tr",align:"left"},"-1")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},"{}"),Object(r.b)("td",{parentName:"tr",align:"left"},"-1")))),Object(r.b)("h3",{id:"solution"},"Solution"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"public class Assignment1 {\n  public static void main(String[] args) {\n    System.out.println(f(new int[]{1, 2, 3, 4}) == 3);\n    System.out.println(f(new int[]{4, 1, 2, 3}) == 3);\n    System.out.println(f(new int[]{1, 1, 2, 2}) == 1);\n    System.out.println(f(new int[]{1, 1}) == -1);\n    System.out.println(f(new int[]{1}) == -1);\n    System.out.println(f(new int[]{}) == -1);\n  }\n\n  public static int f(int[] a) {\n    int max1 = -1;\n    int max2 = -1;\n\n    for (int i = 0; i < a.length; i++) {\n      if (a[i] > max1) {\n        max2 = max1;\n        max1 = a[i];\n      } else if (a[i] > max2 && a[i] != max1) {\n        max2 = a[i];\n      }\n    }\n\n    return max2;\n  }\n}\n")))}i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/docs/documentation/assignments/assignment1.mdx"}}),i.isMDXComponent=!0}}]);
//# sourceMappingURL=src-docs-documentation-assignments-assignment1.642ba40dd7f301615f87.js.map