import { Input, TextField } from "@mui/material";
import { useState } from "react";

const SummerTime = () => {
  const nowDate = new Date();
  const [dateValue, setDateValue] = useState<string>(nowDate.toString());
  const SummerTime = new Date("1951/8/11");

  const onChangeHandller = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDateValue(event.target.value);
  };

  return (
    <>
      <TextField defaultValue={"まだ途中"} fullWidth />
      <TextField defaultValue={"現在日時"} disabled={true} fullWidth />
      <TextField defaultValue={new Date(dateValue)} disabled={true} fullWidth />
      <TextField defaultValue={"サマータイム"} disabled={true} fullWidth />
      <TextField
        defaultValue={SummerTime.toString()}
        disabled={true}
        fullWidth
      />
      <Input type="date" value={dateValue} onChange={onChangeHandller} />
    </>
  );
};

export default SummerTime;
