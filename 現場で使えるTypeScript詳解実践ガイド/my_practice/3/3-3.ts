//3-9 ユニオン型の宣言
let id: number | string; //number型 と string型のユニオン型
let role: number | string | boolean; //3つ以上のユニオン型

//3-10 ユニオン型の変数へ代入
//OK
id = 10; //number型だからOK
id = "10"; //string型だからOK

//Error
id = true; //boolean型はメンバーに存在していないからエラー

//3-11 ユニオン型とリテラル型
let eventType: "click" | "hover" | "keydown"; //リテラル型のユニオン型
eventType = "click"; //ユニオン型のメンバーである文字列だけ代入可能
eventType = "wheel"; //"wheel"はメンバーに存在しないからエラー

const themeColor: "light" | "dark" | "solarizes" = "dark";
