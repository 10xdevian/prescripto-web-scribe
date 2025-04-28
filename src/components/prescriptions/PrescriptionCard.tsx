
import { Button } from "@/components/ui/button";
import { FileText, FileCheck, FileClock, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

type PrescriptionStatus = "active" | "completed" | "pending" | "expired";

interface PrescriptionCardProps {
  id: string;
  patientName: string;
  patientId: string;
  medications: string[];
  date: string;
  status: PrescriptionStatus;
  doctor?: string;
}

export default function PrescriptionCard({
  id,
  patientName,
  patientId,
  medications,
  date,
  status,
  doctor,
}: PrescriptionCardProps) {
  const statusConfig = {
    active: {
      icon: FileText,
      color: "bg-green-100 text-green-800",
      label: "Active",
    },
    completed: {
      icon: FileCheck,
      color: "bg-gray-100 text-gray-800",
      label: "Completed",
    },
    pending: {
      icon: FileClock,
      color: "bg-yellow-100 text-yellow-800",
      label: "Pending",
    },
    expired: {
      icon: FileText,
      color: "bg-red-100 text-red-800",
      label: "Expired",
    },
  };

  const { icon: StatusIcon, color, label } = statusConfig[status];

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="p-5">
        <div className="flex justify-between">
          <Badge variant="outline" className={cn("font-medium", color)}>
            {label}
          </Badge>
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="h-4 w-4 mr-1.5" />
            {date}
          </div>
        </div>

        <div className="mt-3">
          <h3 className="font-semibold text-lg">{patientName}</h3>
          {doctor && <p className="text-sm text-gray-500">Dr. {doctor}</p>}
        </div>

        <div className="mt-3">
          <p className="text-sm font-medium text-gray-700">Medications:</p>
          <ul className="mt-1 space-y-1">
            {medications.map((medication, i) => (
              <li key={i} className="text-sm text-gray-600 flex items-center">
                <StatusIcon className="h-3.5 w-3.5 mr-2 text-gray-400" />
                {medication}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5 flex gap-2">
          <Link to={`/patients/${patientId}`} className="flex-1">
            <Button variant="outline" className="w-full">
              Patient Details
            </Button>
          </Link>
          <Link to={`/prescriptions/${id}`} className="flex-1">
            <Button className="w-full bg-prescripto-600 hover:bg-prescripto-700">
              View Prescription
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
