import {BookData} from "@/utils/types/BookType";

export default async function fetchRandomBooks(): Promise<BookData[]> {
    const url = `https://onebite-books-server-ochre-nine.vercel.app/book/random`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Failed to fetch random books");
        }

        return await response.json();
    } catch (e) {
        console.error(e);
        return [];
    }
};