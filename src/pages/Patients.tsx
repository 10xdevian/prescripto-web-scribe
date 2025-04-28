
import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import PatientCard from "@/components/patients/PatientCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus, Filter, SortAsc } from "lucide-react";
import { Link } from "react-router-dom";

export default function Patients() {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Mock data - would normally come from an API
  const patients = [
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
    {
      id: "p3",
      name: "Emily Rodriguez",
      age: 28,
      gender: "Female",
      condition: "Asthma",
      lastVisit: "April 30, 2024",
    },
    {
      id: "p4",
      name: "David Williams",
      age: 52,
      gender: "Male",
      condition: "Arthritis",
      lastVisit: "May 5, 2024",
      upcomingAppointment: "May 25, 2024",
    },
  ];
  
  const filteredPatients = patients.filter(patient => 
    patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    patient.condition?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Patients</h1>
          <Link to="/patients/new">
            <Button className="bg-prescripto-600 hover:bg-prescripto-700">
              <Plus className="h-4 w-4 mr-2" />
              Add Patient
            </Button>
          </Link>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input 
              placeholder="Search patients..." 
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPatients.length > 0 ? (
            filteredPatients.map(patient => (
              <PatientCard key={patient.id} {...patient} />
            ))
          ) : (
            <div className="col-span-full text-center py-12 border border-dashed border-gray-300 rounded-lg bg-gray-50">
              <p className="text-gray-500">No patients found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
