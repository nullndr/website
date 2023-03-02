import { db } from "~/utils/db.server";

export const findPosts = async () => {
  return db.post.findMany({
    where: {
      isPublic: true,
    },
    select: {
      id: true,
      title: true,
      description: true,
      createdAt: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const findPost = async (id: string) => {
  return db.post.findFirst({
    where: {
      id,
      isPublic: true,
    },
  });
};
