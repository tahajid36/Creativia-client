import axios from "axios";
import React, { useEffect } from "react";
import { Link, useSearchParams } from "react-router";
import {
  CheckCircle,
  Trophy,
  CreditCard,
  Calendar,
  User,
  FileText,
  LayoutDashboard,
  
} from "lucide-react";


const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  console.log(searchParams);
  useEffect(() => {
    if (sessionId) {
     axios.post('https://creativia-server.vercel.app/payment-success', {
        sessionId
     })
    }
  }, [sessionId]);
  return (
    
      <div className="bg-background-light dark:bg-background-dark font-display text-[#111218] dark:text-white antialiased min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-10 relative">
      {/* Abstract Background Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl mix-blend-multiply opacity-70 animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl mix-blend-multiply opacity-70 animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      {/* Confetti */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className={`confetti-piece`}></div>
        ))}
      </div>

      {/* Success Card */}
      <div className="w-full max-w-[640px] bg-white dark:bg-[#1a1d2d] rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-800 p-8 md:p-10 animate-scale-in relative z-10">
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center mb-8 animate-slide-up">
          <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6 shadow-sm">
            <CheckCircle className="text-green-600 dark:text-green-400" size={48} />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#111218] dark:text-white mb-3">
            Payment Successful!
          </h1>
          <p className="text-[#616889] dark:text-gray-400 text-lg max-w-md leading-relaxed">
            You are now officially registered for <br />
            <span className="font-bold text-primary dark:text-blue-400">
              Ultimate Design Challenge 2024
            </span>
          </p>
        </div>

        {/* Transaction Details */}
        <div className="bg-background-light dark:bg-[#131625] rounded-xl p-6 mb-8 border border-gray-200 dark:border-gray-800 animate-slide-up delay-100">
          <h3 className="text-xs font-bold text-[#616889] uppercase tracking-wider mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
            Transaction Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-8">
            <DetailItem icon={<Trophy className="text-primary" size={20} />} label="Contest Name" value="Ultimate Design Challenge 2024" />
            <DetailItem icon={<CreditCard className="text-primary" size={20} />} label="Paid Amount" value="$50.00 USD" />
            <DetailItem icon={<FileText className="text-primary" size={20} />} label="Transaction ID" value="#CH-882910-XY" mono />
            <DetailItem icon={<User className="text-primary" size={20} />} label="Participant" value="Alex Johnson" />
            <DetailItem icon={<Calendar className="text-primary" size={20} />} label="Registration Date" value="Oct 24, 2023" />
            <DetailItem icon={<CreditCard className="text-primary" size={20} />} label="Payment Method" value="Credit Card •••• 4242" />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up delay-200">
          <Link to={'/dashboard/participatedcontest'} className="flex-1 min-w-[140px] inline-flex items-center justify-center rounded-xl h-12 px-6 bg-primary hover:bg-primary-dark transition-all duration-300 transform hover:-translate-y-1 text-white text-base font-bold tracking-wide shadow-lg hover:shadow-primary/30">
            <LayoutDashboard className="mr-2" size={20} /> Go to My Contests
          </Link>
          <Link to={'/'}  className="flex-1 min-w-[140px] inline-flex items-center justify-center rounded-xl h-12 px-6 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-[#111218] dark:text-white transition-all duration-300 transform hover:-translate-y-1 text-base font-bold tracking-wide">
            Back to Home
          </Link>
        </div>

        {/* Support Link */}
        <div className="mt-6 text-center animate-slide-up delay-300">
          <p className="text-sm text-[#616889]">
            Need help?{" "}
            <a className="text-primary font-semibold hover:underline" href="#">
              Contact Support
            </a>
          </p>
        </div>
      </div>
    </div>
  );



};
// Reusable detail item component
const DetailItem = ({ icon, label, value, mono }) => (
  <div className="flex items-start gap-3">
    <div className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm">{icon}</div>
    <div className="flex flex-col">
      <span className="text-xs text-[#616889] dark:text-gray-400 font-medium">{label}</span>
      <span className={`text-sm font-bold text-[#111218] dark:text-white ${mono ? "font-mono" : ""}`}>{value}</span>
    </div>
  </div>
    
  );
export default PaymentSuccess;
