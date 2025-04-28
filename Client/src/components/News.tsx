import { Trophy, ClipboardList } from "lucide-react";

const competitions = [
  { title: "Competition-1", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
  { title: "Competition-2", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
  { title: "Competition-3", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
  { title: "Competition-4", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
  { title: "Competition-5", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
];

const quizzes = [
  { title: "Quiz-1", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
  { title: "Quiz-2", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
  { title: "Quiz-3", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
  { title: "Quiz-4", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
  { title: "Quiz-5", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
];

function News() {
  return (
    <div className="w-full bg-[#f7ebd7] flex flex-col items-center py-8">
      <h1 className="text-3xl font-bold text-[#0E2431] mb-10 text-center">
        Updates for You
      </h1>
      <div className="flex flex-wrap justify-center gap-10 w-full px-4">
        {/* Competitions */}
        <div className="flex flex-col items-center w-full md:w-1/3">
          <div className="flex items-center gap-2 mb-4">
            <Trophy className="text-brown-600" size={32} />
            <h2 className="text-2xl font-semibold">Competitions</h2>
          </div>
          <div className="flex flex-col gap-4 w-full">
            {competitions.map((comp, idx) => (
              <div
                key={idx}
                className="border-2 border-brown-700 rounded-md p-4 text-left bg-white shadow-md hover:shadow-lg transition"
              >
                <p className="font-bold">{comp.title}</p>
                <p className="text-gray-600 text-sm mt-1">{comp.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quizzes */}
        <div className="flex flex-col items-center w-full md:w-1/3">
          <div className="flex items-center gap-2 mb-4">
            <ClipboardList className="text-brown-600" size={32} />
            <h2 className="text-2xl font-semibold">Online Quiz</h2>
          </div>
          <div className="flex flex-col gap-4 w-full">
            {quizzes.map((quiz, idx) => (
              <div
                key={idx}
                className="border-2 border-brown-700 rounded-md p-4 text-left bg-white shadow-md hover:shadow-lg transition"
              >
                <p className="font-bold">{quiz.title}</p>
                <p className="text-gray-600 text-sm mt-1">{quiz.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
