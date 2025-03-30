
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  // Animation variants for staggered entrance with gentler transitions
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 1.2,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      className="relative overflow-hidden bg-white py-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50 opacity-30"></div>
      
      {/* Subtle floating elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          className="absolute w-32 h-32 rounded-full bg-primary/5 top-10 left-1/4 blur-xl"
          animate={{ 
            y: [0, -8, 0],
            transition: {
              duration: 6,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut"
            }
          }}
          initial={{ opacity: 0.5 }}
        />
        <motion.div 
          className="absolute w-48 h-48 rounded-full bg-primary/5 bottom-10 right-1/4 blur-xl"
          animate={{ 
            x: [0, 8, 0],
            transition: {
              duration: 7,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut"
            }
          }}
          initial={{ opacity: 0.5 }}
        />
        <motion.div 
          className="absolute w-24 h-24 rounded-full bg-secondary/5 top-1/2 left-1/3 blur-xl"
          animate={{ 
            scale: [1, 1.03, 1],
            opacity: [0.6, 0.8, 0.6],
            transition: {
              duration: 8,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut"
            }
          }}
          initial={{ opacity: 0.5 }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div className="flex flex-col items-center text-center">
          <motion.div 
            variants={itemVariants} 
            className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
            whileHover={{ 
              scale: 1.03,
              transition: { duration: 0.2 }
            }}
          >
            Introducing Logos
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="max-w-4xl text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl mb-2"
          >
            Analyze Arguments with{" "}
            <motion.span 
              className="text-primary bg-clip-text"
              animate={{ 
                opacity: [0.9, 1, 0.9],
                scale: [1, 1.01, 1],
                transition: {
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut"
                }
              }}
            >
              AI-Powered Logic
            </motion.span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="max-w-xl text-sm text-muted-foreground mb-3"
          >
            Identify logical fallacies, evaluate premises, and strengthen your critical thinking with AI.
          </motion.p>
          
          <motion.div 
            variants={itemVariants} 
            className="flex flex-row gap-3 justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Button size="sm" className="px-3 shadow-sm">
                Get Started
                <motion.div
                  animate={{ 
                    x: [0, 4, 0],
                    transition: { 
                      duration: 2, 
                      repeat: Infinity, 
                      repeatType: "mirror",
                      ease: "easeInOut" 
                    }
                  }}
                >
                  <ArrowRight className="ml-1 h-3 w-3" />
                </motion.div>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
