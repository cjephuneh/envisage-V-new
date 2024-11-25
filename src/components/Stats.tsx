import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

const Stats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { number: 150, label: "Projects Completed", icon: "📱" },
    { number: 50, label: "Happy Clients", icon: "🤝" },
    { number: 15, label: "Team Members", icon: "👥" },
    { number: 5, label: "Years Experience", icon: "⭐" }
  ];

  return (
    <section className="py-20 bg-indigo-600 relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white/5 rounded-full"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-4xl font-bold mb-2">
                {inView && (
                  <CountUp
                    end={stat.number}
                    duration={2.5}
                    separator=","
                  />
                )}
                {stat.label.includes("Years") && "+"}
              </div>
              <div className="text-indigo-100">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;