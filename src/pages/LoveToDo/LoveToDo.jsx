import { motion } from "framer-motion";

const activities = [
  { icon: "💪", title: "Gym" },
  { icon: "🌍", title: "Travelling" },
  { icon: "🏔️", title: "Mountain Hiking" },
  { icon: "🏊", title: "Swimming" },
];

const LoveToDo = () => {
  return (
    <div className="py-10 px-5">
      <div className="relative">
        {/* Vertical Label */}
        <div className="mb-5 text-center py-8">
          <span className="text-4xl font-bold text-white">LOVE TO DO</span>
        </div>
        {/* Card Container */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-5">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              className="bg-gray-700 rounded-lg flex flex-col items-center justify-center p-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-green-400 text-5xl">{activity.icon}</div>
              <h3 className="mt-4 text-lg text-white font-semibold">{activity.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoveToDo;
