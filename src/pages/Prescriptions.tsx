
import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import PrescriptionCard from "@/components/prescriptions/PrescriptionCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Plus, 
  Filter, 
  SortAsc
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Prescriptions() {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Mock data - would normally come from an API
  const prescriptions = [
    {
      id: "rx1",
      patientName: "Sarah Johnson",
      patientId: "p1",
      medications: ["Lisinopril 10mg", "Metformin 500mg"],
      date: "May 12, 2024",
      status: "active" as const,
      doctor: "Smith",
    },
    {
      id: "rx2",
      patientName: "Michael Chen",
      patientId: "p2",
      medications: ["Glipizide 5mg", "Metformin 1000mg"],
      date: "May 18, 2024",
      status: "pending" as const,
      doctor: "Smith",
    },
    {
      id: "rx3",
      patientName: "Emily Rodriguez",
      patientId: "p3",
      medications: ["Albuterol Inhaler", "Loratadine 10mg"],
      date: "April 30, 2024",
      status: "completed" as const,
      doctor: "Johnson",
    },
    {
      id: "rx4",
      patientName: "David Williams",
      patientId: "p4",
      medications: ["Diclofenac 75mg", "Acetaminophen 500mg"],
      date: "May 5, 2024",
      status: "active" as const,
      doctor: "Smith",
    },
  ];
  
  const filteredPrescriptions = prescriptions.filter(prescription => 
    prescription.patientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    prescription.medications.some(med => med.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Prescriptions</h1>
          <Link to="/prescriptions/new">
            <Button className="bg-prescripto-600 hover:bg-prescripto-700">
              <Plus className="h-4 w-4 mr-2" />
              New Prescription
            </Button>
          </Link>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input 
              placeholder="Search prescriptions..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>
          <Button variant="outline" className="md:w-auto">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" className="md:w-auto">
            <SortAsc className="h-4 w-4 mr-2" />
            Sort
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredPrescriptions.length > 0 ? (
            filteredPrescriptions.map(prescription => (
              <PrescriptionCard key={prescription.id} {...prescription} />
            ))
          ) : (
            <div className="col-span-full text-center py-12 border border-dashed border-gray-300 rounded-lg bg-gray-50">
              <p className="text-gray-500">No prescriptions found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
