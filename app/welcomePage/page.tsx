// pages/index.tsx
"use client";
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function WelcomePage() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  // This useEffect ensures hydration is complete before showing animations
  useEffect(() => {
    setMounted(true);
  }, []);

  // Animation variants for page load sequence
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  // Toggle dark mode with animation
  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };
  
  return (
    <motion.div 
      className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}
      initial="hidden"
      animate={mounted ? "visible" : "hidden"}
      variants={fadeIn}
    >
      <Head>
        <title>RideShare | Modern Carpooling Solution</title>
        <meta name="description" content="Find rides or share your commute with others in your area" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <nav className={`fixed w-full z-10 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <motion.div 
                className="flex-shrink-0 flex items-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-8 h-8 mr-2">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L4 6V12C4 15.31 7.58 19.5 12 21C16.42 19.5 20 15.31 20 12V6L12 2Z" 
                          fill="#6366F1" stroke="#6366F1" strokeWidth="1.5" />
                    <path d="M8.5 11.5L11 14L16 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="font-bold text-xl">RideShare</span>
              </motion.div>
            </div>

            <div className="flex items-center">
              <div className="hidden md:ml-6 md:flex md:space-x-8">
                <Link href="/features" className={`inline-flex items-center px-1 pt-1 border-b-2 ${darkMode ? 'border-indigo-500 text-white' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} text-sm font-medium`}>
                  Features
                </Link>
                <Link href="/about" className={`inline-flex items-center px-1 pt-1 border-b-2 ${darkMode ? 'border-transparent text-gray-300 hover:border-gray-400 hover:text-gray-200' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} text-sm font-medium`}>
                  About
                </Link>
                <Link href="/how-it-works" className={`inline-flex items-center px-1 pt-1 border-b-2 ${darkMode ? 'border-transparent text-gray-300 hover:border-gray-400 hover:text-gray-200' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} text-sm font-medium`}>
                  How It Works
                </Link>
                <Link href="/support" className={`inline-flex items-center px-1 pt-1 border-b-2 ${darkMode ? 'border-transparent text-gray-300 hover:border-gray-400 hover:text-gray-200' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} text-sm font-medium`}>
                  Support
                </Link>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Theme toggle */}
              <button 
                onClick={toggleDarkMode}
                className="p-1 rounded-full focus:outline-none"
              >
                {darkMode ? (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>

              <Link href="/signin" className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md ${darkMode ? 'text-white hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`}>
                Sign In
              </Link>
              <Link href="/signup" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-16">
        <div className="relative">
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 bg-transparent sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
              <div className="pt-10 mx-auto max-w-7xl px-4 sm:pt-12 sm:px-6 md:pt-16 lg:pt-20 lg:px-8 xl:pt-28">
                <div className="sm:text-center lg:text-left">
                  <motion.h1 
                    className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                  >
                    <span className={darkMode ? "text-white" : "text-gray-900"}>Find Your </span>
                    <span className="text-indigo-600">Perfect Ride</span>
                  </motion.h1>
                  <motion.p 
                    className={`mt-3 text-base sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 ${darkMode ? "text-gray-300" : "text-gray-500"}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                  >
                    Connect with verified drivers and passengers going your way. Save money, reduce traffic, and help the environment with our community-driven carpooling platform.
                  </motion.p>
                  <motion.div 
                    className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                  >
                    <div className="rounded-md shadow">
                      <Link href="/get-started" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 transition-all duration-300 transform hover:scale-105">
                        Find a Ride
                      </Link>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <Link href="/how-it-works" className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md ${darkMode ? "bg-gray-800 text-indigo-400 hover:bg-gray-700" : "bg-indigo-100 text-indigo-700 hover:bg-indigo-200"} md:py-4 md:text-lg md:px-10 transition-all duration-300 transform hover:scale-105`}>
                        Offer a Ride
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <motion.div 
              className="h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-100 to-blue-100 rounded-bl-3xl" style={{opacity: darkMode ? 0.1 : 0.3}}></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-64 h-full md:w-96">
                  <motion.div 
                    className="absolute top-1/4 -left-4 w-16 h-16 bg-indigo-400 rounded-full" 
                    style={{opacity: 0.3}}
                    animate={{ 
                      y: [0, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 5,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  ></motion.div>
                  <motion.div 
                    className="absolute top-1/3 right-0 w-20 h-20 bg-blue-400 rounded-full" 
                    style={{opacity: 0.3}}
                    animate={{ 
                      y: [0, 10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 6,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  ></motion.div>
                  <div className="absolute w-full h-full flex items-center justify-center">
                    <motion.div 
                      className="relative w-48 h-96 md:w-64 md:h-full"
                      animate={{ 
                        y: [0, -5, 0],
                      }}
                      transition={{ 
                        duration: 4,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    >
                      <div className="absolute w-full h-full overflow-hidden rounded-xl shadow-lg bg-white">
                        <div className={`w-full h-full flex flex-col ${darkMode ? "bg-gray-800" : "bg-white"}`}>
                          <div className="h-12 bg-indigo-600 flex items-center px-4">
                            <div className="text-white text-sm font-medium">RideShare Platform</div>
                          </div>
                          <div className="flex-1 p-4">
                            <div className={`w-full h-12 rounded-lg mb-4 ${darkMode ? "bg-gray-700" : "bg-gray-100"} flex items-center justify-center`}>
                              <div className="w-3/4 h-8 rounded bg-indigo-500 text-white text-xs flex items-center justify-center">Search for rides</div>
                            </div>
                            
                            <div className={`w-full h-32 rounded-lg mb-4 ${darkMode ? "bg-gray-700" : "bg-gray-100"} p-2`}>
                              <div className={`w-full h-6 rounded mb-2 ${darkMode ? "bg-gray-600" : "bg-gray-200"}`}></div>
                              <div className="flex justify-between">
                                <div className={`w-2/5 h-4 rounded ${darkMode ? "bg-gray-600" : "bg-gray-200"}`}></div>
                                <div className={`w-2/5 h-4 rounded ${darkMode ? "bg-gray-600" : "bg-gray-200"}`}></div>
                              </div>
                              <div className="mt-3 flex justify-between">
                                <div className={`w-1/4 h-8 rounded ${darkMode ? "bg-gray-600" : "bg-gray-200"}`}></div>
                                <div className={`w-1/3 h-8 rounded bg-indigo-500`}></div>
                              </div>
                            </div>
                            
                            <div className={`w-full h-32 rounded-lg ${darkMode ? "bg-gray-700" : "bg-gray-100"} p-2`}>
                              <div className={`w-full h-6 rounded mb-2 ${darkMode ? "bg-gray-600" : "bg-gray-200"}`}></div>
                              <div className="flex justify-between">
                                <div className={`w-2/5 h-4 rounded ${darkMode ? "bg-gray-600" : "bg-gray-200"}`}></div>
                                <div className={`w-2/5 h-4 rounded ${darkMode ? "bg-gray-600" : "bg-gray-200"}`}></div>
                              </div>
                              <div className="mt-3 flex justify-between">
                                <div className={`w-1/4 h-8 rounded ${darkMode ? "bg-gray-600" : "bg-gray-200"}`}></div>
                                <div className={`w-1/3 h-8 rounded bg-indigo-500`}></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Features Section */}
        <div className={`py-12 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className={`text-base text-indigo-600 font-semibold tracking-wide uppercase ${darkMode ? "text-indigo-400" : ""}`}>Features</h2>
              <p className={`mt-2 text-3xl leading-8 font-extrabold tracking-tight ${darkMode ? "text-white" : "text-gray-900"} sm:text-4xl`}>
                A smarter way to carpool
              </p>
              <p className={`mt-4 max-w-2xl text-xl ${darkMode ? "text-gray-300" : "text-gray-500"} lg:mx-auto`}>
                Your all-in-one platform for convenient, safe, and affordable ridesharing
              </p>
            </div>

            <div className="mt-10">
              <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
                {/* Feature 1 */}
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div 
                    className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </motion.div>
                  <div className="ml-16">
                    <h3 className={`text-lg leading-6 font-medium ${darkMode ? "text-white" : "text-gray-900"}`}>Real-time Ride Matching</h3>
                    <p className={`mt-2 text-base ${darkMode ? "text-gray-300" : "text-gray-500"}`}>
                      Our intelligent algorithm connects you with drivers or passengers going your way in real-time.
                    </p>
                  </div>
                </motion.div>

                {/* Feature 2 */}
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <motion.div 
                    className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </motion.div>
                  <div className="ml-16">
                    <h3 className={`text-lg leading-6 font-medium ${darkMode ? "text-white" : "text-gray-900"}`}>Verified Users</h3>
                    <p className={`mt-2 text-base ${darkMode ? "text-gray-300" : "text-gray-500"}`}>
                      All users verified through ID verification, ratings, and reviews for a safe experience.
                    </p>
                  </div>
                </motion.div>

                {/* Feature 3 */}
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <motion.div 
                    className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </motion.div>
                  <div className="ml-16">
                    <h3 className={`text-lg leading-6 font-medium ${darkMode ? "text-white" : "text-gray-900"}`}>Cost Sharing</h3>
                    <p className={`mt-2 text-base ${darkMode ? "text-gray-300" : "text-gray-500"}`}>
                      Easily split fuel costs and tolls, with transparent pricing and secure in-app payments.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div className={`py-16 ${darkMode ? "bg-gray-900" : "bg-gray-50"} overflow-hidden`}>
          <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
            <div className="relative">
              <h2 className={`text-center text-3xl leading-8 font-extrabold tracking-tight ${darkMode ? "text-white" : "text-gray-900"} sm:text-4xl`}>
                How it Works
              </h2>
              <p className={`mt-4 max-w-3xl mx-auto text-center text-xl ${darkMode ? "text-gray-300" : "text-gray-500"}`}>
                Join thousands of users saving money and reducing their carbon footprint
              </p>
            </div>

            <div className="relative mt-12 lg:mt-16 lg:grid lg:grid-cols-3 lg:gap-8 lg:items-center">
              {/* Step 1 */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <motion.div 
                  className="flex items-center justify-center h-16 w-16 rounded-md bg-indigo-500 text-white mx-auto mb-4"
                  whileHover={{ 
                    rotate: [0, 10, -10, 0],
                    transition: { duration: 0.5 }
                  }}
                >
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </motion.div>
                <h3 className={`text-center text-xl leading-6 font-medium ${darkMode ? "text-white" : "text-gray-900"}`}>
                  Create your account
                </h3>
                <p className={`mt-2 text-center text-base ${darkMode ? "text-gray-300" : "text-gray-500"}`}>
                  Sign up, verify your identity, and set your travel preferences in just a few minutes.
                </p>
              </motion.div>

              {/* Step 2 */}
              <motion.div 
                className="relative mt-10 lg:mt-0"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <motion.div 
                  className="flex items-center justify-center h-16 w-16 rounded-md bg-indigo-500 text-white mx-auto mb-4"
                  whileHover={{ 
                    scale: 1.2,
                    transition: { duration: 0.3 }
                  }}
                >
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </motion.div>
                <h3 className={`text-center text-xl leading-6 font-medium ${darkMode ? "text-white" : "text-gray-900"}`}>
                  Find your rides
                </h3>
                <p className={`mt-2 text-center text-base ${darkMode ? "text-gray-300" : "text-gray-500"}`}>
                  Enter your destination and travel time, and we'll connect you with perfect ride matches.
                </p>
              </motion.div>

              {/* Step 3 */}
              <motion.div 
                className="relative mt-10 lg:mt-0"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <motion.div 
                  className="flex items-center justify-center h-16 w-16 rounded-md bg-indigo-500 text-white mx-auto mb-4"
                  whileHover={{ 
                    y: [0, -5, 0],
                    transition: { duration: 0.5 }
                  }}
                >
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
                <h3 className={`text-center text-xl leading-6 font-medium ${darkMode ? "text-white" : "text-gray-900"}`}>
                  Enjoy the benefits
                </h3>
                <p className={`mt-2 text-center text-base ${darkMode ? "text-gray-300" : "text-gray-500"}`}>
                  Save money, reduce stress, meet new people, and help the environment on your daily commute.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`${darkMode ? "bg-indigo-700" : "bg-indigo-600"} overflow-hidden relative`}>
          <motion.div 
            className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-500 rounded-full opacity-20"
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, 20, 0],
              y: [0, -10, 0]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          <motion.div 
            className="absolute -bottom-20 -right-10 w-60 h-60 bg-indigo-400 rounded-full opacity-20"
            animate={{ 
              scale: [1, 1.1, 1],
              x: [0, -10, 0],
              y: [0, 10, 0]
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8 relative z-10">
            <motion.h2 
              className="text-3xl font-extrabold text-white sm:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="block">Ready to start carpooling?</span>
              <span className="block">Join our community today.</span>
            </motion.h2>
            <motion.p 
              className="mt-4 text-lg leading-6 text-indigo-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Join thousands of users saving money and reducing traffic congestion.
            </motion.p>
            <motion.div 
              className="mt-8 flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <div className="inline-flex rounded-md shadow">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/download" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 transition-colors duration-300">
                    Download App
                  </Link>
                </motion.div>
              </div>
              <div className="ml-3 inline-flex">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/learn-more" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-800 hover:bg-indigo-900 transition-colors duration-300">
                    Learn more
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <footer className={`${darkMode ? "bg-gray-800" : "bg-white"}`}>
          <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
            <motion.div 
              className="flex justify-center space-x-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <motion.div 
                className="flex-shrink-0 flex items-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-8 h-8 mr-2">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <motion.path 
                      d="M12 2L4 6V12C4 15.31 7.58 19.5 12 21C16.42 19.5 20 15.31 20 12V6L12 2Z" 
                      fill="#6366F1" 
                      stroke="#6366F1" 
                      strokeWidth="1.5"
                      animate={{ 
                        scale: [1, 1.05, 1],
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    />
                    <path d="M8.5 11.5L11 14L16 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="font-bold text-xl">RideShare</span>
              </motion.div>
            </motion.div>
            <motion.nav 
              className="mt-8 flex flex-wrap justify-center" 
              aria-label="Footer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="px-5 py-2">
                <motion.div whileHover={{ x: 3 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/about-us" className={`text-base ${darkMode ? "text-gray-300 hover:text-white" : "text-gray-500 hover:text-gray-900"} transition-colors duration-300`}>
                    About Us
                  </Link>
                </motion.div>
              </div>
              <div className="px-5 py-2">
                <motion.div whileHover={{ x: 3 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/blog" className={`text-base ${darkMode ? "text-gray-300 hover:text-white" : "text-gray-500 hover:text-gray-900"} transition-colors duration-300`}>
                    Blog
                  </Link>
                </motion.div>
              </div>
              <div className="px-5 py-2">
                <motion.div whileHover={{ x: 3 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/careers" className={`text-base ${darkMode ? "text-gray-300 hover:text-white" : "text-gray-500 hover:text-gray-900"} transition-colors duration-300`}>
                    Careers
                  </Link>
                </motion.div>
              </div>
              <div className="px-5 py-2">
                <motion.div whileHover={{ x: 3 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/contact" className={`text-base ${darkMode ? "text-gray-300 hover:text-white" : "text-gray-500 hover:text-gray-900"} transition-colors duration-300`}>
                    Contact
                  </Link>
                </motion.div>
              </div>
              <div className="px-5 py-2">
                <motion.div whileHover={{ x: 3 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/privacy" className={`text-base ${darkMode ? "text-gray-300 hover:text-white" : "text-gray-500 hover:text-gray-900"} transition-colors duration-300`}>
                    Privacy Policy
                  </Link>
                </motion.div>
              </div>
              <div className="px-5 py-2">
                <motion.div whileHover={{ x: 3 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/terms" className={`text-base ${darkMode ? "text-gray-300 hover:text-white" : "text-gray-500 hover:text-gray-900"} transition-colors duration-300`}>
                    Terms & Conditions
                  </Link>
                </motion.div>
              </div>
            </motion.nav>
            <motion.p 
              className={`mt-8 text-center text-base ${darkMode ? "text-gray-400" : "text-gray-500"}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              &copy; 2025 RideShare. All rights reserved.
            </motion.p>
          </div>
        </footer>
      </main>
    </motion.div>
  );
}