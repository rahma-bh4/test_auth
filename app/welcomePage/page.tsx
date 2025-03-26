'use client';
import { motion } from "framer-motion";
import { Button} from "@/components/ui/button";
import {Card,CardHeader,CardTitle ,CardContent} from "@/components/ui/card";

import Image from "next/image";

export default function WelcomePage() {
  const benefits = [
    { title: "Save Money", description: "Cut down on fuel costs by sharing rides." },
    { title: "Reduce Emissions", description: "Help the environment by decreasing cars on the road." },
    { title: "Meet People", description: "Connect with like-minded individuals." },
    { title: "Convenience", description: "Find rides easily with our platform." },
  ];

  const steps = [
    { title: "Sign Up", description: "Create your free account." },
    { title: "Find a Ride", description: "Search for carpools in your area." },
    { title: "Book and Go", description: "Reserve your spot and enjoy the ride." },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-white">
        <Image src="/carpooling.jpg" alt="Carpooling" layout="fill" objectFit="cover" className="opacity-50" />
        <div className="absolute inset-0 bg-blue-900 opacity-70"></div>
        <div className="relative text-center">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Share the Ride, Save the Planet
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-4 text-lg"
          >
            Join our carpooling community to reduce emissions, save money, and meet new people.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <Button className="mt-6 bg-green-500 hover:bg-green-600" asChild>
              <motion.button whileHover={{ scale: 1.05 }}>Get Started</motion.button>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="mt-2">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-white">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="container mx-auto text-center"
        >
          <p className="text-xl italic">"I saved $200 last month and made new friends along the way!"</p>
          <p className="mt-2 text-blue-600 font-semibold">- Jane D.</p>
        </motion.div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-blue-900 text-white text-center">
        <h2 className="text-2xl font-bold">Ready to start carpooling?</h2>
        <Button className="mt-6 bg-green-500 hover:bg-green-600" asChild>
          <motion.button whileHover={{ scale: 1.05 }}>Get Started</motion.button>
        </Button>
      </section>
    </div>
  );
}