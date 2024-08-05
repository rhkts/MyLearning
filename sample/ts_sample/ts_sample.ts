const data = Math.floor(Math.random() * 100);

if (data % 3 == 0 && data % 3 == 0) {
  console.log("fizbuzz_" + data);
} else if (data % 3 == 0) {
  console.log("fiz_" + data);
} else if (data % 5 === 0) {
  console.log("buz_" + data);
} else {
  console.log(data);
}
