import SQLServer from '../components/icons/SQLServer.astro';
import MySQL from '../components/icons/MySQL.astro';
import SQLite from '../components/icons/SQLite.astro';
import Windows from '../components/icons/Windows.astro';
import Ubuntu from '../components/icons/Ubuntu.astro';
import Linux from '../components/icons/Linux.astro';
import Raspberry from '../components/icons/Raspberry.astro';
import Bash from '../components/icons/Bash.astro';
import Android from '../components/icons/Android.astro';
import Powershell from '../components/icons/Powershell.astro';
import VisualStudio from '../components/icons/VisualStudio.astro';
import CSharp from '../components/icons/CSharp.astro';
import HTML from '../components/icons/HTML.astro';
import CSS from '../components/icons/CSS.astro';
import JS from '../components/icons/JS.astro';
import ASTRO from '../components/icons/Astro.astro';
import Tailwind from '../components/icons/Tailwind.astro';
import React from '../components/icons/React.astro';
import Redux from '../components/icons/Redux.astro'
import Bootstrap from '../components/icons/Bootstrap.astro';
import Python from '../components/icons/Python.astro';
import Java from '../components/icons/Java.astro';
import SAGE from "../components/icons/Sage.astro";
import ODOO from "../components/icons/Odoo.astro";
import Net from '../components/icons/Net.astro';


