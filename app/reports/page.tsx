"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { BarChart, TrendingUp, TrendingDown, Users, Pill, Calendar, Download } from "lucide-react"
import Link from "next/link"

// Mock data for reports
const adherenceData = [
  { patient: "John Smith", totalMeds: 60, taken: 55, missed: 5, adherenceRate: 92 },
  { patient: "Mary Johnson", totalMeds: 45, taken: 42, missed: 3, adherenceRate: 93 },
  { patient: "Robert Davis", totalMeds: 30, taken: 25, missed: 5, adherenceRate: 83 },
  { patient: "Sarah Wilson", totalMeds: 40, taken: 38, missed: 2, adherenceRate: 95 },
  { patient: "Lisa Brown", totalMeds: 35, taken: 30, missed: 5, adherenceRate: 86 },
]

const medicationStats = [
  { medication: "Lisinopril", prescribed: 15, adherenceRate: 89 },
  { medication: "Metformin", prescribed: 12, adherenceRate: 94 },
  { medication: "Atorvastatin", prescribed: 10, adherenceRate: 87 },
  { medication: "Amlodipine", prescribed: 8, adherenceRate: 91 },
  { medication: "Levothyroxine", prescribed: 6, adherenceRate: 96 },
]

const weeklyTrends = [
  { week: "Week 1", adherenceRate: 88 },
  { week: "Week 2", adherenceRate: 91 },
  { week: "Week 3", adherenceRate: 89 },
  { week: "Week 4", adherenceRate: 93 },
]

export default function ReportsPage() {
  const [selectedPeriod, setSelectedPeriod] = useState("month")
  const [selectedPatient, setSelectedPatient] = useState("all")

  const overallStats = {
    totalPatients: adherenceData.length,
    averageAdherence: Math.round(adherenceData.reduce((sum, p) => sum + p.adherenceRate, 0) / adherenceData.length),
    totalMedications: adherenceData.reduce((sum, p) => sum + p.totalMeds, 0),
    totalMissed: adherenceData.reduce((sum, p) => sum + p.missed, 0),
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <BarChart className="h-8 w-8 text-blue-600 mr-3" />
                <h1 className="text-2xl font-bold text-gray-900">Reports & Analytics</h1>
              </Link>
            </div>
            <Link href="/">
              <Button variant="outline">Back to Dashboard</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Medication Reports</h2>
            <p className="text-gray-600">Analyze medication adherence and patient outcomes</p>
          </div>
          <div className="flex items-center space-x-4">
            <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
                <SelectItem value="quarter">This Quarter</SelectItem>
                <SelectItem value="year">This Year</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Patients</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{overallStats.totalPatients}</div>
              <p className="text-xs text-muted-foreground">Active patients</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Adherence</CardTitle>
              <TrendingUp className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{overallStats.averageAdherence}%</div>
              <p className="text-xs text-muted-foreground">+2% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Medications</CardTitle>
              <Pill className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{overallStats.totalMedications}</div>
              <p className="text-xs text-muted-foreground">Scheduled this month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Missed Doses</CardTitle>
              <TrendingDown className="h-4 w-4 text-red-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">{overallStats.totalMissed}</div>
              <p className="text-xs text-muted-foreground">-3 from last month</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Patient Adherence Report */}
          <Card>
            <CardHeader>
              <CardTitle>Patient Adherence Report</CardTitle>
              <CardDescription>Medication adherence rates by patient</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {adherenceData.map((patient, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{patient.patient}</span>
                      <div className="flex items-center space-x-2">
                        <Badge
                          variant={
                            patient.adherenceRate >= 90
                              ? "default"
                              : patient.adherenceRate >= 80
                                ? "secondary"
                                : "destructive"
                          }
                        >
                          {patient.adherenceRate}%
                        </Badge>
                      </div>
                    </div>
                    <Progress value={patient.adherenceRate} className="h-2" />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Taken: {patient.taken}</span>
                      <span>Missed: {patient.missed}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Medication Performance */}
          <Card>
            <CardHeader>
              <CardTitle>Medication Performance</CardTitle>
              <CardDescription>Adherence rates by medication type</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {medicationStats.map((med, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{med.medication}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-gray-500">{med.prescribed} patients</span>
                        <Badge variant={med.adherenceRate >= 90 ? "default" : "secondary"}>{med.adherenceRate}%</Badge>
                      </div>
                    </div>
                    <Progress value={med.adherenceRate} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Weekly Trends */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              Weekly Adherence Trends
            </CardTitle>
            <CardDescription>Medication adherence trends over the past month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-4 gap-4">
              {weeklyTrends.map((week, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm font-medium text-gray-600 mb-2">{week.week}</p>
                  <p className="text-2xl font-bold text-blue-600">{week.adherenceRate}%</p>
                  <div className="mt-2">
                    {index > 0 && (
                      <div className="flex items-center justify-center">
                        {week.adherenceRate > weeklyTrends[index - 1].adherenceRate ? (
                          <TrendingUp className="h-4 w-4 text-green-600" />
                        ) : (
                          <TrendingDown className="h-4 w-4 text-red-600" />
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Detailed Patient Report */}
        <Card>
          <CardHeader>
            <CardTitle>Detailed Patient Analysis</CardTitle>
            <CardDescription>Comprehensive medication tracking data</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Patient</th>
                    <th className="text-left p-2">Total Medications</th>
                    <th className="text-left p-2">Taken</th>
                    <th className="text-left p-2">Missed</th>
                    <th className="text-left p-2">Adherence Rate</th>
                    <th className="text-left p-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {adherenceData.map((patient, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="p-2 font-medium">{patient.patient}</td>
                      <td className="p-2">{patient.totalMeds}</td>
                      <td className="p-2 text-green-600">{patient.taken}</td>
                      <td className="p-2 text-red-600">{patient.missed}</td>
                      <td className="p-2">
                        <div className="flex items-center space-x-2">
                          <Progress value={patient.adherenceRate} className="h-2 w-16" />
                          <span>{patient.adherenceRate}%</span>
                        </div>
                      </td>
                      <td className="p-2">
                        <Badge
                          variant={
                            patient.adherenceRate >= 90
                              ? "default"
                              : patient.adherenceRate >= 80
                                ? "secondary"
                                : "destructive"
                          }
                        >
                          {patient.adherenceRate >= 90
                            ? "Excellent"
                            : patient.adherenceRate >= 80
                              ? "Good"
                              : "Needs Attention"}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
