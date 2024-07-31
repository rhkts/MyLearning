//3-36 インターセクション型の正義
//CombinedType型はメンバーである型をすべて同時に満たす
type CombinedType = TypeA & TypeB & TypeC;

//3-37 インターセクション型の利用
type Engine = {
  engineType: string;
  volume: number;
};

type Wheels = {
  wheelCount: number;
};

type Car = Engine & Wheels;

const myCar: Car = {
  engineType: "V8",
  volume: 3000,
  wheelCount: 4,
};

console.log(myCar.wheelCount); // 4

// -- zenn --
//## インターセクション型
//組み合わされたすべての型の特性を持つ。記法としては「AかつB」の型だと考えるとよい。

//ダミー
type TypeA = {
  type_a: string;
};
type TypeB = {
  type_b: number;
};
type TypeC = {
  type_c: boolean;
};
type MultiType = TypeA & TypeB & TypeC;

//`Cpu`型と`Memory`型の2つの型をインターセクション型を使って結合して、`Pc`型を作成。
//`Pc`型は、`Cpu`型と`Memory`型の両方がもつプロパティを含む必要がある。
type Cpu = {
  cpu: string;
  core: number;
};
type Memory = {
  memorySize: number;
};
type PcType = Cpu & Memory;

const myPc: PcType = {
  cpu: "intel",
  core: 8,
  memorySize: 16,
};

//片方の型を持つプロパティが指定されていなければエラー。
const friendPc: PcType = {
  cpu: "intel",
  core: 8,
};
// 型 '{ cpu: string; core: number; }' を型 'Pc' に割り当てることはできません。
//  プロパティ 'memorySize' は型 '{ cpu: string; core: number; }' にありませんが、型 'Memory' では必須です。

//候補にPc型が表示される
console.log(`cpu: ${myPc.cpu} core: ${myPc.core} memory: ${myPc.core}`); // cpu: intel core: 8 memory: 16
