"use strict";

const lang = document.querySelector("html").lang;

//ifを使った例
if (lang === "ja") {
  //ここでHTMLの<html></html>を取得
  //CSSでいうとタイプセレクタ
  //<option></option>タグのうち、value属性が、"index.html"であるものがマッチする→<option value="index.html">日本語</option>
  document.querySelector('option[value="index.html"').selected = true;
} else if (lang === "en") {
  document.querySelector('option[value="index-en.html"').selected = true;
} else if (lang === "zh") {
  document.querySelector('option[value="index-zh.html"').selected = true;
}

//onChangeイベントが発生するのは、今と違う<option></option>が選択されあた時だけ。
//日本語→日本語はonChangeイベントは発生しない
document.getElementById("form").select.onchange = function () {
  location.href = document.getElementById("form").select.value;
};
