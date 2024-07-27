//2-6 JavaScriptにおけるデータ型
//JavaScriptでは以下のコードは許される(代入できてしまう)
let age2_6 = 35;
age2_6 = "35";

//2-7 JavaScriptにおける暗黙の型変換
let num = 3 + true;
console.log(num);
//結果: 4 (←!?!?)
//true を数値に暗黙的に変換して 1 として扱う
//よって、3 + true = 3 + 1 になる
