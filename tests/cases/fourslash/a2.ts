/// <reference path='fourslash.ts'/>

// @Filename: foo.ts
////interface /*1*/IFoo { age: number; }
////class /*2*/IFoo { constructor(name: string){} }
////namespace /*3*/IFoo { export interface Z {} }

////enum /*4*/IBoo { A }
////namespace /*5*/IBoo { export interface Z { age: number } }

////var ifoo: IFoo = { age: 1 };
////var a: IBoo.Z = { age: 3 };
////var iboo: IBoo = IBoo.A;

verify.baselineQuickInfo();