// all images imported from images directory
import gpu_01_image_01 from "../images/gpu_01.1.jpg";
import gpu_01_image_02 from "../images/gpu_01.2.jpg";
import gpu_01_image_03 from "../images/gpu_01.3.jpg";

import gpu_02_image_01 from "../images/gpu_02.1.jpg";
import gpu_02_image_02 from "../images/gpu_02.2.jpg";
import gpu_02_image_03 from "../images/gpu_02.3.jpg";

import gpu_03_image_01 from "../images/gpu_03.1.jpg";
import gpu_03_image_02 from "../images/gpu_03.2.jpg";
import gpu_03_image_03 from "../images/gpu_03.3.jpg";

import cpu_01_image_01 from "../images/cpu_01.1.jpg";
import cpu_01_image_02 from "../images/cpu_01.2.jpg";
import cpu_01_image_03 from "../images/cpu_01.3.jpg";

import cpu_02_image_01 from "../images/cpu_02.1.jpg";
import cpu_02_image_02 from "../images/cpu_02.2.jpg";

import cpu_03_image_01 from "../images/cpu_03.1.jpg";
import cpu_03_image_02 from "../images/cpu_03.2.jpg";

import ram_01_image_01 from "../images/ram_01.1.jpg";
import ram_01_image_02 from "../images/ram_01.2.jpg";
import ram_01_image_03 from "../images/ram_01.3.jpg";

import ram_02_image_01 from "../images/ram_02.1.jpg";
import ram_02_image_02 from "../images/ram_02.2.jpg";
import ram_02_image_03 from "../images/ram_02.3.jpg";

import ram_03_image_01 from "../images/ram_03.1.jpg";
import ram_03_image_02 from "../images/ram_03.2.jpg";
import ram_03_image_03 from "../images/ram_03.3.jpg";

import accessories_01_image_01 from "../images/accessories_01.1.jpg";
import accessories_01_image_02 from "../images/accessories_01.2.jpg";
import accessories_01_image_03 from "../images/accessories_01.3.jpg";

import accessories_02_image_01 from "../images/accessories_02.1.jpg";
import accessories_02_image_02 from "../images/accessories_02.2.jpg";
import accessories_02_image_03 from "../images/accessories_02.3.jpg";

import accessories_03_image_01 from "../images/accessories_03.1.jpg";
import accessories_03_image_02 from "../images/accessories_03.2.jpg";
import accessories_03_image_03 from "../images/accessories_03.3.jpg";

import case_01_image_01 from "../images/case_01.1.jpg";
import case_01_image_02 from "../images/case_01.2.jpg";
import case_01_image_03 from "../images/case_01.3.jpg";

import mobo_01_image_01 from "../images/mobo_01.1.jpg";
import mobo_01_image_02 from "../images/mobo_01.2.jpg";
import mobo_01_image_03 from "../images/mobo_01.3.jpg";

import ssd_01_image_01 from "../images/ssd_01.1.jpg";
import ssd_01_image_02 from "../images/ssd_01.2.jpg";

import psu_01_image_01 from "../images/psu_01.1.jpg";
import psu_01_image_02 from "../images/psu_01.2.jpg";

