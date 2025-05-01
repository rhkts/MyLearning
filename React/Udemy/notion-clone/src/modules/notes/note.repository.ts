import { supabase } from "@/lib/supabase";

export const noteRepository = {
  async create(userId: string, paramas: { title?: string; parentId?: number }) {
    const { data, error } = await supabase
      .from("notes")
      .insert([
        {
          user_id: userId,
          parent_document: paramas.parentId,
          title: paramas.title,
        },
      ])
      .select()
      .single();

    if (error != null) throw new Error(error.message);

    return data;
  },

  async find(userId: string, parentDocumentId: number) {
    const query = supabase
      .from("notes")
      .select()
      .eq("user_id", userId)
      .order("created_at", { ascending: false });

    //ここでデータ取得
    // console.log("----");
    // console.log((await query).data);
    // console.log("----");

    const { data } =
      parentDocumentId != null
        ? await query.eq("parent_document", parentDocumentId)
        : await query.is("parent_document", null);

    //取得したデータの中から絞り込み
    // console.log("====");
    // console.log(data);
    // console.log("====");
    return data;
  },
};
