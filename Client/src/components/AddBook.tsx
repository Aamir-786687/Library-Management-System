import { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';

interface BookFormData {
  title: string;
  author: string;
  isbn: string;
  image: string;
  genre: string;
}

interface AddBookProps {
  onAddBook: (book: BookFormData) => void;
  onEditBook?: (id: number, book: BookFormData) => void;
  bookToEdit?: {
    id: number;
    title: string;
    author: string;
    isbn: string;
    image: string;
    category: string;
  } | null;
  isEditing?: boolean;
}

const AddBook = ({ onAddBook, onEditBook, bookToEdit, isEditing = false }: AddBookProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<BookFormData>({
    title: '',
    author: '',
    isbn: '',
    image: '',
    genre: ''
  });

  useEffect(() => {
    if (bookToEdit && isEditing) {
      setFormData({
        title: bookToEdit.title,
        author: bookToEdit.author,
        isbn: bookToEdit.isbn,
        image: bookToEdit.image,
        genre: bookToEdit.category
      });
      setIsOpen(true);
    }
  }, [bookToEdit, isEditing]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isEditing && bookToEdit && onEditBook) {
      onEditBook(bookToEdit.id, formData);
    } else {
      onAddBook(formData);
    }
    setFormData({ title: '', author: '', isbn: '', image: '', genre: '' });
    setIsOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const genres = [
    "Fiction",
    "Non-Fiction",
    "Mystery",
    "Science Fiction",
    "Fantasy",
    "Romance",
    "Thriller",
    "Horror",
    "Biography",
    "History",
    "Self Help",
    "Poetry",
    "Drama",
    "Classic",
    "Children's",
    "Young Adult",
    "Other"
  ];

  if (isEditing && !isOpen) return null;

  return (
    <div className="mb-6">
      {!isEditing && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 bg-[#E9534B] text-white px-4 py-2 rounded-lg hover:bg-[#d4483f] transition-colors"
        >
          <Plus size={20} />
          Add New Book
        </button>
      )}

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold text-[#10190D] mb-4">
              {isEditing ? 'Edit Book' : 'Add New Book'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E9534B]"
                  placeholder="Enter book title"
                />
              </div>

              <div>
                <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-1">
                  Author
                </label>
                <input
                  type="text"
                  id="author"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E9534B]"
                  placeholder="Enter author name"
                />
              </div>

              <div>
                <label htmlFor="isbn" className="block text-sm font-medium text-gray-700 mb-1">
                  ISBN
                </label>
                <input
                  type="text"
                  id="isbn"
                  name="isbn"
                  value={formData.isbn}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E9534B]"
                  placeholder="Enter ISBN"
                />
              </div>

              <div>
                <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
                  Image URL
                </label>
                <input
                  type="url"
                  id="image"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E9534B]"
                  placeholder="Enter book cover image URL"
                />
              </div>

              <div>
                <label htmlFor="genre" className="block text-sm font-medium text-gray-700 mb-1">
                  Genre
                </label>
                <select
                  id="genre"
                  name="genre"
                  value={formData.genre}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E9534B] bg-white"
                >
                  <option value="">Select a genre</option>
                  {genres.map((genre) => (
                    <option key={genre} value={genre}>
                      {genre}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex gap-4 justify-end mt-6">
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    setFormData({ title: '', author: '', isbn: '', image: '', genre: '' });
                  }}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#E9534B] text-white rounded-md hover:bg-[#d4483f] transition-colors"
                >
                  {isEditing ? 'Save Changes' : 'Add Book'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddBook; 