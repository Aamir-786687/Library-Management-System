

function ReservedBooks() {
  return (
    <div className="bg-[rgb(16,25,13)] p-5 flex flex-col">
      <h1 className="text-[rgb(238,129,30)] text-4xl text-center py-6">Books On Hold</h1>
      <table className="font-sans border-collapse w-full max-w-screen-lg mx-auto p-4">
        <thead>
          <tr>
            <th className="border-2 border-[#696969] text-left px-2 py-1 bg-[#dddddd]">Name</th>
            <th className="border-2 border-[#696969] text-left px-2 py-1 bg-[#dddddd]">Book</th>
            <th className="border-2 border-[#696969] text-left px-2 py-1 bg-[#dddddd]">Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-2 border-[#696969] px-2 py-1 bg-[#dddddd]">Pranav</td>
            <td className="border-2 border-[#696969] px-2 py-1 bg-[#dddddd]">Rich Dad Poor Dad</td>
            <td className="border-2 border-[#696969] px-2 py-1 bg-[#dddddd]">12/7/2021</td>
          </tr>
          <tr>
            <td className="border-2 border-[#696969] px-2 py-1 bg-[#dddddd]">Sashank</td>
            <td className="border-2 border-[#696969] px-2 py-1 bg-[#dddddd]">The Subtle Art</td>
            <td className="border-2 border-[#696969] px-2 py-1 bg-[#dddddd]">10/7/2021</td>
          </tr>
          <tr>
            <td className="border-2 border-[#696969] px-2 py-1 bg-[#dddddd]">Tanishq</td>
            <td className="border-2 border-[#696969] px-2 py-1 bg-[#dddddd]">Wings Of Fire</td>
            <td className="border-2 border-[#696969] px-2 py-1 bg-[#dddddd]">15/9/2021</td>
          </tr>
          <tr>
            <td className="border-2 border-[#696969] px-2 py-1 bg-[#dddddd]">Akhil</td>
            <td className="border-2 border-[#696969] px-2 py-1 bg-[#dddddd]">The Secret</td>
            <td className="border-2 border-[#696969] px-2 py-1 bg-[#dddddd]">02/9/2021</td>
          </tr>
          <tr>
            <td className="border-2 border-[#696969] px-2 py-1 bg-[#dddddd]">Surya</td>
            <td className="border-2 border-[#696969] px-2 py-1 bg-[#dddddd]">Bad Guys</td>
            <td className="border-2 border-[#696969] px-2 py-1 bg-[#dddddd]">21/7/2021</td>
          </tr>
          <tr>
            <td className="border-2 border-[#696969] px-2 py-1 bg-[#dddddd]">Dinesh</td>
            <td className="border-2 border-[#696969] px-2 py-1 bg-[#dddddd]">Giovanni Rovelli</td>
            <td className="border-2 border-[#696969] px-2 py-1 bg-[#dddddd]">02/7/2021</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ReservedBooks;
