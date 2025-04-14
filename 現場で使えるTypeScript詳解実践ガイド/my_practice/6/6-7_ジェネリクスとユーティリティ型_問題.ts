console.log("-- 問題1 --");
interface Book {
  title: string;
  author: string;
  year: number;
}

function updateBook(book: Book, update: Partial<Book>): Book {
  return { ...book, ...update };
}

let testData1: Book = {
  title: "○○",
  author: "xx先生",
  year: 2025,
};

console.log(
  updateBook(testData1, {
    author: "A先生",
  })
);

console.log("-- 問題2 --");
type statusType = "success" | "error" | "loading";

let statusMessages: Record<statusType, string>;

statusMessages = {
  success: "操作が完了しました",
  error: "エラーが発生しました",
  loading: "読み込み中です",
};

console.log(statusMessages);

console.log("-- 問題3 --");
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

type SimpleProduct = Pick<Product, "id" | "name">;

const productInfo: SimpleProduct = {
  id: 1,
  name: "ノートパソコン",
};

console.log(productInfo);
