import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

const MuiDialog = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <Button variant="contained" onClick={() => setOpen(true)}>
        ダイアログを開く
      </Button>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>ダイアログのタイトル</DialogTitle>
        <DialogContent>ダイアログの内容</DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>ダイアログを閉じる</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default MuiDialog;
