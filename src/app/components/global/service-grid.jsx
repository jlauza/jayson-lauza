import { Briefcase, Code, Globe } from "lucide-react";
import { motion } from "framer-motion";

export default function ServicesGrid() {
  const items = [
    {
      title: "Consult",
      desc: "Tell us about your business and we will create a solution that will improve your revenue and engagements",
      Icon: Briefcase,
    },
    {
      title: "Development",
      desc: "We will create a solution to make your business grow through well built website designed to create more engagements that converts to revenue",
      Icon: Code,
    },
    {
      title: "Publish",
      desc: "We will publish your website as your store front open in 24/7 online",
      Icon: Globe,
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-extrabold mb-8 text-center">Our Process</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((it, idx) => (
          <motion.article
            key={it.title}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.08 }}
            whileHover={{ translateY: -6 }}
            className="group bg-white/80 dark:bg-gray-900/70 p-6 rounded-2xl shadow-md border border-gray-100 dark:border-gray-800 hover:shadow-lg"
          >
            <div className="flex flex-col h-full justify-between">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 rounded-lg">
                  <it.Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">{it.title}</h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                {it.desc}
              </p>

              <div className="flex flex-row-reverse mt-6">
                <a
                  href="#contact"
                  className="inline-block rounded-lg px-4 py-2 text-sm font-medium border border-transparent shadow-sm hover:underline"
                >
                  Get started
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
