
const activities = [
  { icon: "📝", title: "Blogging" },
  { icon: "🌍", title: "Travelling" },
  { icon: "🏔️", title: "Mountain Hiking" },
  { icon: "🏊", title: "Swimming" },
];

const LoveToDo = () => {
  return (
    <div className=" py-10 px-5">
      <div className="relative">
        {/* Vertical Label */}
        <div className="mb-5 text-center ">
          <span className="text-4xl text-white">LOVE TO DO</span>
        </div>
        {/* Card Container */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4  ">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-gray-700 rounded-lg flex flex-col items-center justify-center p-6 hover:bg-gray-700 transition duration-300"
            >
              <div className="text-green-400 text-5xl">{activity.icon}</div>
              <h3 className="mt-4 text-lg text-white font-semibold">{activity.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoveToDo;
