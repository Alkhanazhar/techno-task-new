"use client";

import { motion } from "framer-motion";
import { Check, X, Star, Zap, Crown, ArrowRight } from "lucide-react";
import { cn } from "../hero/lib/utils";
import Link from "next/link";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: 29,
      period: "month",
      description: "Perfect for small teams and for startups",
      icon: <Star className="w-6 h-6" />,
      color: "bg-gradient-to-r from-[#C068D1] to-[#3224AF] cursor-pointer",
      popular: false,
      features: [
        { name: "Up to 5 team members", included: true },
        { name: "10GB storage", included: true },
        { name: "Basic analytics", included: true },
        { name: "Email support", included: true },
        { name: "Mobile app access", included: true },
        { name: "Advanced integrations", included: false },
        { name: "Custom workflows", included: false },
        { name: "Priority support", included: false },
        { name: "Advanced security", included: false },
        { name: "Custom branding", included: false },
        { name: "API access", included: false },
        { name: "Dedicated account manager", included: false },
      ],
    },
    {
      name: "Growth",
      price: 79,
      period: "month",
      description: "Ideal for growing businesses need more power",
      icon: <Zap className="w-6 h-6" />,
      color: "bg-gradient-to-r from-[#C068D1] to-[#3224AF] cursor-pointer",
      popular: true,
      features: [
        { name: "Up to 25 team members", included: true },
        { name: "100GB storage", included: true },
        { name: "Advanced analytics", included: true },
        { name: "Priority email support", included: true },
        { name: "Mobile app access", included: true },
        { name: "Advanced integrations", included: true },
        { name: "Custom workflows", included: true },
        { name: "Priority support", included: true },
        { name: "Advanced security", included: false },
        { name: "Custom branding", included: false },
        { name: "API access", included: true },
        { name: "Dedicated account manager", included: false },
      ],
    },
    {
      name: "Enterprise",
      price: 199,
      period: "month",
      description: "For large organizations with advanced needs",
      icon: <Crown className="w-6 h-6" />,
      color: "bg-gradient-to-r from-[#C068D1] to-[#3224AF] cursor-pointer",
      popular: false,
      features: [
        { name: "Unlimited team members", included: true },
        { name: "Unlimited storage", included: true },
        { name: "Enterprise analytics", included: true },
        { name: "24/7 phone & email support", included: true },
        { name: "Mobile app access", included: true },
        { name: "Advanced integrations", included: true },
        { name: "Custom workflows", included: true },
        { name: "Priority support", included: true },
        { name: "Advanced security", included: true },
        { name: "Custom branding", included: true },
        { name: "API access", included: true },
        { name: "Dedicated account manager", included: true },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-tl to-[#21082b] from-[#27022e] text-white sm:py-24 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-5xl font-semibold mb-4">
            <span className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] cursor-pointer bg-clip-text text-transparent">
              Transparent Pricing
            </span>
          </h1>
          <p className="text-lg font-normal text-gray-300 max-w-2xl mx-auto">
            Choose the perfect plan for your team. No hidden fees, no surprises.{" "}
            <br className="md:block hidden" />
            Scale up or down as your business grows.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={cardVariants}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              whileHover={{ y: -15 }}
              className={`relative bg-white/10 backdrop-blur-lg rounded-2xl md:p-7 p-4 border border-white/20 
                 hover:ring-2 hover:ring-purple-400 hover:shadow-2xl hover:shadow-purple-500/25
              `}
            >
              {plan.popular && (
                <div className="absolute -top-3 right-0 left-0 mx-auto w-fit">
                  <div className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] text-primary-foreground rounded-full px-4 py-1 shadow-sm">
                    {/* <Sparkles className="mr-1 h-3.5 w-3.5" /> */}
                    Popular
                  </div>
                </div>
              )}

              <div className="text-center !space-y-8">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${plan.color} mb-4`}
                >
                  <span className="text-white">{plan.icon}</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-300 text-sm mb-4">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">
                    ${plan.price}
                  </span>
                  <span className="text-gray-300">/{plan.period}</span>
                </div>

                <button
                  variant={plan.popular ? "default" : "outline"}
                  className={cn(
                    "w-full font-medium transition-all rounded-2xl flex items-center gap-2 justify-center p-4 duration-300",
                    plan.popular
                      ? "bg-primary hover:bg-primary/90 hover:shadow-primary/20 hover:shadow-md"
                      : "hover:border-primary/30 border hover:bg-primary/5 hover:text-primary"
                  )}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Feature Comparison Matrix */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
        >
          <h2 className="text-3xl font-semibold text-center mb-8">
            <span className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] cursor-pointer bg-clip-text text-transparent">
              Feature Comparison
            </span>
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-6 text-white font-semibold">
                    Features
                  </th>
                  {plans.map((plan) => (
                    <th key={plan.name} className="text-center py-4 px-6">
                      <div className="text-white font-semibold">
                        {plan.name}
                      </div>
                      <div className="text-sm text-gray-300">
                        ${plan.price}/{plan.period}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {plans[0].features.map((feature, featureIndex) => (
                  <motion.tr
                    key={feature.name}
                    variants={featureVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: featureIndex * 0.1 }}
                    className="border-b border-white/5 hover:bg-white/5 transition-colors"
                  >
                    <td className="py-4 px-6 text-gray-300">{feature.name}</td>
                    {plans.map((plan) => {
                      const planFeature = plan.features[featureIndex];
                      return (
                        <td key={plan.name} className="text-center py-4 px-6">
                          {planFeature.included ? (
                            <Check className="w-5 h-5 text-green-400 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-gray-500 mx-auto" />
                          )}
                        </td>
                      );
                    })}
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-300 mb-6">
            Our team is here to help you choose the right plan for your needs.
          </p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] cursor-pointer text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Contact Sales
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;
