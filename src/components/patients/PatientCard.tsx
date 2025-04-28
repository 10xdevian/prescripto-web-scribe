
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Calendar, FileText } from "lucide-react";
import { Link } from "react-router-dom";

interface PatientCardProps {
  id: string;
  name: string;
  age: number;
  gender: string;
  condition?: string;
  avatarUrl?: string;
  lastVisit?: string;
  upcomingAppointment?: string;
}

export default function PatientCard({
  id,
  name,
  age,
  gender,
  condition,
  avatarUrl,
  lastVisit,
  upcomingAppointment,
}: PatientCardProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="p-5">
        <div className="flex items-center gap-4">
          <Avatar className="h-14 w-14">
            <AvatarImage src={avatarUrl} alt={name} />
            <AvatarFallback className="bg-prescripto-100 text-prescripto-800 text-lg">
              {initials}
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold text-lg">{name}</h3>
            <div className="text-sm text-gray-500">
              {age} years • {gender}
              {condition && ` • ${condition}`}
            </div>
          </div>
        </div>

        {(lastVisit || upcomingAppointment) && (
          <div className="mt-4 space-y-2">
            {lastVisit && (
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                <span>
                  <span className="font-medium">Last Visit:</span> {lastVisit}
                </span>
              </div>
            )}
            {upcomingAppointment && (
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                <span>
                  <span className="font-medium">Upcoming:</span>{" "}
                  {upcomingAppointment}
                </span>
              </div>
            )}
          </div>
        )}

        <div className="mt-5 flex gap-2">
          <Link to={`/patients/${id}`} className="flex-1">
            <Button variant="outline" className="w-full">
              View Details
            </Button>
          </Link>
          <Link to={`/prescriptions/new?patient=${id}`} className="flex-1">
            <Button className="w-full bg-prescripto-600 hover:bg-prescripto-700">
              <FileText className="h-4 w-4 mr-2" />
              Prescribe
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
