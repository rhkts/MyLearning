import { SubmitHandler, useForm } from "react-hook-form";
import { ReactHookHormSampleInputsTypes } from "./types";

export default function ReactHookHormSampleInputs() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, dirtyFields },
  } = useForm<ReactHookHormSampleInputsTypes>({
    defaultValues: {
      name: "",
      gender: "",
      mail: "",
      tell: "",
      mode: "view",
    },
  });
  const onSubmit: SubmitHandler<ReactHookHormSampleInputsTypes> = (data) =>
    console.log(data);

  const onRadioChange = () => {
    const hasChanged = hasChangedField();

    if (hasChanged) {
      alert("名前以外が変更されています。");
      return;
    }
  };

  const hasChangedField = () => {
    const keys = Object.keys(dirtyFields ?? {});
    console.log(dirtyFields);
    console.log(keys);
    return keys.some((key) => key !== "name" && key !== "mode");
  };

  return (
    <div className="mx-auto max-w-md p-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-2" onChange={onRadioChange}>
          <div className="flex items-center gap-4">
            <label className="inline-flex items-center gap-2 text-sm text-zinc-800">
              <input
                type="radio"
                value="view"
                {...register("mode", { required: "モードを選択してください" })}
                className="h-3.5 w-3.5 accent-zinc-900"
              />
              <span>参照</span>
            </label>

            <label className="inline-flex items-center gap-2 text-sm text-zinc-800">
              <input
                type="radio"
                value="edit"
                {...register("mode", { required: "モードを選択してください" })}
                className="h-3.5 w-3.5 accent-zinc-900"
              />
              <span>編集</span>
            </label>
          </div>

          {errors.mode?.message && (
            <p role="alert" className={"mt-1 text-sm text-red-600"}>
              {errors.mode.message}
            </p>
          )}
        </div>

        <div>
          <h1 className="text-lg font-semibold text-zinc-900">プロフィール</h1>
        </div>
        <div className="space-y-2">
          <label
            htmlFor="氏名"
            className="block text-sm font-medium text-zinc-800"
          >
            名前
          </label>
          <input
            id="name"
            {...register("name", { required: true, maxLength: 15 })}
            placeholder="氏名を入力してください"
            className="block w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900
                       shadow-sm outline-none transition
                       focus:border-zinc-900 focus:ring-2 focus:ring-zinc-200"
          />

          {errors.name && (
            <p className="mt-1 text-sm text-red-600">必須入力項目です</p>
          )}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="gender"
            className="block text-sm font-medium text-zinc-800"
          >
            性別
          </label>
          <select
            id="gender"
            {...register("gender")}
            className="block w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900
                       shadow-sm outline-none transition
                       focus:border-zinc-900 focus:ring-2 focus:ring-zinc-200"
            defaultValue=""
          >
            <option value="" disabled>
              Select...
            </option>
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="other">other</option>
          </select>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="メール"
            className="block text-sm font-medium text-zinc-800"
          >
            メールアドレス
          </label>
          <input
            id="mail"
            {...register("mail", { required: true, maxLength: 50 })}
            placeholder="メールアドレスを入力してください"
            className="block w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900
                       shadow-sm outline-none transition
                       focus:border-zinc-900 focus:ring-2 focus:ring-zinc-200"
          />

          {errors.mail && (
            <p className="mt-1 text-sm text-red-600">必須入力項目です</p>
          )}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="電話番号"
            className="block text-sm font-medium text-zinc-800"
          >
            TEL
          </label>
          <input
            id="tel"
            {...register("tell")}
            placeholder="メールアドレスを入力してください"
            className="block w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900
                       shadow-sm outline-none transition
                       focus:border-zinc-900 focus:ring-2 focus:ring-zinc-200"
          />

          {errors.tell && (
            <p className="mt-1 text-sm text-red-600">必須入力項目です</p>
          )}
        </div>

        <div className="flex items-center justify-end gap-3 pt-2">
          <button
            type="reset"
            className="rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-800
                       hover:bg-zinc-50 active:bg-zinc-100"
            onClick={() => reset()}
          >
            Reset
          </button>
          <button
            type="submit"
            className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-semibold text-white
                       hover:bg-zinc-800 active:bg-zinc-950
                       focus:outline-none focus:ring-2 focus:ring-zinc-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
