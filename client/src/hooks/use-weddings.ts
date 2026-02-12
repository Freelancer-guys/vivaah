import { useQuery } from "@tanstack/react-query";
import { api, buildUrl } from "@shared/routes";

export function useWeddings() {
  return useQuery({
    queryKey: [api.weddings.list.path],
    queryFn: async () => {
      const res = await fetch(api.weddings.list.path);
      if (!res.ok) throw new Error("Failed to fetch weddings");
      return api.weddings.list.responses[200].parse(await res.json());
    },
  });
}

export function useWedding(id: number) {
  return useQuery({
    queryKey: [api.weddings.get.path, id],
    queryFn: async () => {
      const url = buildUrl(api.weddings.get.path, { id });
      const res = await fetch(url);
      if (res.status === 404) return null;
      if (!res.ok) throw new Error("Failed to fetch wedding details");
      return api.weddings.get.responses[200].parse(await res.json());
    },
  });
}
