import { useState } from "react";
import {
  ArrowLeft,
  Search,
  Bell,
  Home,
  BarChart2,
  Briefcase,
  Settings,
  LogOut,
  ChevronDown,
  ChevronRight,
  Plus,
  Send,
  ArrowUp,
  ArrowDown,
} from "lucide-react";

import SideBar from "./SideBar";
import MainContent from "./mainContent/MainContent";

export default function CryptoDashboard() {
  const [timeframe, setTimeframe] = useState("1D");
  const [overviewPeriod, setOverviewPeriod] = useState("Monthly");

  return (
 <div className="bg-[#1E1A2F]">
     <div className="flex h-screen bg-[#1E1A2F] text-white ">
      <SideBar></SideBar>
      <MainContent
        overviewPeriod={overviewPeriod}
        timeframe={timeframe}
        setTimeframe={setTimeframe}
      ></MainContent>
    </div>
 </div>
  );
}
