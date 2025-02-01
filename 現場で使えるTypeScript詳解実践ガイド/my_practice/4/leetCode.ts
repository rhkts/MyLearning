// function createTimeoutPromiseWithSuccess(t: number): Promise<string> {
//   return new Promise<string>((resolve, reject) => {
//     const shouldSucceed = Math.random() > 0.5; // 成功か失敗をランダムに決定
//     setTimeout(() => {
//       if (shouldSucceed) {
//         resolve("Success within time limit!");
//       } else {
//         reject("Time Limit Exceeded");
//       }
//     }, t);
//   });
// }

// // 使用例
// async function main() {
//   try {
//     const result = await createTimeoutPromiseWithSuccess(100);
//     console.log(result); // 成功の場合: "Success within time limit!"
//   } catch (error) {
//     console.error(error); // 失敗の場合: "Time Limit Exceeded"
//   }
// }

// main();

function createPromise(t: number): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    const isSucceed = Math.random() > 0.5; //0.5より大きければtrue
    setTimeout(() => {
      if (isSucceed) {
        resolve("成功!");
      } else {
        reject("失敗...");
      }
    }, t);
  });
}

async function main() {
  try {
    const result = await createPromise(100);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

main();
