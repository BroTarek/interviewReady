import { useQuery } from "@tanstack/react-query"
import api from "@/lib/axios"

export interface Post {
    userId: number
    id: number
    title: string
    body: string
}

const fetchPosts = async (): Promise<Post[]> => {
    const { data } = await api.get<Post[]>("/posts?_limit=5")
    return data
}

export function usePosts() {
    return useQuery({
        queryKey: ["posts"],
        queryFn: fetchPosts,
    })
}
