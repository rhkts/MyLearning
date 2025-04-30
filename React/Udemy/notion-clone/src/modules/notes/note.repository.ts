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
};