const products = [
  {
    id: "01",
    title: "ASUS Dual GeForce RTX™ 4070",
    price: 609,
    image01: gpu_01_image_01,
    image02: gpu_01_image_02,
    image03: gpu_01_image_03,
    category: "gpu",

    desc: "The brand new ASUS DUAL RTX 4070 White OC Edition is now here. Now with the all-new Ada Lovelace architecture, this video card comes with NVIDIA DLSS 3, 4th generation tensor cores, and much more. The ASUS DUAL RTX 4070 White has the latest generation of Axial tech fans and a 2.56-slot design for compatibility, cooling, and superior performance.",
  },

  {
    id: "02",
    title: "Intel Core i7-13700K",
    price: 401,
    image01: cpu_01_image_01,
    image02: cpu_01_image_02,
    image03: cpu_01_image_03,
    category: "cpu",

    desc: "13th Gen Intel Core i7-13900K desktop processor. Featuring Intel Turbo Boost Max Technology 3.0, and PCIe 5.0 & 4.0 support, DDR5 and DDR4 support, unlocked 13th Gen Intel Core i7 desktop processors are optimized for gamers and productivity and help deliver high performance. Compatible with Intel 700 Series and Intel 600 Series Chipset based motherboards. 125W Processor Base Power.",
  },

  {
    id: "03",
    title: "Intel Core i9-13900K",
    price: 569,
    image01: cpu_02_image_01,
    image02: cpu_02_image_02,
    image03: cpu_01_image_03,
    category: "cpu",

    desc: "13th Gen Intel Core i9-13900K desktop processor. Featuring Intel Adaptive Boost Technology, Intel Thermal Velocity Boost, Intel Turbo Boost Max Technology 3.0, and PCIe 5.0 & 4.0 support, DDR5 and DDR4 support, unlocked 13th Gen Intel Core i9 desktop processors are optimized for enthusiast gamers and serious creators and help deliver high performance. Compatible with Intel 700 Series and Intel 600 Series Chipset based motherboards. 125W Processor Base Power.    ",
  },

  {
    id: "04",
    title: "AMD Ryzen™ 7 5700X",
    price: 191,
    image01: cpu_03_image_01,
    image02: cpu_03_image_02,
    image03: cpu_03_image_01,
    category: "cpu",

    desc: "Can deliver ultra-fast 100 plus FPS performance in the world's most popular games, discrete graphics card required",
  },


  {
    id: "05",
    title: "PowerColor Fighter AMD Radeon RX 6600 ",
    price: 219,
    image01: gpu_03_image_01,
    image02: gpu_03_image_02,
    image03: gpu_03_image_03,
    category: "gpu",

    desc: "Exclusive New Cooling-Fan Design, Advanced Cooling Solution Compared with previous designs, PowerColor Hellhound RX 6600 graphics card uses an exclusive new cooling-fan design to increase airflow and air pressure by up to 60%, achieving new levels of thermal performance.",
  },

  {
    id: "06",
    title: "ZOTAC Gaming GeForce RTX 4090",
    price: 1599,
    image01: gpu_02_image_01,
    image02: gpu_02_image_02,
    image03: gpu_02_image_03,
    category: "gpu",

    desc: "Leveraging an all-new aerodynamic inspired design, the ZOTAC GAMING GeForce RTX 4090 Trinity OC utilizes the world’s most advanced gaming GPU powered by the NVIDIA Ada Lovelace architecture. Using cutting-edge cooling technologies derived from the flagship model, the Trinity OC packs the punch to offer gamers the needed blistering FPS in the latest titles. FEATURES • NVIDIA Ada Lovelace Streaming Multiprocessors: Up to 2x performance and power efficiency • 4th Generation Tensor Cores: Up to 2X AI performance • 3rd Generation RT Cores: Up to 2X ray tracing performance • NVIDIA DLSS • Game Ready and NVIDIA Studio Drivers • NVIDIA GeForce Experience • NVIDIA Broadcast, NVIDIA G-SYNC • NVIDIA GPU Boost • 24GB GDDR6X Graphics Memory • IceStorm 3.0 Advanced Cooling • FREEZE Fan Stop, Active Fan Control • SPECTRA 2.0 RGB Lighting (compatible with external LED strip) • Dual BIOS • Metal Backplate • ZOTAC GAMING FireStorm Utility SPECIFICATIONS • NVIDIA GeForce RTX 4090 GPU • 16384 CUDA cores • 24GB GDDR6X memory • 384-bit memory bus • Engine boost clock: 2535 MHz • Memory clock: 21 Gbps • PCI Express 4.0 16x SOFTWARE COMPATIBILITY • Game Ready and NVIDIA Studio Drivers • PCI Express Gen 4 • Microsoft DirectX 12 Ultimate • Vulkan RT APIs, Vulkan 1.3 • OpenGL 4.6 • Windows 11 / 10 (64-bit, April 2018 update or later) CONNECTIONS • 3 x DisplayPort 1.4a (up to 7680x4320@60Hz) • 1 x HDMI Connector (Supports 4K 120Hz HDR, 8K 60Hz HDR, and Variable Refresh Rate as specified in the HDMI 2.1 Specification) • HDCP 2.3 support • Quad simultaneous display capable POWER REQUIREMENTS • 1000-watt power supply recommended • 450-watt max power consumption • 1 x 12VHPWR power input INSIDE THE BOX • ZOTAC GAMING GeForce RTX 4090 Trinity OC • GPU Support Stand • 3-pin RGB Header Cable • 4x 8-pin-to-12VHPWR cable • User Manual DIMENSIONS Product: • Length: 356.1mm (14in) • Height: 165.4mm (6.5in) • Width: 3.5 slot (71.4mm) (2.8in) Box: • Height: 440mm (17.3in) • Width: 282mm (11.1in) • Depth: 120mm (4.7in)",
  },

  {
    id: "07",
    title: "Patriot Viper Steel RGB DDR4 RAM 16GB (2X8GB)",
    price: 49,
    image01: ram_01_image_01,
    image02: ram_01_image_02,
    image03: ram_01_image_03,
    category: "ram",

    desc: "Capacity: 16GB (2 x 8) 3200 MHZ Kit Black headshield sides with golden Viper logo / Lightbar top",
  },

  {
    id: "08",
    title: "Corsair Vengeance LPX 32GB (2X16GB)",
    price: 67,
    image01: ram_02_image_01,
    image02: ram_02_image_02,
    image03: ram_02_image_03,
    category: "ram",

    desc: "Hand-sorted memory chips ensure high performance with generous overclocking headroom",
  },

  {
    id: "09",
    title: "Timetec Pinnacle Konduit RGB 16GB DDR4",
    price: 33,
    image01: ram_03_image_01,
    image02: ram_03_image_02,
    image03: ram_03_image_03,
    category: "ram",

    desc: " RGB Light Aluminum Heat Spreader Gaming Memory Module, 8 RGB LED zones on each module Supports ASUS Aura, Gigabyte RGB Fusion, MSI Mystic Light and ASRock Polychrome Sync software to control RGB Lights; QVL approved by all mainstream motherboard manufacturers",
  },
  {
    id: "10",
    title: "Razer DeathAdder V3 Pro Wireless Gaming Mouse",
    price: 149,
    image01: accessories_01_image_01,
    image02: accessories_01_image_02,
    image03: accessories_01_image_03,
    category: "accessories",

    desc: "64g Ultra-lightweight Design: Enjoy a level of speed and control favored by the world’s top players with one of the lightest ergonomic esports mice ever created",
  },
  {
    id: "11",
    title: "HyperX Cloud II - Gaming Headset, 7.1 Surround Sound",
    price: 159,
    image01: accessories_02_image_01,
    image02: accessories_02_image_02,
    image03: accessories_02_image_03,
    category: "accessories",

    desc: "Gaming headset, Detachable mic, Detachable headset cable, PC extension cable, USB Charge Cable, Quick Start Guide    ",
  },
  {
    id: "12",
    title: "Razer BlackWidow V4 Pro Wired Mechanical Gaming Keyboard",
    price: 299,
    image01: accessories_03_image_01,
    image02: accessories_03_image_02,
    image03: accessories_03_image_03,
    category: "accessories",
    desc: "YELLOW MECHANICAL SWITCHES FOR QUICK EXECUTION — Enjoy instant, rapid-fire smooth inputs that are just as quiet thanks to built-in sound dampeners",
  },
  {
    id: "13",
    title: "NZXT H5 Elite Compact ATX Mid-Tower",
    price: 132,
    image01: case_01_image_01,
    image02: case_01_image_02,
    image03: case_01_image_03,
    category: "case",
    desc: "BUILT-IN RGB LIGHTING: Comes with two pre-installed 140mm RGB fans and a RGB controller for customizable lighting. Tempered glass panels show it all off",
  },
  {
    id: "14",
    title: "GIGABYTE Z590 AORUS PRO AX",
    price: 149,
    image01: mobo_01_image_01,
    image02: mobo_01_image_02,
    image03: mobo_01_image_03,
    category: "mobo",
    desc: "Supports 11th and 10th Gen Intel Core Series Processors  ",
  },
  {
    id: "15",
    title: "SAMSUNG 870 EVO SATA III SSD",
    price: 49,
    image01:ssd_01_image_01,
    image02:ssd_01_image_02,
    image03:ssd_01_image_02,
    category: "storage",
    desc: "THE SSD ALL-STAR: The latest 870 EVO has indisputable performance, reliability and compatibility built upon Samsung's pioneering technology. S.M.A.R.T. Support: Yes",
  },
  {
    id: "16",
    title: "Thermaltake Smart 700W 80+ ",
    price: 55,
    image01: psu_01_image_01,
    image02: psu_01_image_02,
    image03: psu_01_image_02,
    category: "psu",
    desc: "80 plus certified",
  },
];

export default products;
