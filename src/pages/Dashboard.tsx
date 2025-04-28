
import DashboardLayout from "@/components/DashboardLayout";
import StatCard from "@/components/dashboard/StatCard";
import PatientCard from "@/components/patients/PatientCard";
import PrescriptionCard from "@/components/prescriptions/PrescriptionCard";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  FileText, 
  Clock, 
  TrendingUp,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  // Mock data - would normally come from an API
  const recentPatients = [
    {
      id: "p1",
      name: "Sarah Johnson",
      age: 42,
      gender: "Female",
      condition: "Hypertension",
      lastVisit: "May 12, 2024",
      upcomingAppointment: "June 15, 2024",
    },
    {
      id: "p2",
      name: "Michael Chen",
      age: 35,
      gender: "Male",
      condition: "Diabetes Type 2",
      lastVisit: "May 18, 2024",
    },
  ];

  const recentPrescriptions = [
    {
      id: "rx1",
      patientName: "Sarah Johnson",
      patientId: "p1",
      medications: ["Lisinopril 10mg", "Metformin 500mg"],
      date: "May 12, 2024",
      status: "active" as const,
    },
    {
      id: "rx2",
      patientName: "Michael Chen",
      patientId: "p2",
      medications: ["Glipizide 5mg", "Metformin 1000mg"],
      date: "May 18, 2024",
      status: "pending" as const,
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-bold">Welcome back, Dr. Smith</h1>
          <p className="text-gray-500">Here's what's happening with your patients today.</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard 
            title="Total Patients" 
            value="1,248" 
            icon={Users} 
            trend={5.2}
          />
          <StatCard 
            title="Active Prescriptions" 
            value="84" 
            icon={FileText} 
            trend={-2.1}
            iconClassName="bg-blue-100 text-blue-600"
          />
          <StatCard 
            title="Appointments Today" 
            value="12" 
            icon={Clock} 
            iconClassName="bg-amber-100 text-amber-600"
          />
          <StatCard 
            title="This Month" 
            value="164" 
            icon={TrendingUp} 
            trend={12.5}
            iconClassName="bg-green-100 text-green-600"
          />
        </div>

        {/* Recent Patients */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Recent Patients</h2>
            <Link to="/patients">
              <Button variant="ghost" className="text-prescripto-600 hover:text-prescripto-700 hover:bg-prescripto-50">
                View All
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {recentPatients.map(patient => (
              <PatientCard key={patient.id} {...patient} />
            ))}
          </div>
        </div>

        {/* Recent Prescriptions */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Recent Prescriptions</h2>
            <Link to="/prescriptions">
              <Button variant="ghost" className="text-prescripto-600 hover:text-prescripto-700 hover:bg-prescripto-50">
                View All
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {recentPrescriptions.map(prescription => (
              <PrescriptionCard key={prescription.id} {...prescription} />
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
