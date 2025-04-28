import { BookOpen } from "lucide-react";

const PopularBooks = () => {
  const books = [
    "https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_UF1000,1000_QL80_.jpg",
    "https://m.media-amazon.com/images/I/81GqtNbs+PL._AC_UF1000,1000_QL80_.jpg",
    "https://m.media-amazon.com/images/I/71zytzrg6lL._AC_UF1000,1000_QL80_.jpg",
    "https://m.media-amazon.com/images/I/81OthjkJBuL._AC_UF1000,1000_QL80_.jpg",
    "https://m.media-amazon.com/images/I/91HHxxtA1wL._AC_UF1000,1000_QL80_.jpg",
    "https://m.media-amazon.com/images/I/71Q1tPupKjL._AC_UF1000,1000_QL80_.jpg",
    "https://m.media-amazon.com/images/I/81q77Q39nEL.jpg",
    "https://images-cdn.ubuy.co.in/67b6bfcf8890ce76003ef6b2-trends-international-24x36-harry-potter.jpg"
  ];

  return (
    <div className="flex flex-col bg-[#f7ebd7] py-8">
      <div className="flex items-center justify-center gap-2 mb-8 text-3xl font-semibold text-[#0E2431]">
        <BookOpen className="w-8 h-8 text-[#0E2431]" />
        Popular Books
      </div>

      <div className="relative overflow-hidden">
        <div className="animate-scroll-reverse">
          <div className="flex gap-8 py-4 pl-8">
            {books.map((src, index) => (
              <img
                key={`first-${index}`}
                src={src}
                alt={`Book-${index}`}
                className="w-[140px] h-[200px] object-cover rounded-md hover:scale-110 transition-transform duration-700"
              />
            ))}
            {books.map((src, index) => (
              <img
                key={`second-${index}`}
                src={src}
                alt={`Book-${index}`}
                className="w-[140px] h-[200px] object-cover rounded-md hover:scale-110 transition-transform duration-700"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularBooks;
