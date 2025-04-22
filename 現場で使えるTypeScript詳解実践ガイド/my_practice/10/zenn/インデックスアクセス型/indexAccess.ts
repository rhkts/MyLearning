const STATUS = ["todo", "working", "done"] as const;
type Status_1 = typeof STATUS;
type Status_2 = (typeof STATUS)[number];

console.log(typeof STATUS[0]);
