//3-2-1 constによる変数宣言
//3-6 constによる変数宣言
const adultAge = 18; //18 という型名になっている。これがリテラル型
const literalBoolean = false; //falseという型

//3-7 リテラル型の変数の代入
let age3_7: number;
age3_7 = adultAge; //number型の変数に代入可能

//3-2-2 型注釈によるリテラル型
//3-8 型注釈によるさまざまなリテラル型
//数値
let adultAge3_8: 18;
adultAge3_8 = 20; //リテラル方以外の値を変数に代入しようとするとエラー→型 '20' を型 '18' に割り当てることはできません。
//文字列
let greet3_2: "Hello"; //リテラル Hello
greet3_2 = "こんにちは"; //型 '"こんにちは"' を型 '"Hello"' に割り当てることはできません。
//真偽
let isTrue: true = true; //リテラル型 true
isTrue = false; //型 'false' を型 'true' に割り当てることはできません。
