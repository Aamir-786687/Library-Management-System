import React from 'react';

const RecentAddedBooks: React.FC = () => {
  return (
    <div className="bg-[rgb(16,25,13)] flex flex-col">
      <h1 className="text-[rgb(238,129,30)] text-4xl text-center py-6">Recent Uploads</h1>
      <div className="relative overflow-hidden">
        <div className="flex space-x-8 py-6 animate-scroll">
          <div className="flex space-x-8 min-w-max">
            <img className="w-35 h-45 object-cover rounded-md hover:scale-110 transition-transform duration-700" src="https://inkinmytea.files.wordpress.com/2011/12/apj.jpg?w=640" alt="Book cover" />
            <img className="w-35 h-45 object-cover rounded-md hover:scale-110 transition-transform duration-700" src="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg" alt="Book cover" />
            <img className="w-35 h-45 object-cover rounded-md hover:scale-110 transition-transform duration-700" src="https://images-na.ssl-images-amazon.com/images/I/91VokXkn8hL.jpg" alt="Book cover" />
            <img className="w-35 h-45 object-cover rounded-md hover:scale-110 transition-transform duration-700" src="https://images-na.ssl-images-amazon.com/images/I/71m-MxdJ2WL.jpg" alt="Book cover" />
            <img className="w-35 h-45 object-cover rounded-md hover:scale-110 transition-transform duration-700" src="https://images-na.ssl-images-amazon.com/images/I/71t4GuxLCuL.jpg" alt="Book cover" />
            <img className="w-35 h-45 object-cover rounded-md hover:scale-110 transition-transform duration-700" src="https://images-na.ssl-images-amazon.com/images/I/81mXQdi5x+L.jpg" alt="Book cover" />
            <img className="w-35 h-45 object-cover rounded-md hover:scale-110 transition-transform duration-700" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1498813353l/34267304.jpg" alt="Book cover" />
            <img className="w-35 h-45 object-cover rounded-md hover:scale-110 transition-transform duration-700" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1588152105" alt="Book cover" />
          </div>
          <div className="flex space-x-8 min-w-max">
            <img className="w-35 h-40 object-cover rounded-md hover:scale-110 transition-transform duration-700" src="https://inkinmytea.files.wordpress.com/2011/12/apj.jpg?w=640" alt="Book cover" />
            <img className="w-35 h-40 object-cover rounded-md hover:scale-110 transition-transform duration-700" src="https://images-na.ssl-images-amazon.com/images/I/91VokXkn8hL.jpg" alt="Book cover" />
            <img className="w-35 h-40 object-cover rounded-md hover:scale-110 transition-transform duration-700" src="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg" alt="Book cover" />
            <img className="w-35 h-40 object-cover rounded-md hover:scale-110 transition-transform duration-700" src="https://images-na.ssl-images-amazon.com/images/I/71m-MxdJ2WL.jpg" alt="Book cover" />
            <img className="w-35 h-40 object-cover rounded-md hover:scale-110 transition-transform duration-700" src="https://images-na.ssl-images-amazon.com/images/I/71t4GuxLCuL.jpg" alt="Book cover" />
            <img className="w-35 h-40 object-cover rounded-md hover:scale-110 transition-transform duration-700" src="https://images-na.ssl-images-amazon.com/images/I/81mXQdi5x+L.jpg" alt="Book cover" />
            <img className="w-35 h-40 object-cover rounded-md hover:scale-110 transition-transform duration-700" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1498813353l/34267304.jpg" alt="Book cover" />
            <img className="w-35 h-40 object-cover rounded-md hover:scale-110 transition-transform duration-700" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1588152105" alt="Book cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentAddedBooks;

// Add this to your global CSS file (e.g., index.css or App.css)
/*
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-scroll {
  display: flex;
  animation: scroll 30s linear infinite;
}
*/
