interface Book {
  title: string;
  author: string;
  year: number;
}

function updateBook(book: Book, update: Partial<Book>): Book {
  return { ...book, ...update };
}

type StatusType = "success" | "error" | "loading";

let statusMessages: Record<StatusType, string>;

statusMessages = {
  success: "操作が完了しました",
  error: "エラーが発生しました",
  loading: "読み込み中です",
};

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

type SimpleProduct = Pick<Product, "id" | "name">;

const productInfo: SimpleProduct = {
  id: 1,
  name: "aaa",
};
