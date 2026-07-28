import { Server, Camera, Network, Laptop, Printer } from "lucide-react";

// apni service images import kar lena
import itSolutionsImg from "../assets/hero/it-solutions.jpg";
import cctvImg from "../assets/hero/cctv.jpg";
import networkingImg from "../assets/hero/networking.jpg";
import laptopImg from "../assets/hero/laptop-repair.jpg";
import printerImg from "../assets/hero/printer.jpg";

const services = [
  {
    icon: Server,
    image: itSolutionsImg,
    title: "IT Solutions & AMC Services",
    description:
      "We provide complete IT infrastructure support and Annual Maintenance Contract (AMC) services for computers, servers and business networks. Our team handles regular system maintenance, software updates, data backup and proactive monitoring — reducing downtime and keeping your business technology running reliably, day after day.",
  },
  {
    icon: Camera,
    image: cctvImg,
    title: "CCTV Installation & Surveillance Systems",
    description:
      "Protect your office, warehouse or commercial space with professional CCTV installation and surveillance solutions. We handle camera placement, cabling, DVR/NVR setup and remote mobile access configuration, giving you 24/7 visibility and peace of mind over your premises from anywhere.",
  },
  {
    icon: Network,
    image: networkingImg,
    title: "Networking & Structured Cabling Solutions",
    description:
      "From LAN setup and structured cabling to WiFi installation, router configuration and network troubleshooting — we design reliable, secure networking infrastructure for offices of any size, ensuring fast and uninterrupted connectivity across your entire workplace.",
  },
  {
    icon: Laptop,
    image: laptopImg,
    title: "Computer & Laptop Repair Services",
    description:
      "Our certified technicians handle laptop and desktop repairs including screen replacement, battery issues, motherboard troubleshooting, virus removal and performance optimization — for all major brands, with honest diagnosis and no unnecessary part replacements.",
  },
  {
    icon: Printer,
    image: printerImg,
    title: "Printer Sales, Repair & Toner Refill",
    description:
      "Complete printer support under one roof — sales, rental, repair, servicing and toner refill for offices and commercial spaces. We help you avoid printing downtime with regular maintenance plans and fast turnaround on repairs when issues come up.",
  },
];

export default services;