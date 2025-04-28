
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Heart, Award, LockKeyhole, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-prescripto-800 to-prescripto-600 py-20 md:py-28 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Digital Prescriptions <br className="hidden md:block" />
                Simplified
              </h1>
              <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-lg">
                Prescripto helps healthcare providers create, manage, and track prescriptions digitally, reducing errors and improving patient care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link to="/register">
                  <Button size="lg" className="bg-white text-prescripto-800 hover:bg-blue-100">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/demo">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    View Demo
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://res.cloudinary.com/dqt9xziov/image/upload/v1723129708/prescripto-hero-mockup_rql2z6.png" 
                alt="Prescripto dashboard" 
                className="w-full max-w-md mx-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Prescripto</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our comprehensive platform streamlines prescription management and improves patient outcomes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <div className="bg-prescripto-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <CheckCircle className="h-7 w-7 text-prescripto-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Error Reduction</h3>
              <p className="text-gray-600">
                Digital prescriptions eliminate handwriting errors and automatically check for drug interactions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <div className="bg-prescripto-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Heart className="h-7 w-7 text-prescripto-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Better Patient Care</h3>
              <p className="text-gray-600">
                Access complete medication history and provide clear instructions for improved adherence.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <div className="bg-prescripto-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Award className="h-7 w-7 text-prescripto-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Compliance</h3>
              <p className="text-gray-600">
                Ensure all prescriptions meet regulatory requirements and maintain comprehensive records.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <div className="bg-prescripto-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <LockKeyhole className="h-7 w-7 text-prescripto-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Security</h3>
              <p className="text-gray-600">
                Industry-leading encryption and authentication to protect sensitive patient data.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <div className="bg-prescripto-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Users className="h-7 w-7 text-prescripto-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
              <p className="text-gray-600">
                Seamlessly share information between healthcare providers, pharmacies, and patients.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <div className="bg-prescripto-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <ArrowRight className="h-7 w-7 text-prescripto-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Efficiency</h3>
              <p className="text-gray-600">
                Reduce administrative overhead and focus more time on patient care with streamlined workflows.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to transform your practice?</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of healthcare professionals using Prescripto to improve patient care and streamline their workflow.
          </p>
          <Link to="/register">
            <Button size="lg" className="bg-prescripto-600 hover:bg-prescripto-700">
              Get Started for Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <Link to="/" className="text-xl font-bold text-prescripto-600">
                Prescripto
              </Link>
              <p className="text-gray-500 mt-2">© 2024 Prescripto. All rights reserved.</p>
            </div>
            <div className="flex gap-8">
              <Link to="/privacy" className="text-gray-600 hover:text-prescripto-600">
                Privacy
              </Link>
              <Link to="/terms" className="text-gray-600 hover:text-prescripto-600">
                Terms
              </Link>
              <Link to="/contact" className="text-gray-600 hover:text-prescripto-600">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
