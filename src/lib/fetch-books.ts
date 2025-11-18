import {BookData} from "@/utils/types/BookType";

export default async function fetchBooks(q?:string): Promise<BookData[]> {
    let url = `https://onebite-books-server-ochre-nine.vercel.app/book`;

    if(q){
        url += `/search?q=${q}`;
    }

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Failed to fetch books");
        }

        return await response.json();
    } catch (e) {
        console.error(e);
        return [];
    }
}