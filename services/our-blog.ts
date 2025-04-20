import { apiClient } from "@/libs/api-client";

export const OurBlogs = {
  getAll: (params: { page: number; per_page: number }) =>
    apiClient.getPaginated<TypeOfService[]>("/api/blogs", params),
  getById: (id: string) => apiClient.get<TypeOfService>(`/api/blogs/${id}`),
};
