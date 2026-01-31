import { Input, TextField } from "@mui/material";
import { useState } from "react";

const SummerTime = () => {
  const nowDate = new Date();
  const initialDate = nowDate.toISOString().slice(0, 10);
  const [dateValue, setDateValue] = useState<string>(initialDate);
  const summerTime = new Date("1951-08-11");

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDateValue(event.target.value);
  };

  // memo: サマータイム実施日を入力した際の表示確認用

  return (
    <>
      <TextField defaultValue={"現在日時"} fullWidth />
      <TextField
        defaultValue={nowDate.toString()}
        disabled={true}
        fullWidth
      />
      <TextField
        defaultValue={new Date(dateValue).toString()}
        disabled={true}
        fullWidth
      />
      <TextField defaultValue={"サマータイム"} disabled={true} fullWidth />
      <TextField
        defaultValue={summerTime.toString()}
        disabled={true}
        fullWidth
      />
      <Input type="date" value={dateValue} onChange={onChangeHandler} />
    </>
  );
};

export default SummerTime;
