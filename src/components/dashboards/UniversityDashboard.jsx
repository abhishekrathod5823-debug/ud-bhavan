import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { AIBadge } from '../common/AIBadge';
import {
  GraduationCap,
  Sparkles,
  Users,
  CheckCircle2,
  UploadCloud,
  FileCode,
  Layers,
  ChevronRight,
  Clock,
  ShieldCheck,
  Check
} from 'lucide-react';

export const UniversityDashboard = () => {
  const { challenges, setSelectedChallenge, acceptUniversityTeam, triggerConfetti } = useApp();

  // University persona: BIT Sindri
  const assignedChallenges = challenges.filter(c => c.assignedUni.includes('BIT') || c.assignedUni.includes('Birsa'));

  const [selectedForTeam, setSelectedForTeam] = useState(assignedChallenges[0] || challenges[0]);
  const [teamAccepted, setTeamAccepted] = useState(false);
  const [uploadedDeliverable, setUploadedDeliverable] = useState(null);

  const handleAcceptTeam = () => {
    if (selectedForTeam) {
      acceptUniversityTeam(selectedForTeam.id);
      setTeamAccepted(true);
    }
  };

  const handleUploadSimulation = (name) => {
    setUploadedDeliverable(name);
    triggerConfetti();
    setTimeout(() => {
      alert(`Deliverable '${name}' successfully submitted to Ud-Bhavan AI Review Portal.`);
    }, 200);
  };

  return (
    <div className="space-y-8">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1 relative z-10">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
              Academic Innovation Hub
            </span>
            <span className="text-xs bg-blue-800 text-blue-200 px-2 py-0.5 rounded-full">
              NIRF Top Ranked State Tech
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black">
            Birsa Institute of Technology (BIT Sindri)
          </h2>
          <p className="text-xs sm:text-sm text-blue-200 max-w-lg">
            Welcome, <strong>Dr. Ananya Singh</strong> (Professor, Water Resources & Hydrology). 12 challenges mapped to university labs.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-white/10 p-3 rounded-2xl border border-white/10 text-xs">
          <GraduationCap className="w-6 h-6 text-amber-300 flex-shrink-0" />
          <div>
            <div className="text-[10px] text-blue-200">Department Pool</div>
            <div className="font-extrabold text-white">5 Engineering Depts</div>
          </div>
        </div>
      </div>

      {/* 6 Statistics Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {[
          { label: "Assigned Challenges", value: "12", sub: "From 6 Districts", color: "text-slate-900" },
          { label: "Active Projects", value: "8", sub: "Currently in Labs", color: "text-blue-700" },
          { label: "Completed Deployments", value: "4", sub: "Field Verified", color: "text-emerald-700" },
          { label: "Students Involved", value: "58", sub: "B.Tech & M.Tech", color: "text-purple-700" },
          { label: "Faculty Mentors", value: "14", sub: "Lab PIs & Advisors", color: "text-amber-700" },
          { label: "Campus Impact Score", value: "94/100", sub: "AI State Benchmark", color: "text-brand-800" },
        ].map((st, idx) => (
          <div key={idx} className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-2xs">
            <span className="text-[10px] font-bold text-slate-400 uppercase block">{st.label}</span>
            <div className={`text-2xl font-black mt-1 ${st.color}`}>{st.value}</div>
            <span className="text-[10px] text-slate-400 mt-0.5 block">{st.sub}</span>
          </div>
        ))}
      </div>

      {/* AI Suggested Team Section */}
      {selectedForTeam && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-brand-300 shadow-md space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-600" />
                <h3 className="text-lg font-black text-slate-900">
                  AI Automated Team Formation
                </h3>
                <span className="text-[11px] font-bold bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full">
                  Cross-Disciplinary AI Optimization
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Challenge: <strong className="text-slate-800">{selectedForTeam.id} — {selectedForTeam.title}</strong>
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleAcceptTeam}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs shadow-md transition-all ${
                  teamAccepted || selectedForTeam.status === 'In Progress'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-brand-700 hover:bg-brand-800 text-white'
                }`}
              >
                {teamAccepted || selectedForTeam.status === 'In Progress' ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Team Mobilized & Active</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-amber-300" />
                    <span>Accept AI Suggested Team</span>
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Faculty Advisors */}
            <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100 space-y-3">
              <span className="text-xs font-bold text-blue-900 uppercase tracking-wider block">
                Lead Faculty Mentors
              </span>
              <div className="space-y-2">
                <div className="p-3 bg-white rounded-xl border border-blue-200 text-xs">
                  <div className="font-bold text-slate-900">Dr. Ananya Singh</div>
                  <div className="text-[11px] text-blue-700">Professor, Dept of Water Resources & GIS Modeling</div>
                </div>
                <div className="p-3 bg-white rounded-xl border border-blue-200 text-xs">
                  <div className="font-bold text-slate-900">Dr. Rakesh Kumar</div>
                  <div className="text-[11px] text-blue-700">Associate Professor, Civil Hydro-Structures</div>
                </div>
              </div>
            </div>

            {/* Students Team */}
            <div className="p-4 rounded-2xl bg-purple-50/50 border border-purple-100 space-y-3">
              <span className="text-xs font-bold text-purple-900 uppercase tracking-wider block">
                Selected Student Innovators (4 Members)
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  { name: "Aarav Gupta", role: "IoT Sensor Firmware & LoRaWAN" },
                  { name: "Priya Murmu", role: "GIS Drainage Topography Modeling" },
                  { name: "Rohit Verma", role: "Microcontroller & Solar Battery Pack" },
                  { name: "Neha Soren", role: "Citizen Early-Warning Web App" }
                ].map((st, idx) => (
                  <div key={idx} className="p-2.5 bg-white rounded-xl border border-purple-200 text-xs">
                    <div className="font-bold text-slate-900">{st.name}</div>
                    <div className="text-[10px] text-purple-700 font-medium">{st.role}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Assigned Challenges Table */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-extrabold text-slate-900">
            Assigned Challenges Queue
          </h3>
          <span className="text-xs font-bold text-brand-700 bg-brand-50 px-2.5 py-1 rounded-lg border border-brand-200">
            {assignedChallenges.length} Active Challenges
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 font-bold border-b border-slate-200">
              <tr>
                <th className="p-3">Challenge ID</th>
                <th className="p-3">Title & Domain</th>
                <th className="p-3">AI Match</th>
                <th className="p-3">Target Deadline</th>
                <th className="p-3">Status</th>
                <th className="p-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {assignedChallenges.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                  <td className="p-3 font-mono font-bold text-slate-700">
                    {item.id}
                  </td>
                  <td className="p-3">
                    <div className="font-bold text-slate-900 max-w-sm truncate">{item.title}</div>
                    <div className="text-[10px] text-slate-500">{item.category} • {item.district}</div>
                  </td>
                  <td className="p-3">
                    <AIBadge type="match" score={item.matchScore} />
                  </td>
                  <td className="p-3 text-slate-600 font-medium">
                    Oct 30, 2026
                  </td>
                  <td className="p-3">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand-100 text-brand-900 border border-brand-300">
                      {item.status}
                    </span>
                  </td>
                  <td className="p-3 text-right">
                    <button
                      onClick={() => {
                        setSelectedForTeam(item);
                        setSelectedChallenge(item);
                      }}
                      className="px-3 py-1.5 rounded-lg bg-slate-900 text-white font-semibold text-[11px] hover:bg-slate-800"
                    >
                      Inspect Team
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Deliverable Submissions Section */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-4">
        <div>
          <h3 className="text-base font-extrabold text-slate-900">
            Project Deliverable Uploads & Verification
          </h3>
          <p className="text-xs text-slate-500">
            Upload student artifacts to trigger automated milestone verification and unlock CSR tranche payouts.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {[
            { name: "Research Report", desc: "Hydrology GIS survey", state: "Verified" },
            { name: "CAD / Hardware Prototype", desc: "Ultrasonic sensor housing", state: "Verified" },
            { name: "Source Code & Firmware", desc: "LoRaWAN telemetry repo", state: "Submitted" },
            { name: "Ward 26 Field Test", desc: "Monsoon surge validation", state: "Pending" },
            { name: "Final Municipal Report", desc: "RMC deployment signoff", state: "Pending" }
          ].map((del, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-[10px] font-bold text-slate-400">
                  <span>M-0{idx + 1}</span>
                  <span className={`px-2 py-0.5 rounded-full ${
                    del.state === 'Verified' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                  }`}>
                    {del.state}
                  </span>
                </div>
                <h4 className="text-xs font-bold text-slate-900 mt-1">{del.name}</h4>
                <p className="text-[10px] text-slate-500">{del.desc}</p>
              </div>

              <button
                onClick={() => handleUploadSimulation(del.name)}
                className="w-full py-1.5 rounded-xl bg-white hover:bg-brand-50 border border-slate-200 text-slate-800 text-[11px] font-bold flex items-center justify-center gap-1 shadow-2xs"
              >
                <UploadCloud className="w-3.5 h-3.5 text-brand-700" />
                <span>Upload File</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
