import { useEffect, useState } from "react";
import Alert from "@mui/material/Alert";

// ジェネリック型で返却データを定義
type ApiResponse<T> = {
  status: string;
  data: T;
};

class ApiWrapper<T> {
  private response: ApiResponse<T>;

  // API のレスポンスをラップして扱う
  constructor(response: ApiResponse<T>) {
    this.response = response;
  }

  getData(): T {
    return this.response.data;
  }

  isSuccess(): boolean {
    return this.response.status === "success";
  }
}

const ApiWrapperComponent = () => {
  const [userWrapper, setUserWrapper] = useState<ApiWrapper<string> | null>(
    null
  );

  useEffect(() => {
    const mockApiResponseSuccess: ApiResponse<string> = {
      status: "success",
      data: "ユーザー情報を取得しました",
    };

    const mockApiResponseError: ApiResponse<string> = {
      status: "error",
      data: "エラーが発生しました",
    };

    const apiResult =
      Math.random() > 0.5 ? mockApiResponseSuccess : mockApiResponseError;

    console.log(apiResult);

    const wrapper = new ApiWrapper(apiResult);
    setUserWrapper(wrapper);
  }, []);

  if (!userWrapper) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {userWrapper.isSuccess() ? (
        <p>
          <Alert severity="success">{userWrapper.getData()}</Alert>
        </p>
      ) : (
        <p>
          <Alert severity="error">{userWrapper.getData()}</Alert>
        </p>
      )}
    </>
  );
};

export default ApiWrapperComponent;
