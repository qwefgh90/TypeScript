/// <reference path='fourslash.ts'/>

// @Filename: foo.ts
////interface IFoo {}
////class IFoo {}
////namespace IFoo { export interface B {} }

////var ifoo: [|IFo/*interfaceDefinition*/o|];

// verify.baselineGoToDefinition("interfaceDefinition");
verify.baselineGetDefinitionAtPosition("interfaceDefinition");

// , "interfaceDefinition1",
// 	"interfaceDefinition2", "interfaceDefinition3"

// verify.findReferencesDefinitionDisplayPartsAtCaretAre([{
// 	"text": "interface",
// 	"kind": "keyword"
// }, {
// 	"text": " ",
// 	"kind": "space"
// }, {
// 	"text": "IFoo",
// 	"kind": "interfaceName"
// }]);