export const TAGS = {
  SQLSERVER: {
    name: 'SQL Server',
    icon: SQLServer,
    class: 'bg-red-500 text-white px-3 py-1 rounded-full',
    level: 90,
  },
  MYSQL: {
    name: 'MySQL',
    icon: MySQL,
    class: 'bg-cyan-600 text-white px-3 py-1 rounded-full',
    level: 85,
  },
  SQLite: {
    name: 'SQLite',
    icon: SQLite,
    class: 'bg-blue-500 text-white px-3 py-1 rounded-full',
    level: 80,
  },
  Windows: {
    name: 'Windows',
    icon: Windows,
    class: 'bg-indigo-800 text-white px-3 py-1 rounded-full',
    level: 95,
  },
  Ubuntu: {
    name: 'Ubuntu',
    icon: Ubuntu,
    class: 'bg-amber-700/70 text-white px-3 py-1 rounded-full',
    level: 90,
  },
  Linux: {
    name: 'Linux',
    icon: Linux,
    class: 'bg-gray-400/90 text-black px-3 py-1 rounded-full',
    level: 90,
  },
  Raspberry: {
    name: 'Raspberry',
    icon: Raspberry,
    class: 'bg-fuchsia-800/70 text-white px-3 py-1 rounded-full',
    level: 85,
  },
  Bash: {
    name: 'Bash',
    icon: Bash,
    class: 'bg-gray-700/70 text-white px-3 py-1 rounded-full',
    level: 75,
  },
  Android: {
    name: 'Android',
    icon: Android,
    class: 'bg-emerald-500/70 text-black px-3 py-1 rounded-full',
    level: 75,
  },
  Powershell: {
    name: 'Powershell',
    icon: Powershell,
    class: 'bg-indigo-900/90 text-white px-3 py-1 rounded-full',
    level: 75,
  },
  VisualStudio: {
    name: "Visual Studio",
    icon: VisualStudio,
    class: "bg-red text-red px-3 py-1 rounded-full",
    level: 75,
  },
  CSHARP: {
    name: "C#",
    icon: CSharp,
    class: "bg-sky-300 text-white px-3 py-1 rounded-full",
    level: 65,
  },
  AhoraERP: {
    name: "Ahora ERP",
    icon: "/icons/logo-ahora.png",
    class: "bg-sky-200/90 px-3 py-1 rounded-full",
    level: 60,
  },
  CrystalReports: {
    name: "Crystal Reports",
    icon: "/icons/report.png",
    class: "bg-emerald-300/90 px-3 py-1 rounded-full",
    level: 80,
  },
  SAGE: {
    name: "Sage",
    icon: SAGE,
    class: "bg-green-700/80 text-white px-3 py-1 rounded-full",
    level: 60,
  },
  ODOO: {
    name: "Odoo",
    icon: ODOO,
    class: "bg-fuchsia-400/60 px-3 py-1 rounded-full",
    level: 50,
  },
  VELNEO: {
    name: "Velneo",
    icon: "/icons/logo-velneo.webp",
    class: "bg-red-500/60 px-3 py-1 rounded-full",
    level: 50,
  },
  AGORA: {
    name: "Agora",
    icon: "/icons/logo-Agora.png",
    class: "bg-rose-500/80 px-3 py-1 rounded-full",
    level: 70,
  },
  HTML: {
    name: "HTML",
    icon: HTML,
    class: "bg-orange-700/90 px-3 py-1 rounded-full",
    level: 95,
  },
  CSS: {
    name: "CSS",
    icon: CSS,
    class: "bg-sky-600/90 px-3 py-1 rounded-full",
    level: 85,
  },
  JS: {
    name: "JavaScript",
    icon: JS,
    class: "bg-yellow-500/90 px-3 py-1 rounded-full",
    level: 75,
  },
  ASTRO: {
    name: "Astro",
    icon: ASTRO,
    class: "bg-amber-600/90 px-3 py-1 rounded-full",
    level: 90,
  },
  TAILWIND: {
    name: "Tailwind",
    icon: Tailwind,
    class: "bg-cyan-600/90 px-3 py-1 rounded-full",
    level: 85,
  },
  React: {
    name: "React",
    icon: React,
    class: "bg-amber-600/90 px-3 py-1 rounded-full",
    level: 80,
  },
  Redux: {
    name: "Redux",
    icon: Redux,
    class: "bg-cyan-600/90 px-3 py-1 rounded-full",
    level: 80,
  },
  Bootstrap: {
    name: "Bootstrap",
    icon: Bootstrap,
    class: "bg-cyan-600/90 px-3 py-1 rounded-full",
    level: 80,
  },
  VMWARE: {
    name: "WMWare",
    icon: "/icons/VMware-Logo.webp",
    class: "bg-gray-100 px-3 py-1 rounded-full",
    level: 85,
  },
  VirtualBox: {
    name: "VirtualBox",
    icon: "/icons/Virtualbox_logo.webp",
    class: "bg-purple-800/80 text-white px-3 py-1 rounded-full",
    level: 100,
  },
  HyperV: {
    name: "Hyper-V",
    icon: "/icons/microsoft-hyper-v.webp",
    class: "bg-cyan-300/80 px-3 py-1 rounded-full",
    level: 90,
  },
  Python: {
    name: "Python",
    icon: Python,
    class: "bg-blue-800/80 text-white px-3 py-1 rounded-full",
    level: 80,
  },
  Java: {
    name: "Java",
    icon: Java,
    class: "bg-orange-200/80  px-3 py-1 rounded-full",
    level: 75,
  },
  Net: {
    name: ".Net",
    icon: Net,
    class: "bg-purple-200/80  px-3 py-1 rounded-full",
    level: 70,
  },
};

export const SKILLS = [
  {
    category: {
      es: "Bases de Datos",
      en: "Databases",
      ca: "Bases de dades",
    },
    tags: [TAGS.SQLSERVER, TAGS.MYSQL, TAGS.SQLite],
  },
  {
    category: {
      es: "Sistemas",
      en: "Systems",
      ca: "Sistemes",
    },
    tags: [TAGS.Windows, TAGS.Ubuntu, TAGS.Linux, TAGS.Raspberry, TAGS.Bash, TAGS.Android, TAGS.Powershell],
  },
  {
    category: {
      es: "Virtualización",
      en: "Virtualization",
      ca: "Virtualització",
    },
    tags: [TAGS.VMWARE, TAGS.VirtualBox, TAGS.HyperV],
  },
  {
    category: {
      es: "Web",
      en: "Web",
      ca: "Web",
    },
    tags: [TAGS.HTML, TAGS.CSS, TAGS.JS, TAGS.ASTRO, TAGS.TAILWIND, TAGS.React, TAGS.Redux],
  },
  {
    category: {
      es: "Lenguajes de programación",
      en: "Programming languages",
      ca: "Llenguatges de programació",
    },
    tags: [TAGS.CSHARP, TAGS.Python, TAGS.Java, TAGS.Net],
  },
];