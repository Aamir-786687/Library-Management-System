const images = [
  {
    src: "https://www.shutterstock.com/image-photo/old-books-on-wooden-shelf-260nw-1592514523.jpg",
    title: "First slide label",
    description: "Book arranged in Shelf.",
  }
];

function BgImage() {
  return (
    <div className="w-full h-[200px] sm:h-[250px] overflow-hidden">
      {images.map((image, index) => (
        <div key={index} className="relative w-full h-full">
          <img
            src={image.src}
            alt={image.title}
            className="object-cover w-full h-full"
          />
          <div className="absolute bottom-5 left-5 text-white bg-black/50 p-3 rounded-md">
          </div>
        </div>
      ))}
    </div>
  );
}

export default BgImage;
