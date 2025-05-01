import { apiClient } from "@/libs/api-client";

export const OurBlogs = {
  getAll: (params: { page?: number; per_page?: number; lang: string }) =>
    apiClient.getPaginated<TypeOfBlogData>("/api/pages/blog", params),
  getById: (id: string) => apiClient.get<TypeOfService>(`/api/blogs/${id}`),
};
