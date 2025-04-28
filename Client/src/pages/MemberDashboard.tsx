import { useContext, useEffect, useState } from "react";
import { Library, User, Book, History, Power, ArrowRight, X } from 'lucide-react';
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

function MemberDashboard() {
  const [active, setActive] = useState("profile");
  const [sidebar, setSidebar] = useState(false);

  const API_URL = "http://localhost:5000";
  const { user } = useContext(AuthContext);
  const [memberDetails, setMemberDetails] = useState<any>(null);

  useEffect(() => {
    const getMemberDetails = async () => {
      try {
        const response = await axios.get(
          `${API_URL}/api/users/getuser/${user?._id}`
        );
        setMemberDetails(response.data);
      } catch (err) {
        console.log("Error in fetching the member details");
      }
    };
    getMemberDetails();
  }, [API_URL, user]);

  const logout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  const calculateFine = (toDate: string) => {
    const currentDate = new Date();
    const returnDate = new Date(toDate);
    const diffTime = currentDate.getTime() - returnDate.getTime();
    const diffDays = diffTime / (1000 * 3600 * 24); // Convert milliseconds to days
    return diffDays <= 0 ? 0 : Math.floor(diffDays) * 10; // Calculate fine
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/4 bg-gray-800 text-white p-5">
        <div className="flex items-center justify-between mb-6">
          <Library size={50} />
          <span className="text-xl font-semibold">LCMS</span>
          <button onClick={() => setSidebar(!sidebar)} className="text-red-500">
            {sidebar ? <X size={25} /> : <ArrowRight size={25} />}
          </button>
        </div>

        <div className={`space-y-4 ${sidebar ? "block" : "hidden"}`}>
          <a
            href="#profile@member"
            className={`flex items-center space-x-2 ${active === "profile" ? "text-red-500" : ""}`}
            onClick={() => {
              setActive("profile");
              setSidebar(false);
            }}
          >
            <User size={20} />
            <span>Profile</span>
          </a>
          <a
            href="#activebooks@member"
            className={`flex items-center space-x-2 ${active === "active" ? "text-red-500" : ""}`}
            onClick={() => {
              setActive("active");
              setSidebar(false);
            }}
          >
            <Library size={20} />
            <span>Active</span>
          </a>
          <a
            href="#reservedbook@member"
            className={`flex items-center space-x-2 ${active === "reserved" ? "text-red-500" : ""}`}
            onClick={() => {
              setActive("reserved");
              setSidebar(false);
            }}
          >
            <Book size={20} />
            <span>Reserved</span>
          </a>
          <a
            href="#history@member"
            className={`flex items-center space-x-2 ${active === "history" ? "text-red-500" : ""}`}
            onClick={() => {
              setActive("history");
              setSidebar(false);
            }}
          >
            <History size={20} />
            <span>History</span>
          </a>
          <a
            href="#logout@member"
            className="flex items-center space-x-2 text-red-500"
            onClick={() => {
              logout();
              setSidebar(false);
            }}
          >
            <Power size={20} />
            <span>Log out</span>
          </a>
        </div>
      </div>

      <div className="w-3/4 p-8 overflow-y-auto">
        <div className={`block ${active === "profile" ? "block" : "hidden"}`}>
          <div className="flex space-x-4 mb-8">
            <img
              className="w-32 h-32 rounded-full border border-gray-300"
              src="./assets/images/Profile.png"
              alt="Profile"
            />
            <div>
              <p className="text-2xl font-semibold">{memberDetails?.userFullName}</p>
              <p className="text-lg font-bold text-yellow-600">
                {memberDetails?.userType === "Student"
                  ? memberDetails?.admissionId
                  : memberDetails?.employeeId}
              </p>
              <p className="text-lg">{memberDetails?.email}</p>
              <p className="text-lg">{memberDetails?.mobileNumber}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <p className="text-lg font-bold">Age</p>
              <p className="text-xl">{memberDetails?.age}</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <p className="text-lg font-bold">Gender</p>
              <p className="text-xl">{memberDetails?.gender}</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <p className="text-lg font-bold">DOB</p>
              <p className="text-xl">{memberDetails?.dob}</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <p className="text-lg font-bold">Address</p>
              <p className="text-xl">{memberDetails?.address}</p>
            </div>
          </div>

          <div className="flex space-x-6 mt-8">
            <div className="p-6 bg-white shadow-lg rounded-lg w-full">
              <p className="text-lg font-bold">Points</p>
              <p className="text-4xl font-semibold text-center">{memberDetails?.points}</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg w-full">
              <p className="text-lg font-bold">Rank</p>
              <p className="text-4xl font-semibold text-center">{memberDetails?.rank}</p>
            </div>
          </div>
        </div>

        <div className={`block ${active === "active" ? "block" : "hidden"}`}>
          <p className="text-xl font-semibold mb-4">Issued Books</p>
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-700 text-white">
                <th className="py-2 px-4">S.No</th>
                <th className="py-2 px-4">Book Name</th>
                <th className="py-2 px-4">From Date</th>
                <th className="py-2 px-4">To Date</th>
                <th className="py-2 px-4">Fine</th>
              </tr>
            </thead>
            <tbody>
              {memberDetails?.activeTransactions
                ?.filter((data: any) => data.transactionType === "Issued")
                .map((data: any, index: number) => (
                  <tr key={index} className="border-b">
                    <td className="py-2 px-4">{index + 1}</td>
                    <td className="py-2 px-4">{data.bookName}</td>
                    <td className="py-2 px-4">{data.fromDate}</td>
                    <td className="py-2 px-4">{data.toDate}</td>
                    <td className="py-2 px-4">
                      {calculateFine(data.toDate)}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        <div className={`block ${active === "reserved" ? "block" : "hidden"}`}>
          <p className="text-xl font-semibold mb-4">Reserved Books</p>
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-700 text-white">
                <th className="py-2 px-4">S.No</th>
                <th className="py-2 px-4">Book Name</th>
                <th className="py-2 px-4">From Date</th>
                <th className="py-2 px-4">To Date</th>
              </tr>
            </thead>
            <tbody>
              {memberDetails?.activeTransactions
                ?.filter((data: any) => data.transactionType === "Reserved")
                .map((data: any, index: number) => (
                  <tr key={index} className="border-b">
                    <td className="py-2 px-4">{index + 1}</td>
                    <td className="py-2 px-4">{data.bookName}</td>
                    <td className="py-2 px-4">{data.fromDate}</td>
                    <td className="py-2 px-4">{data.toDate}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        <div className={`block ${active === "history" ? "block" : "hidden"}`}>
          <p className="text-xl font-semibold mb-4">Transaction History</p>
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-700 text-white">
                <th className="py-2 px-4">S.No</th>
                <th className="py-2 px-4">Book Name</th>
                <th className="py-2 px-4">Transaction Type</th>
                <th className="py-2 px-4">Transaction Date</th>
              </tr>
            </thead>
            <tbody>
              {memberDetails?.activeTransactions
                ?.map((data: any, index: number) => (
                  <tr key={index} className="border-b">
                    <td className="py-2 px-4">{index + 1}</td>
                    <td className="py-2 px-4">{data.bookName}</td>
                    <td className="py-2 px-4">{data.transactionType}</td>
                    <td className="py-2 px-4">{data.transactionDate}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default MemberDashboard;
