//3-11 関数と型
//3-43
function addNumbers(a, b) {
    return a + b;
}

//3-44
function addNumbers(a: number, b: number) {
    return a + b;
}

//3-45
function addNumbers(a: number, b: number): number {
    return a + b;
}

//3-46 関数の戻り値の型エラー
function addNumbers(a: number, b: number): number {
    return a.toString() + b.toString();
}


//3-47 オプショナルパラメータ
function printMessage(message?: string) {
    if (message) {
        console.log(message);
    } else {
        console.log("No message provided");
    }
}

printMessage("Hello World");
printMessage();
// -- zenn --
//## 関数と型
//TypeScriptでは型推論の機能があるので、「関数でも型推論してくれるだろう」という感覚で関数`addNumber`を定義。
function addNumbers(a, b) {
    return a + b;
}
//エラーが発生。
//TypeScriptでは、関数のパラメータに関しては型推論を行うことができない。
//なぜなら`addNumbers`関数の定義から、パラメータ`a`,`b`は初期化されておらず型推論のヒントがない。
//このパラメータ`a`,`b`の型は、関数を書いた人しか正しく推論できない。
//関数が受け取る引数が数値であることを保証するために、パラメータ`a`,`b`に明示的に型を指定する。
//文法は`:型名`。
function addNumbers(a: number, b: number) {
    return a + b;
}
//また、戻り値にも型を明示的に指定することが可能。文法は`関数名(パラメータ):戻り値の型`。
function addNumbers(a: number, b: number): number {
    return a + b;
}

//### オプショナルパラメータ
//オブジェクトのプロパティと同様に`?`を記述することによって、関数パラメータに
//オプショナルな性質を持たすことができる
function alertMessage(message?: string) {
    if (message) {
        alert(message);
    } else {
        alert("No message provided");
    }
}
printMessage("Hello World");
printMessage();

//関数のパラメータに必須のパラメータが存在する場合は、オプショナルパラメータは
//最後に記述する
function alertMessage(caller: string, message?: string) {
    if (message) {
        alert(`${caller}さん: 「${message}」`);
    } else {
        alert(`${caller}さん: 「No message」`);
    }
}
//ちなみに必須パラメータに前にオプショナルパラメータを記述すると
//必須パラメーターを省略可能なパラメーターの後に指定することはできません。
//のエラーとなる
function alertMessage2(message?: string, caller: string) {
    if (message) {
        alert(`${caller}さん: 「${message}」`);
    } else {
        alert(`${caller}さん: 「No message」`);
    }
}
//オプショナルパラメータは複数設定できる。
function alertMessage(caller: string, message1?: string, message2?: string) {
    if (message1) {
        alert(`${caller}さん: 「${message1}、${message2}」`);
    } else {
        alert(`${caller}さん: 「No message」`);
    }
}  