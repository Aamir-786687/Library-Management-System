import { useState } from 'react';
import { Book, Pencil, Trash2 } from 'lucide-react';
import AddBook from '../components/AddBook';

interface BookType {
  id: number;
  title: string;
  author: string;
  isbn: string;
  image: string;
  category: string;
}

function Allbooks() {
  const [books, setBooks] = useState<BookType[]>([
    {
      id: 1,
      title: "Wings Of Fire",
      author: "Pranavdhar",
      isbn: "978-1234567890",
      image: "https://www.theindianbookstore.in/cdn/shop/products/WebsiteNew_87.png?v=1661698974",
      category: "Auto Biography"
    },
    {
      id: 2,
      title: "The Power Of Your Subconscious Mind",
      author: "Joseph",
      isbn: "978-0987654321",
      image: "https://m.media-amazon.com/images/I/81gTwYAhU7L.jpg",
      category: "Psychology"
    },
    {
      id: 3,
      title: "Elon Musk",
      author: "Elon",
      isbn: "978-1122334455",
      image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/book/e/s/9/elon-musk-original-imagwfnjzyddk2df.jpeg?q=90&crop=false",
      category: "Auto Biography"
    },
    {
      id: 4,
      title: "The Subtle Art Of Not Giving A Fuck",
      author: "Mark Manson",
      isbn: "978-5544332211",
      image: "https://m.media-amazon.com/images/I/71QKQ9mwV7L.jpg",
      category: "Self Help"
    },
    {
      id: 5,
      title: "Atomic Habits",
      author: "James Clear",
      isbn: "978-9988776655",
      image: "https://m.media-amazon.com/images/I/81F90H7hnML.jpg",
      category: "Self Help"
    },
    {
      id: 6,
      title: "The Alchemist",
      author: "Paulo Coelho",
      isbn: "978-3322114455",
      image: "https://m.media-amazon.com/images/I/61HAE8zahLL.jpg",
      category: "Fiction"
    },
    {
      id: 7,
      title: "Sapiens",
      author: "Yuval Noah Harari",
      isbn: "978-7766554433",
      image: "https://m.media-amazon.com/images/I/713jIoMO3UL._AC_UF1000,1000_QL80_.jpg",
      category: "History"
    },
    {
      id: 8,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      isbn: "978-1199228837",
      image: "https://m.media-amazon.com/images/I/81TLiZrasVL._UF1000,1000_QL80_.jpg",
      category: "Classic"
    },
    {
      id: 9,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      isbn: "978-4455667788",
      image: "https://m.media-amazon.com/images/I/81gepf1eMqL.jpg",
      category: "Drama"
    },
    {
      id: 10,
      title: "1984",
      author: "George Orwell",
      isbn: "978-8899776655",
      image: "https://m.media-amazon.com/images/I/71rpa1-kyvL.jpg",
      category: "Dystopian"
    },
    {
      id: 11,
      title: "Brave New World",
      author: "Aldous Huxley",
      isbn: "978-2233445566",
      image: "https://m.media-amazon.com/images/I/91D4YvdC0dL.jpg",
      category: "Science Fiction"
    },
    {
      id: 12,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      isbn: "978-6677889900",
      image: "https://m.media-amazon.com/images/I/71jD4jMityL._AC_UF1000,1000_QL80_.jpg",
      category: "Fantasy"
    }
  ]);

  const [bookToEdit, setBookToEdit] = useState<BookType | null>(null);

  const handleAddBook = (newBook: { title: string; author: string; isbn: string; image: string; genre: string }) => {
    const book: BookType = {
      id: books.length + 1,
      title: newBook.title,
      author: newBook.author,
      isbn: newBook.isbn,
      image: newBook.image || "https://via.placeholder.com/200x300?text=Book+Cover",
      category: newBook.genre
    };
    setBooks([...books, book]);
  };

  const handleEditBook = (id: number, updatedBook: { title: string; author: string; isbn: string; image: string; genre: string }) => {
    setBooks(books.map(book => {
      if (book.id === id) {
        return {
          ...book,
          title: updatedBook.title,
          author: updatedBook.author,
          isbn: updatedBook.isbn,
          image: updatedBook.image || book.image,
          category: updatedBook.genre
        };
      }
      return book;
    }));
    setBookToEdit(null);
  };

  const handleDeleteBook = (id: number) => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      setBooks(books.filter(book => book.id !== id));
    }
  };

  return (
    <div className="min-h-screen w-full bg-wheat pt-20 pb-10">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#10190D] mb-6">All Books</h1>
          <AddBook 
            onAddBook={handleAddBook}
            onEditBook={handleEditBook}
            bookToEdit={bookToEdit}
            isEditing={!!bookToEdit}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {books.map((book) => (
            <div key={book.id} className="flex flex-col items-center p-6 shadow-md rounded-lg bg-gray-200 relative group">
              <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => setBookToEdit(book)}
                  className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
                  title="Edit book"
                >
                  <Pencil size={16} />
                </button>
                <button
                  onClick={() => handleDeleteBook(book.id)}
                  className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                  title="Delete book"
                >
                  <Trash2 size={16} />
                </button>
              </div>

              <img
                src={book.image}
                alt={book.title}
                className="w-36 mb-6 rounded-xl transform transition-transform duration-500 hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://via.placeholder.com/200x300?text=Book+Cover";
                }}
              />
              <p className="text-center font-semibold text-lg">{book.title}</p>
              <p className="text-gray-500 font-bold text-sm">By {book.author}</p>
              <div className="absolute bottom-5 left-5 flex flex-wrap">
                <p className="px-3 py-1 bg-gray-300 text-sm font-semibold rounded-lg m-1">{book.category}</p>
              </div>
              <div className="h-12"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="fixed bottom-5 right-5 p-4 bg-gray-800 rounded-full shadow-lg">
        <Book size={24} className="text-white" />
      </div>
    </div>
  );
}

export default Allbooks;
