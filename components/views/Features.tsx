"use client";
import { features, container, item } from "@/constant";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  return (
    <section className="px-4 pb-16 max-w-4xl mx-auto">
      <motion.div className="grid md:grid-cols-3 gap-6" variants={container}>
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div key={index} variants={item}>
              <Card className="bg-gray-900/30 border-gray-800 hover:bg-gray-900/50 transition-all duration-300 hover:border-gray-700 group cursor-pointer h-full">
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gray-800 group-hover:bg-gray-700 transition-colors">
                      <Icon className="h-5 w-5 text-blue-400" />
                    </div>
                    <h3 className="font-semibold text-white">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Features;
