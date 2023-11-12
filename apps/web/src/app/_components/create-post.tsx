"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { clientApi } from "~/trpc/react";

export function CreatePost() {
  const router = useRouter();
  const [model, setModel] = useState("");

  const createPost = clientApi.post.create.useMutation({
    onSuccess: () => {
      router.refresh();
      setModel("");
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createPost.mutate({
          model,
          year: 2000,
          color: "red",
          price: 40000000,
					mileage: 12,
					imageUrl: "",
					manufacturer: "tesla",
        });
      }}
      className="flex flex-col gap-2"
    >
      <input
        type="text"
        placeholder="Title"
        value={model}
        onChange={(e) => setModel(e.target.value)}
        className="w-full rounded-full px-4 py-2 text-black"
      />
      <button
        type="submit"
        className="rounded-full bg-white/10 px-10 py-3 font-semibold transition hover:bg-white/20"
        disabled={createPost.isLoading}
      >
        {createPost.isLoading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
