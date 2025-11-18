import {BookData} from "@/utils/types/BookType";

export default async function fetchOneBook(id: number):Promise<BookData | null>{
    const url = `https://onebite-books-server-ochre-nine.vercel.app/book/${id}`;

    try{
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Failed to fetch one book");
        }

        return await response.json();
    }catch (e) {
        console.error(e);
        return null;
    }

};