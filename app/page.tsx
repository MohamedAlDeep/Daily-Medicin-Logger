"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Users, Pill, TrendingUp, AlertTriangle } from "lucide-react"
import Link from "next/link"

// Mock data
const mockStats = {
  totalPatients: 24,
  medicationsToday: 156,
  completedToday: 142,
  missedToday: 14,
  adherenceRate: 91,
}

const recentLogs = [
  { id: 1, patient: "John Smith", medication: "Lisinopril 10mg", time: "08:30 AM", status: "taken" },
  { id: 2, patient: "Mary Johnson", medication: "Metformin 500mg", time: "08:45 AM", status: "taken" },
  { id: 3, patient: "Robert Davis", medication: "Atorvastatin 20mg", time: "09:00 AM", status: "missed" },
  { id: 4, patient: "Sarah Wilson", medication: "Amlodipine 5mg", time: "09:15 AM", status: "taken" },
]

const upcomingMedications = [
  { id: 1, patient: "John Smith", medication: "Metoprolol 25mg", scheduledTime: "12:00 PM" },
  { id: 2, patient: "Mary Johnson", medication: "Metformin 500mg", scheduledTime: "12:30 PM" },
  { id: 3, patient: "Lisa Brown", medication: "Levothyroxine 50mcg", scheduledTime: "01:00 PM" },
]

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Pill className="h-8 w-8 text-blue-600 mr-3" />
              <h1 className="text-2xl font-bold text-gray-900">MedTracker Pro</h1>
            </div>
            <nav className="flex space-x-4">
              <Link href="/patients">
                <Button variant="ghost">Patients</Button>
              </Link>
              <Link href="/medications">
                <Button variant="ghost">Medications</Button>
              </Link>
              <Link href="/daily-log">
                <Button variant="ghost">Daily Log</Button>
              </Link>
              <Link href="/reports">
                <Button variant="ghost">Reports</Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h2>
          <p className="text-gray-600">Overview of today's medication management</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Patients</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockStats.totalPatients}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Medications Today</CardTitle>
              <Pill className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockStats.medicationsToday}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completed</CardTitle>
              <TrendingUp className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{mockStats.completedToday}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Missed</CardTitle>
              <AlertTriangle className="h-4 w-4 text-red-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">{mockStats.missedToday}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Adherence Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockStats.adherenceRate}%</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Medication Logs */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                Recent Medication Logs
              </CardTitle>
              <CardDescription>Latest medication intake records</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentLogs.map((log) => (
                  <div key={log.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-sm">{log.patient}</p>
                      <p className="text-sm text-gray-600">{log.medication}</p>
                      <p className="text-xs text-gray-500">{log.time}</p>
                    </div>
                    <Badge variant={log.status === "taken" ? "default" : "destructive"}>{log.status}</Badge>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <Link href="/daily-log">
                  <Button variant="outline" className="w-full bg-transparent">
                    View All Logs
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Medications */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                Upcoming Medications
              </CardTitle>
              <CardDescription>Medications scheduled for later today</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingMedications.map((med) => (
                  <div key={med.id} className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <div>
                      <p className="font-medium text-sm">{med.patient}</p>
                      <p className="text-sm text-gray-600">{med.medication}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-blue-600">{med.scheduledTime}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <Link href="/daily-log">
                  <Button className="w-full">Log Medications</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
