import { OurBlogs } from "@/services/our-blog";
import { useQuery } from "@tanstack/react-query";

export const useBlogs = (params: { page: number; per_page: number }) => {
  return useQuery({
    queryKey: ["blog"],
    queryFn: () => OurBlogs.getAll(params),
  });
};

export const useBlogDetail = (id: string) => {
  return useQuery({
    queryKey: ["blog", id],
    queryFn: () => OurBlogs.getById(id),
  });
};
