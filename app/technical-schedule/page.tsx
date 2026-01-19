"use client";

import PageLayout from "@/components/PageLayout";
import React, { useMemo, useState } from "react";

type TrackSlots = {
  A?: string;
  B?: string;
  C?: string;
  all?: string;
};

type DaySchedule = {
  dateLabel: string;
  summary?: string;
  rows: { time: string; tracks: TrackSlots }[];
};

const day21Schedule: DaySchedule = {
  dateLabel: "21st January (Day 1)",
  summary:
    "International Conference on Frontiers in Surface Engineering & Additive Manufacturing (FSEAM 2026)",
  rows: [
    {
      time: "09:30 - 10:00",
      tracks: {
        all: "Conference Inauguration (Prof. I. Manna, Prof. Shiv Brat Singh, Prof. Suman Chakraborty & Prof. Sivaji Chakravorti) · Vote of Thanks (Prof. Jyotsna Dutta Majumdar)",
      },
    },
    {
      time: "10:00 - 10:30",
      tracks: {
        all: "Plenary Talk 1 · Prof. Narendra B Dahotre (University of North Texas, USA) · Laser Based Additive Manufacturing: Next Generation Materials Manipulation Technology · Chair: Prof. Jyotsna Dutta Majumdar",
      },
    },
    {
      time: "10:30 - 11:00",
      tracks: {
        A: "Session 1A (Additive Manufacturing-AM) · Kalidas Auditorium · Theme: Laser Additive Manufacturing · Chair: Prof. Indrani Sen",
        B: "Session 1B (Surface Engineering-SE) · Gargi Hall · Theme: High Temperature Coatings · Chair: Prof. Siddhartha Das",
        C: "Session 1C (Thermal Spraying-TS) · Maitreyi Hall · Theme: Thermal Spray Technologies · Chair: Prof. Karabi Das",
      },
    },
    {
      time: "11:00 - 11:30",
      tracks: {
        A: "AMKT-01 (Dr. Frank Brückner, Fraunhofer IWS, Germany) · Latest technological developments in laser-based additive manufacturing and thermal coatings",
        B: "SEKT-01 (Prof. Kazuhiro Ogawa, Tohoku University, Japan) · Repair of Water-Leaking Perforated Piping Using Low-Pressure Cold Spray Technique and Establishment of Underwater Coating Fabrication Technology",
        C: "TSKT-01 (Prof. Harpreet Singh, IIT Ropar) · Perspectives on Cold Spray: Introduction, Evolution, Applications and Future",
      },
    },
    {
      time: "11:30 - 12:00",
      tracks: {
        A: "AMKT-02 (Prof. Prakash Srirangam, University of Warwick, UK) · Additive Manufacturing of Al-Mg-Sc Alloys for Aerospace Applications",
        B: "SEKT-02 (Dr. A.K. Chaubey, CSIR-IMMT) · Design and development of W–Cu functionally graded materials for extreme thermal applications",
        C: "TSKT-02 (Dr. Sisir Mantri, CSIR-IMMT, Bhubaneswar) · Next-Generation Thermal Barrier Coatings: Enhancing Performance and Durability through Suspension / Solution Precursor Plasma Spray",
      },
    },
    {
      time: "12:00 - 12:20",
      tracks: {
        A: "AMIT-01 (Dr. Prasenjit Khankiar, IIT Guwahati) · Design and performance of 3D-printed mechanical metamaterials (lattice structures)",
        B: "SEIT-01 (Dr. Ajit Panigrahi, CSIR-IMMT) · Oxidation behavior of spark plasma sintered AlCoCrSiNi and CoCrFeMnNi high entropy alloy",
        C: "TSIT-01 (Dr. Shubhra Bajpai, CSIR-IMMT) · Thermally sprayed LaPO4 coating: Phase stability and microstructural analysis",
      },
    },
    {
      time: "12:20 - 12:40",
      tracks: {
        A: "AMIT-02 (Dr. Rajiv Kumar, IIT Ropar) · Effect of heat-treatment on the mechanical and corrosion behavior of laser additively manufactured Ti64AlV alloy",
        B: "SEIT-02 (Dr. Rishi Sharma, BIT Mesra) · Modification of Materials Properties using Plasma",
        C: "TSIT-02 (Dr. Anirban Naskar, IIT Hyderabad) · Polymer Metallization of Ti Using an Indigenously Developed Cold Spray Setup",
      },
    },
    {
      time: "12:40 - 12:50",
      tracks: {
        A: "AMCT-01 (Anubrata Das, IIT Kanpur) · Multiphysics Simulation of LPBF Additive Manufacturing Process of SS316L with TiC Nanoparticles Using a Coupled Lagrangian Particle Tracking-Eulerian Model",
        B: "SECT-01 (Annada Shankara Das, IIT Kharagpur) · Effect of Mechanical Milling and Thermal Spray Route on the High-Temperature Oxidation Behaviour of CoNiCrAlY Coatings on Inconel 718",
        C: "TSCT-01 (Evenmore Mylliem, IIT Guwahati) · Influence of Laser Processing Parameters on the Surface Morphology and Thermal Response of Cotton Fabrics",
      },
    },
    {
      time: "12:50 - 13:00",
      tracks: {
        A: "AMCT-02 (Bhavit Boolchandani, ISRO) · Additive Manufacturing Enabled Nano-Satellite Systems: Challenges and Prospective Solutions",
        B: "SECT-02 (Dr. Sumit Kumar Sharma, BIT Sindri) · Study of Corrosion Behavior of Laser Surface-Treated Inconel 718",
        C: "TSCT-02 (Aishwarya Sahu, IIT Jodhpur) · Achieving Superhydrophobicity on SS316L Coating: A One-Step HVOF Thermal Spray Approach",
      },
    },
    {
      time: "13:00 - 14:00",
      tracks: {
        all: "Lunch Break",
      },
    },
    {
      time: "14:00 - 14:30",
      tracks: {
        A: "AMKT-03 (Prof. Stefan Dietrich, Karlsruhe Institute of Technology, Germany) · Non-Destructive Testing in Additive Manufacturing and Surface Engineering",
        B: "SEKT-03 (Prof. A K Nath, Former Professor, Department of Mechanical Engineering, IIT Kharagpur) · Laser Surface Engineering",
        C: "TSKT-03 (Prof. Prasanta K Das, IIT Kharagpur) · Title TBD",
      },
    },
    {
      time: "14:30 - 15:00",
      tracks: {
        A: "AMKT-04 (Prof. Bharat Bhooshan Panigrahi, IIT Hyderabad) · Microstructure and texture evolution during laser based AM and laser surface treatments",
        B: "SEKT-04 (Prof. N K Mukhopadhyay, IIT BHU) · Fe-Enriched High-Entropy Alloys and High-Entropy Steels: Microstructure, Mechanical and Tribological Behaviour",
        C: "TSKT-04 (Dr. Palash Kumar Mollick, BARC) · Development of SiC Coating and SiC Fibre Composite Materials for Nuclear, Space and Aerospace Sectors",
      },
    },
    {
      time: "15:00 - 15:20",
      tracks: {
        A: "AMIT-03 (Prof. Srikanth Bontha, NIT Surathkal) · Fabrication and Assessment of Copper – Stainless Steel Multi-Material Structures using Laser Directed Energy Deposition",
        B: "SEIT-03 (Dr. Gautam Anand, IIT BHU) · 2300-year-old Corrosion-Resistant Coating: Lessons from Archaeometallurgy",
        C: "TSIT-03 (Dr. Dipti Samantaray, Head, IGCAR) · Title TBD",
      },
    },
    {
      time: "15:20 - 15:40",
      tracks: {
        A: "AMIT-04 (Dr. Manab Mallik, NIT Durgapur) · Metallurgical and Materials Engineering Structure-Property Correlation of Ceramics Fabricated by Direct Ink Writing",
        B: "SEIT-04 (Dr. Tufan Chandra Bera, BITS Pilani) · Microstructure Evolution Based Prediction of Surface and Subsurface Residual Stresses in High-Speed Machining of Ti-6Al-4V Abstract High-speed machining (HSM) of Ti-6Al-4V generates extreme thermo-mechanical",
        C: "TSIT-04 (Prof. Sathi Banerjee, Jadavpur University) · Hybrid treatment technologies involving advanced ceramic membranes and adsorbents for remediation of industrial wastewater aiming at its reusability properties",
      },
    },
    {
      time: "15:40 - 15:50",
      tracks: {
        A: "AMCT-03 (Vikas Tiwari, IIT Kanpur) · Development and Characterization of Additively Manufactured Satellite 6 – TIC Metal Matrix Composite (MMC) Coatings for High Temperature Wear Resistance Applications",
        B: "SECT-03 (Vikash Kumar, BIT Mesra) · Effect of Microwave Plasma Energy on Microstructure and Nanomechanical Behaviour of MPCVD Grown Nanocrystalline Diamond Films",
        C: "TSCT-03 (Akankshya Rout, IIT Kharagpur) · Process-Property Integrality in Fe-based metallic glass coatings by HVOF spraying: A Focus on Wear and Corrosion",
      },
    },
    {
      time: "15:50 - 16:00",
      tracks: {
        A: "AMCT-04 (Shubhra Kamal Nandi, IIT Kharagpur) · Compositionally graded laser material deposition of Cobalt based hardface alloy",
        B: "SECT-04 (Meignanamorthi G, IIT Jodhpur) · Fabrication of Durable Transparent Anti-Fouling Superhydrophobic Coating for Selfcleaning Application",
        C: "TSCT-04 (Srikanth Batna, IIT Bombay) · Advanced Non-Destructive Residual Stress Evaluation of Thermal Barrier Coatings Using Raman and Photoluminescence Spectroscopy",
      },
    },
    {
      time: "16:00 - 16:30",
      tracks: {
        all: "Tea Break",
      },
    },
    {
      time: "16:30 - 17:00",
      tracks: {
        A: "AMKT-05 (Prof. Andreas Wetzig, Technology Field Manager, Cutting & Joining, Fraunhofer IWS, Dresden, Germany) · Laser Surface Functionalisation Enables Enhanced Performance",
        B: "SEKT-05 (Prof. Apurba Kumar Sharma, IIT Roorkee) · Rapid microwave processing of TiB-based nanocomposites with ceramic additives",
        C: "TSKT-05 (Prof. W S Raju, IIT Bombay) · Corrosion Mechanisms in Additively Manufactured Alloys: Enablers for Corrosion Resistant Alloy Development",
      },
    },
    {
      time: "17:00 - 17:20",
      tracks: {
        A: "AMIT-05 (Prof. Manas Das, IIT Guwahati) · Post-Processing of the Additively Manufactured Biomedical Implants through Hybrid Electrochemical Magnetorheological Finishing Process",
        B: "SEIT-05 (Prof. Sukla Mondol, NIT Warangal) · A comparative study of microstructure and mechanical strength of NP addition on laser melted Al based alloy",
        C: "TSKT-06 (Dr. Rajkumar Singh, Kalyani Centre for Technology & Innovation, R&D of Bharat Forge Ltd) · Service Life Enhancement of Steel Components by Surface Modification",
      },
    },
    {
      time: "17:20 - 17:40",
      tracks: {
        A: "AMIT-06 (Dr. Amit Arora, IIT Gandhinagar) · Department of Metallurgical Engineering Integrated Computational Framework for Thermal and Microstructural Predictions in Laser-Based Additive Manufacturing",
        B: "SEIT-06 (Dr. Mitun Das, CGCRI) · Laser Processed Functional Coatings on Titanium for Orthopedic Implants",
        C: "TSIT-05 (Prof. Sudhanshu Shekhar Singh, IIT Kanpur) · Fatigue study of additively manufactured nanoprecipitation strengthened high entropy alloys",
      },
    },
    {
      time: "17:40 - 18:00",
      tracks: {
        A: "AMIT-07 (Dr. Sudipta Pramnaik, IIT Bhubaneswar) · Fatigue bahviour of additively manufactured 316L stainless steel solid and microlattice materials",
        B: "SEIT-07 (Dr. Mayadhar Debata, CSIR - IMMT) · Understanding the role of binder modification and dispersoids on densification, microstructure and distortion characteristics of tungsten heavy alloys used for strategic applications",
        C: "TSIT-06 (Dr. Sambit Bapari, IIT Ropar) · Large Stiffness Modulations in a Pd-Pt-based Nanoporous Alloy with Continuous Solubility for Hydrogen",
      },
    },
    {
      time: "18:00 - 18:10",
      tracks: {
        A: "Dr. Vivek Kumar Sahu, IIT-ISM Dhanbad), Prior β-grain Refinement in Additive Manufactured Ti6Al4V via ultrasonic impact peeing and hol-isostatic pressing",
        B: "SECT-05 (Dr. Shubhang Srivastava, IIT Kharagpur) · Optimization of Functionalized Tin Oxide Lubricants using Novel Bootstrap based Statistical Procedures for Improved Energy Efficiency in Tribological Applications",
        C: "TSCT-05 (Shubham Kumar Singh, CSIR - IMMT) · Study of Mechanical and Tribological behaviour of SPS Inconel 718",
      },
    },
    {
      time: "18:10 - 18:20",
      tracks: {
        B: "SECT-06 (Mergolu Srikanth, CECRI) · Microstructural Evolution and Mechanical Performance of IN939 Alloy fabricated by Selective Laser Melting through Heat Treatment Optimization",
      },
    },
    {
      time: "18:20 - 18:30",
      tracks: {
        B: "SECT-07 (Shivansh Gupta, IIT Kanpur) · Microstructural and Mechanical characterization of Additively Manufactured Stainless Steel and Mild Steel compositionally graded materials for pipeline application",
        C: "TSCT-06 (Sakshi Tiwari, IIT Kharagpur) · Effect of SS316L Addition on Crack Susceptibility and Tribological Properties of Tribaloy T-800 Laser Clads",
      },
    },
    {
      time: "19:00 - 20:00",
      tracks: {
        all: "Cultural Programme",
      },
    },
    {
      time: "20:00 - 22:00",
      tracks: {
        all: "Dinner",
      },
    },
  ],
};

const day22Schedule: DaySchedule = {
  dateLabel: "22nd January (Day 2)",
  summary:
    "International Conference on Frontiers in Surface Engineering & Additive Manufacturing (FSEAM 2026)",
  rows: [
    {
      time: "09:00 - 09:30",
      tracks: {
        all: "Plenary Session [Session Chair: Prof. Indranil Manna (VC, BIT Mesra)] · Plenary Talk 2: (Dr. S. Somnath, ISRO) · Advanced Materials and Processes for Space Program: Contributions from Indian Institutions",
      },
    },
    {
      time: "09:30 - 10:00",
      tracks: {
        all: "Plenary Talk 3: Mr. J D Patil (President, INAE)",
      },
    },
    {
      time: "10:00 - 10:30",
      tracks: {
        all: "Plenary Talk 4: Prof. B S Murty (Director, IIT Hyderabad) · My Professional Journey at IITKGP with Indranil Da",
      },
    },
    {
      time: "10:30 - 11:00",
      tracks: {
        A: "Session-4A (Kalidas Hall) · Session Chair: Dr. Rajib Sharma · AMKT- 06 (Prof. Indranil Chatterji, (Former Director, CSIR-NML) · Surface Treatments for hydrogen service",
        B: "Session-4B (Gargi Hall) · Session Chair: Prof. Kumkum Banerjee · SEKT-06 (Prof. Rahul Mitra, IIT Kharagpur) · Processing and structure-property relations of NF-TiB and Ni-Si3Z based in-situ nanocomposite coatings processed by magnetron sputtering",
        C: "Session-4C (Maitreyi Hall) · Session Chair: Prof. Sudhanshu Shekhar Singh · TSKT-07 (Prof. J Ramkumar, IIT Kanpur) · Electrochemical Additive manufacturing: Technological advancement and process challenges",
      },
    },
    {
      time: "10:30 - 11:00",
      tracks: {
        A: "AMIT-08 (Prof. Abhik Choudhury, IITC Bangalore), Modeling workflows for the single-crystalline processing of Ni-base superalloys: From Bridgman to additive",
        B: "SEIT-08 (Dr. Sushmita Kundu, CSIR-CGCRI), Electrochromic Materials: Revolutionizing the Future of Smart Devices",
        C: "TSIT-07 (Prof. Kaushik Chattopadhyay IIT BHU) · Surface Modification through Ultrasonic Shot Peening and Its Effect on Corrosion, Low Cycle Fatigue Behaviour and Biocompatibility of Ti-13Nb-13Zr Alloy",
      },
    },
    {
      time: "11:00 - 11:20",
      tracks: {
        all: "Tea Break",
      },
    },
    {
      time: "11:30 - 11:40",
      tracks: {
        A: "Session-5A (Kalidas Hall) · Theme: Microstructure Property Correlation · Session Chair: Prof. Indrani Manna · AMIT-09 (Prof. Partha Pratim Chattopadhyay, Professor, IIEST Shibpur) · Process-Microstructure Correlation in Metal Additive Manufacturing",
        B: "Session-5B (Gargi Hall) · Theme: Functional Surface Engineering · Session Chair: Prof. Somjeet Biswas · SEKT-07 (Prof. David P. Field, Washington State University, USA) · Textures and Texture Gradients in Wire Arc Additive Manufacturing of Steels",
        C: "Session-5C (Maitreyi Hall) · Theme: Engineered surfaces-thermal/mechanical performance · Session Chair: Prof. Bappa Acherjee · TSKT-08 (Prof. Gandham Phanikumar, IIT Madras) · HPC simulation of the Microstructure Evolution in DME approach",
      },
    },
    {
      time: "11:40 - 11:50",
      tracks: {
        A: "AMIT-10 (Prof. Jyotsna Dutta Majumdar, IIT KGP)",
        B: "",
        C: "",
      },
    },
    {
      time: "11:50 - 12:00",
      tracks: {
        A: "AMIT-11 (Prof.Anindya Basu, NIT Rourkela) · Enhancement of Surface Integrity and Corrosion Resistance of Nickel-Based Coatings on Mild Steel via Hybrid Laser Cladding/Electrodeposition and Ultrasonic Shot Peening",
        B: "SEKT-08 (Prof. Satyam Suwas, IISC Bengaluru) · Additive Manufacturing of near-α titanium alloy Ti-6242",
        C: "TSIT-08 (Dr. Murshid Imam, IIT Patna) · Microstructural Evolution and Control in Metal 3D Printing Techniques",
      },
    },
    {
      time: "12:00 - 12:10",
      tracks: {
        A: "AMIT-12 (Prof. Debdas Roy, NIAMT Ranchi)",
        B: "",
        C: "",
      },
    },
    {
      time: "12:10 - 12:20",
      tracks: {
        A: "AMIT-13 ((Dr. Manoj Kumar Chopkar, NIT Raipur) · Effect of Processing Route and External Elements on High Entropy Alloys",
        B: "",
        C: "",
      },
    },
    {
      time: "12:20 - 12:30",
      tracks: {
        A: "AMIT-14 (Dr. Supriya bera - NIT Durgapur) · Sequential Phase Evolution in Al-Cu-Ni(Zr) Alloys during rapid solidification",
        B: "",
        C: "",
      },
    },
    {
      time: "12:30 - 12:40",
      tracks: {
        A: "AMIT-15 (Prof. Jayanta Chakraborty, Neo Metaliks Ltd.)",
        B: "SECT-09 (Dr. Surradip Mullick, IIT Bhubaneswar, India) · Influence of Laser parameters in Laser Directed Energy Deposition: Ultrasonic Vibration, Inter-pass Laser Re-melting",
        C: "TSIT-09 (Dr. Deepak Kurpati Pattanayak, CSIR-CECRI)",
      },
    },
    {
      time: "12:40 - 12:50",
      tracks: {
        A: "AMIT-16 (Dr. Swapan Karak, NIT Rourkela) · On Characterization of Laser-Powder Bed Fusion – LPBF Fabricated SS 316L Stainless Steel Part",
        B: "SECT-10 (Dr. Gautam Agarwal, IIT Roorkee) · Microstructural Insights into Pulsed GMAW-Fabricated Multi-Pass Stellite-6 Hardfacings",
        C: "TSIT-10 (Dr. Deepak Maria, IIT Bombay) · Advancing Nanosecond Laser Color Marking on Stainless Steel: Insights from Experiments and Modeling",
      },
    },
    {
      time: "12:50 - 13:00",
      tracks: {
        A: "AMIT-17 (Dr. Guruaj Telasang, ARCI) · Additive Manufacturing of Tool Steels: Challenges and Applications",
        B: "SECT-08 (Sanat Kumar, BIT Mesra) · Synthesis and structural analysis of nitrogen-doped MoS2 thin film using RF magnetron sputtering",
        C: "TSCT-07 (Dr. Ahmed Shehata Abdelrahman Gad, BIT Mesra) · A Nanocomposite Approach to Next-Generation Hydraulic Damper Design",
      },
    },
    {
      time: "13:00 - 13:10",
      tracks: {
        A: "AMIT-18 (Dr. Gayatri Paul, BIT Mesra) · Nanofluid Engineered Nanostructured Surfaces for Superior Heat Transfer Performance",
        B: "",
        C: "TSCT-08 (Nikita Kumari, BIT Mesra) · Microstructure-Hardness-Wear Correlations in GMAW-Based Wire Arc Additive Manufactured HSLA steel",
      },
    },
    {
      time: "13:10 - 13:20",
      tracks: {
        A: "AMIT-19 (Dr. Pradyut Sengupta, CSIR-IMMT) · Interface-Engineered Oxide/Boride Dispersed Tungsten Alloys for High-Temperature and Extreme Environment Applications",
        B: "SECT-09 (Mohd Kaleem Khan, IIT Guwahati) · Selective Extraction of Oleanic Acid from Coconut Oil Using DL-Menthol: Acetic Acid (1:1) Deep Eutectic Solvent Supported on Polyetherimide Substrate in a Flow-Based System",
        C: "",
      },
    },
    {
      time: "13:20 - 13:30",
      tracks: {
        A: "AMIT-20 (Dr. Manoj Kumar, CSIR-IMMT) · Advanced Thermal and Oxidation-Resistant Coating Strategies for IN718 using Rare Earth Oxide-Doped YSZ Based Thermal Barrier Coating and Laser Surface Alloying",
        B: "",
        C: "",
      },
    },
    {
      time: "13:30 - 14:15",
      tracks: {
        all: "Lunch Break",
      },
    },
    {
      time: "14:15 - 14:45",
      tracks: {
        A: "Session-6A (Kalidas Hall) · Additive Manufacturing: Sustainable Materials · Session Chair: Prof. Anindya Basu · AMKT-07 (Dr. Sandig Ghosh Chowdhury, CSIR NML) · Title TBD",
        B: "Session-6B (Gargi Hall) · Theme: Additive Manufacturing: Biomedical Materials · Session Chair: Prof. Tapas Sengupta · SEKT-09 (Dr. Vladimir Popov, Ariel University, Israel) · Biomedical Titanium Alloys by Powder-Used Manufacturing: Microstructure, Microstructure, and Mechanical Properties",
        C: "Session-6C (Maitreyi Hall) · Theme: Structural Alloys: Processing-Microstructure-Property Relationships · Session Chair: Dr. Kannan Anilkumar · TSKT-09 (Dr. L. Ramakrishna, Associate Director and Head, Centre for Translating the Heterogeneous Materials into Opportunities through Surface Engineering) · Title TBD",
      },
    },
    {
      time: "14:45 - 15:15",
      tracks: {
        A: "AMKT-08 (Prof. Swarup Bag, IIT Guwahati) · Challenges in multi-material deposition by wire arc additive manufacturing: experiments and modelling",
        B: "SEKT-10 (Prof. Amit Roy Chowdhury, IIEST Shibpur) · Application of additive manufacturing in Orthopaedic and dental implant",
        C: "TSKT-10 (Prof. NC Santhi Srinivas IIT BHU) · Mechanical behaviour of advanced structural alloys processed by powder bed fusion using laser beam (PBF-LB)",
      },
    },
    {
      time: "15:15 - 15:35",
      tracks: {
        A: "AMIT-21 (Dr. Anirban Bhattacharya, IIT Bhubaneswar) · Computational Modelling of Laser Additive Manufacturing Processes",
        B: "SEIT-11 (Dr. Srabanee Sen, CSIR-CGCRI) · Piezoelectric Nanocomposites Derived Sensors for Multifunctional Applications",
        C: "TSIT-11 (Dr. Sumana Ghosh, CSIR - CGCRI) · Efficient glass-ceramic based thermal barrier coatings for aerospace applications",
      },
    },
    {
      time: "15:35 - 15:55",
      tracks: {
        A: "AMIT-22 (Dr. Nisheeth Prasad, IIT Indore) · Structure-electrochemistry correlation in multi-cationic mixed metal oxide cathode for improved current cathode protection",
        B: "SEIT-12 (Dr. Gourhari Ghosh, IIT Jodhpur) · Multi-step post-processing of additively manufactured Inconel 718 coating",
        C: "TSIT-12 (Dr. Nirudra Mandal, CSIR-CMERI) · Development of Self-Lubricating Wear Resistant Advanced ZTA Ceramic Inserts for Sustainable Eco-friendly Machining",
      },
    },
    {
      time: "15:55 - 16:05",
      tracks: {
        A: "AMCT-05 (Jagannath Verma, IIT Guwahati) , Sustainable 3D Printing of Non-Planar Ceramic Geopolymer Surfaces Using an Interlocking Brick System",
        B: "SECT-10 (Md Imdadul Hoque, IIEST Shibpur) · Role of Piezoelectric Bone Cement on the Electromechanical Behavior of Augmented Osteoporotic Vertebrae: A Finite Element Analysis",
        C: "TSCT-09 (Nitesh Vashistha, NBC Bearings) · Development and tribological behaviour of solid lubricant MoS2 coating for high-speed rolling bearing application",
      },
    },
    {
      time: "16:05 - 16:15",
      tracks: {
        A: "AMCT-06 (Abhishek Singh, University of Michigan Ann Arbor, USA) · A Data-Driven Evaluation Framework for Additive Manufacturing Education and Training Using Experimentally Validated Bridge Designs",
        B: "SECT-11 (Sandeep Choudhury, IIEST Shibpur) · Multiphysics Finite Element Modelling of Piezoelectric Dental Implants for Enhanced Osseointegration",
        C: "TSCT-10 (Kumar Kaniska, BIT Mesra) · Mechanical and Tribological Performance of Nickel Aluminium Bronze Fabricated by Pulsed GMAW-WAAM",
      },
    },
    {
      time: "16:15 - 16:30",
      tracks: {
        all: "Tea Break",
      },
    },
    {
      time: "16:30 - 17:00",
      tracks: {
        A: "Session-7A (Kalidas Hall) · Theme: Additive Manufacturing: Lightweight Materials · Session Chair: Dr. Gayatri Paul · AMKT-09 (Prof. Bikramjit Basu, IISC Bengaluru) · Laser-Powder Bed Fusion based manufacturing of metallic biomaterial implants: Design innovation, asymmetric mechanical properties, biocompatibility and commercialisation status",
        B: "Session-7B (Gargi Hall) · Theme: Surface Engineering: Functional Property Materials · Session Chair: Prof. Tarun Kumar Kundu · SEKT-11 (Dr. Sharad Chandra Sharma, Visiting Professor Centre for Space Science and Technology, Indian Institute of Technology, Roorkee) · Role of Free Surfaces in Materials Processing under Microgravity Environment of Space",
        C: "Session-7C (Maitreyi Hall) · Theme: Advanced Applications: Designing Materials Processing · Session Chair: Prof. Kaushik Biswas · TSKT-11 (Prof. Kantesh Balani, IIT Kanpur) · Multifunctional 3D-printoids for Bone Tissue Engineering with Effective Antibacterial Efficiency, Cytocompatibility, and Mechanical Properties",
      },
    },
    {
      time: "17:00 - 17:30",
      tracks: {
        A: "AMKT-10 (Dr. Kumkum Banerjee, NITK Surathkal) · Additive Manufacturing of High-Performance Composites for Aerospace Applications",
        B: "SEKT-12 (Prof. Dilip Kumar Pratihar, IIT Kharagpur) · Fundamentals of AI/ML Tools and their Applications in Surface Engineering and Additive Manufacturing",
        C: "TSKT-12 (Prof. Gour Gopal Roy, IIT Kharagpur) · Role of convection and beam oscillation during electron beam welding",
      },
    },
    {
      time: "17:30 - 17:50",
      tracks: {
        A: "AMIT-23 (Dr. Chetan, IIT Bhubaneswar) · Post-processing finishing of additively manufactured alloy using sustainable approaches",
        B: "SEIT-13 (Dr. Mahavir Singh, IIT Patna) · Surface Alteration via Electrical Discharge Micro-Texturing",
        C: "TSIT-13 (Dr. Srikant Gollapudi, IIT Bhubaneswar) · Mechanical and corrosion behavior of Zn/TiAl4V interpenetrating phase composites",
      },
    },
    {
      time: "17:50 - 18:10",
      tracks: {
        A: "AMIT-24 (Dr. Spandan Guha, KIIT Bhubaneswar) · Title TBD",
        B: "SEIT-14 (Dr. Somak Dutta, BIT Mesra) · Development of Hard and Wear Resistant Coating by Laser Surface Cladding as a Substitute for Hard Chrome Plating",
        C: "TSIT-14 (Dr. Renu Kumari, NIT Jamshedpur) · Fabrication of Bioactive Plasma-Sprayed Coatings on Ti-Based Alloys",
      },
    },
    {
      time: "18:10 - 18:20",
      tracks: {
        A: "AMCT-07 (Bona Girl Salcharan, CSIR-CECRI) · Process parameter optimization of aluminum alloy Al2139 using laser bed powder fusion technique",
        B: "SECT-12 (Sivasubramanian. J, NIT Rourkela) · (Influence of LSP on the electrodeposited nickel coating for the improvement of electrochemical behaviour",
        C: "TSCT-11 (Anil an Ashish, IIT Kharagpur) · 3D-Printed Flow Focusing Microfluidic Device for Generation of Janus Droplets for Mimicking Nucleus Liver Sinusoid",
      },
    },
    {
      time: "18:20 - 18:30",
      tracks: {
        A: "AMCT-08 (Shrantik Kumar Dey, IIT Kharagpur) · Effect of Laser Power and Laser Speed on the Defect Volume Ratio and Magnetic Properties of Ni-Te-B alloys manufactured by Laser-Bed Powder Fusion",
        B: "SECT-13 (Dr. Dileep Madpana, IIT Bombay) · Influence of Processing Environment on femtosecond Laser Modification of SS316L on Surface Morphology and Electrochemical Behaviour in Simulated Body Fluid",
        C: "TSCT-12 (Suraj Goala, IIT Guwahati) · Predictive Evolutionary Modelling for Surface Roughness Optimization in EM-12K Steel Toy Molds Fabricated via Submerged Arc Additive Manufacturing",
      },
    },
    {
      time: "19:00 - 22:00",
      tracks: {
        all: "Dinner",
      },
    },
  ],
};

const day23Schedule: DaySchedule = {
  dateLabel: "23rd January (Day 3)",
  summary:
    "International Conference on Frontiers in Surface Engineering & Additive Manufacturing (FSEAM 2026)",
  rows: [
    {
      time: "08:00 - 09:00",
      tracks: {
        all: "Saraswati Puja, Puspanjali & Prasadam",
      },
    },
    {
      time: "09:00 - 09:30",
      tracks: {
        A: "Session-8A (Kalidas Hall) · Theme: Advanced Alloys & Multi-Functional Composites · Session Chair: Prof. Pradeep Chakraborty · AMIT-11 Prof. Partha Saha, IIT Kharagpur",
        B: "Session-8B (Gargi hall) · Theme: Smart Materials & Sustainable Manufacturing; Integrating AI · Session Chair: Dr. Supriya Dey · SEKT-13 (Dr. Sushant K. Singh, Director, The Center for Artificial Intelligence and Environmental Sustainability (CAIES) Foundation) · An Artificial Intelligence-based Framework for Industrializing Nanoparticle Designing",
        C: "Session-8C (Maitreyi Hall) · Theme: Advanced Surface Engineering & Process Control · Session Chair: Prof. Sankha Mukherjee · TSKT-13 (Prof. Kallol Mondal, IIT Kanpur) · Corrosion and wear resistant novel mixed metal addition and metallic Cr as the binder",
      },
    },
    {
      time: "09:00 - 09:30",
      tracks: {
        A: "AMIT-11 Prof. Partha Saha, IIT Kharagpur",
        B: "SEIT-15 (Dr. Ravindra Kumar Jha, IIT Guwahati) · Printed Microsensors: Challenges and Opportunities",
        C: "TSKT-14 (Prof. Sunando Dasgupta, IIT Kharagpur) · Title TBD",
      },
    },
    {
      time: "09:30 - 10:00",
      tracks: {
        A: "AMIT-12 (Dr. Athira KS, ARCI) · Laser Direct Metal Deposition of AISI M2 Tool Steel and Post-clad Heat Treatment: Evaluation of Microstructure and Fretting Wear Behavior",
        B: "SEIT-16 (Dr. Sandip Bysakh, CSIR-CGCRI) · Analytical Transmission Electron Microscopy Studies of Functional Coatings and Thin Films",
        C: "TSIT-15 (Dr. Suman Saha, Dhanbad) · Process-induced defects in surface micro-texturing: Impacts on tribological performance, wetting behavior, durability and sustainability",
      },
    },
    {
      time: "09:30 - 10:00",
      tracks: {
        A: "",
        B: "",
        C: "",
      },
    },
    {
      time: "10:00 - 10:20",
      tracks: {
        A: "AMIT-13 (Dr. Koundinya NTBN, IIT Jodhpur) · The role of oxygen in the processability of AISI steels during laser directed energy deposition",
        B: "SECT-14 (Ayesha Beg, Dayalbagh Educational Institute) · Development and Characterization of Supramene Bagasse Cellulose-Based Biolastics Films reinforced with Natural Polymers",
        C: "TSIT-16 (Dr. Krishna Dutta, NIT Rourkela) · Mitigating Ratcheting Fatigue in HS-L Steel: The Role of Peening in Life Enhancement",
      },
    },
    {
      time: "10:20 - 10:40",
      tracks: {
        A: "AMIT-09 (Subburayalu S, IIT Jodhpur) · Understanding Spatter Dynamics Using Acoustic Emission and High-Speed Imaging",
        B: "SECT-15 (Sharukh Khan, IEM Kolkata) · Sustainable Upcycling of Scrap Metal Sheets via Hydroforming with Digital Control and Simulation",
        C: "TSCT-13 (Vasanth Kumar.S, MVGR College of Engineering) · Influence on hardening temperature on corrosion resistance of SAE1040 steel",
      },
    },
    {
      time: "10:40 - 10:50",
      tracks: {
        A: "AMIT-10 (Ayyappan Murugesan, IIT Kharagpur) · Microstructural evolution and phase analysis of SS410-Al203-SiC multilayered functionally graded composite fabricated through laser cladding",
        B: "SECT-16 (Utkarsh Pandey, BIT Mesra) · Dry Sliding Wear Behaviour of AA6061/B4C-Gr Hybrid Nanocomposites Fabricated via a Combined Stir–Ultrasonic–Squeeze Casting Process",
        C: "TSCT-14 (Reena Kumari, BIT Mesra) · Combined effect of electroless Ni-P coating on the mechanical and tribological behaviour of low carbon steel",
      },
    },
    {
      time: "10:50 - 11:00",
      tracks: {
        A: "",
        B: "SECT-17 (Manashi Sabat, IIT Kharagpur) · Investigation on the dominant micro-mechanisms governing wear behavior in oxide dispersion strengthened Ni-rich high entropy alloy",
        C: "",
      },
    },
    {
      time: "11:00 - 11:15",
      tracks: {
        all: "Tea Break",
      },
    },
    {
      time: "11:15 - 11:45",
      tracks: {
        A: "Session-9A (Kalidas Hall) · Theme: Additive Manufacturing: Materials Design & Laser-Based Processing · Session Chair: Prof. Mangal Roy · AMIT-13 (Prof. G. P. Das, TCG-CREST, Kolkata) · Exploring Interfaces with DFT",
        B: "Session-9B (Gargi Hall) · Theme: Surface Engineering: Nanofabrication to Industrial Refurbishment · Session Chair: Prof. Jayanta Das · SEKT-14 (Prof. Shrikrishna N. Joshi, IIT Guwahati) · Geometric Evolution of Surface Micro Dimples during Long Pulsed Laser Beam Micro-machining",
        C: "Session-9C (Maitreyi Hall) · Theme: Hybrid Coatings & Multi-Material Interfaces · Session Chair: Dr. Gunraj Telsang · TSKT-15 (Prof. Samit K Ray, IIT Kharagpur) · Semiconductor Nanostructures for Optoelectronic Devices",
      },
    },
    {
      time: "11:45 - 12:05",
      tracks: {
        A: "AMIT-27 (Dr. Anirudha Kumar, BARC) · Nanosecond Pulsed Fiber Laser Based Technique for Surface Engineering",
        B: "SEKT-15 (Prof. TS Sampath Kumar - IIT Madras) · Tailoring the surface functionalization of bioresorbable magnesium implants",
        C: "TSKT-16 (Dr. Joydip Joardar, ARCI Hyderabad) · Surface Characteristics of Two-Dimensional Materials-based Composites",
      },
    },
    {
      time: "12:05 - 12:25",
      tracks: {
        A: "AMIT-28 (Dr. Gopala Krishna Kurapati, CSIR- National Metallurgical Laboratory) · Indigenous development of metal powders suitable for additive manufacturing - Initiatives at CSIR-NML towards Aatmanirbhar Bharat",
        B: "SEIT-17 (Dr. Shitanshu Shekhar Chakraborty, CSIR - CMERI) · Robotic laser deposition for refurbishment application",
        C: "TSIT-17 (Dr. Mahesh Gulab, CSIR NML) · Advancement in Coating Technologies through Modulation of Advanced Surface Engineering for Excellent Properties and Corrosion Performance: A New Approach",
      },
    },
    {
      time: "12:25 - 12:45",
      tracks: {
        A: "AMIT-29 (Dr. Bappa Acherjee, BIT Mesra) · Effect of Welding Mode on Mechanical Properties of Structural Steel Produced by Arc Additive Manufacturing",
        B: "SEIT-18 (Dr. Minakshi Sen, Asansol Girls College) · Entanglement Dynamics Qudit and Qudits in the Photon-Induced Sequential Double Photonization of Argon: A Theoretical Approach",
        C: "TSIT-18 (Prof. Zaheer Khan, IIT BHU) · Cladding copper on steel substrate using friction stir welding process",
      },
    },
    {
      time: "12:45 - 13:05",
      tracks: {
        A: "AMIT-30 (Dr. Ravi Sharma, IIT Madras) · Understanding the high temperature deformation of additively manufactured Ni-base superalloys",
        B: "SECT-19 (Dr. Amarish Kumar Sinha, Madan Mohan Malaviya University of Technology, Gorakhpur) · Wear and Corrosion Behaviour of Aluminium Cenosphere Composite Foam",
        C: "TSCT-15 (Yahea Shabihin, IIT Hyderabad) · Hard and wear-resistant coatings on Ti-based materials produced by weld deposition",
      },
    },
    {
      time: "13:05 - 13:15",
      tracks: {
        A: "AMIT-11 (Dr. Kulbir Singh Sandhu, Punjabi University) · Deterministic characterization of additive reinforced nano-particles embedded aluminum alloy based surface composites by FSP",
        B: "SECT-20 (Purushottam Kumar, BIT Mesra) · Evaluating Hydrothermal Durability of Laser-fabricated Steel-Polymer-Steel Sandwich Composites",
        C: "TSCT-16 (Reetik Singh, BIT Mesra) · Advanced epoxy nanocomposites: Graphene-zinc-silica ternary system for enhanced durability and corrosion resistance",
      },
    },
    {
      time: "13:15 - 14:00",
      tracks: {
        all: "Valedictory & Closure",
      },
    },
    {
      time: "14:00 - 15:00",
      tracks: {
        all: "Lunch Break",
      },
    },
    {
      time: "15:00 - 17:00",
      tracks: {
        all: "Contributory Poster Presentation · Session chair: Prof. U K Chatterjee, Prof. Moushumi Chakraborty, Dr. Anupam Midya, Dr. Nirmalya Bag",
      },
    },
  ],
};

const schedules: Record<string, DaySchedule> = {
  "21": day21Schedule,
  "22": day22Schedule,
  "23": day23Schedule,
};

type ParallelSession = {
  slNo: number;
  name: string;
  dateTime: string;
  title: string;
  sessionChair?: string;
};

const parallelSessions: ParallelSession[] = [
  {
    slNo: 1,
    name: "OS-01, (Prof. Jeff Th. M. DeHosson, University of Groningen, The Netherlands)",
    dateTime: "21.01.2026 14:00 IST / 09:30 CET",
    title: "Multiplex coatings: DLC protective coatings on elastomers",
    sessionChair: "Prof. Jyotsna Dutta Majumdar",
  },
  {
    slNo: 2,
    name: "OS-02, Prof. Manoj Gupta, National University of Singapore",
    dateTime: "21.01.2026 14:30 IST / 12:00 SGT",
    title: "New Magnesium-Based Materials: Future Horizons",
    sessionChair: "Prof. Jyotsna Dutta Majumdar",
  },
  {
    slNo: 3,
    name: "OS-03, (Prof. Raman Singh, Monash University, Australia)",
    dateTime: "21.01.2026 15:00 IST / 20:30 AET",
    title:
      "Success in Developing CVD Graphene Coating on Mild Steel; A Disruptive Approach to Remarkable/Durable Corrosion Resistance",
    sessionChair: "Prof. Jyotsna Dutta Majumdar",
  },
  {
    slNo: 3,
    name: "OS-04, (Prof. Nikhilesh chawla, Purdue University, USA)",
    dateTime: "23.01.2026 10:00 IST / 23:30 EST",
    title:
      "3D Microstructural Evolution in Additively Manufactured Alloys by X-ray Microtomography and Correlative Microscopy",
    sessionChair: "Prof. Siddhartha Roy",
  },
  {
    slNo: 4,
    name: "OS-05, Dr. Harish Rao, Peoples University, India",
    dateTime: "23.01.2026 10:30 IST",
    title: "",
    sessionChair: "Prof. Siddhartha Roy",
  },
  {
    slNo: 5,
    name: "OS-06, Prof. D P Mondal, Technocratis Institute of Technology, India",
    dateTime: "23.01.2026 11:00 IST",
    title:
      "Nano-particle Decorated Carbon and Aluminium Open Cell Foams for Improved EMI shielding and Energy Storage Applications",
    sessionChair: "Prof. Siddhartha Roy",
  },
];

const SchedulePage = () => {
  const [selectedDay, setSelectedDay] = useState<"21" | "22" | "23">("21");

  const activeSchedule = useMemo(() => schedules[selectedDay], [selectedDay]);

  const renderCell = (content?: string) => {
    if (!content) return <div className="text-gray-300">—</div>;
    return <div className="text-sm leading-relaxed text-left">{content}</div>;
  };

  return (
    <PageLayout>
      <main className="container mx-auto p-8 flex flex-col items-center text-center">
        <h1 className="text-3xl font-bold mb-3">
          FSEAM 2026 Technical Session Schedule
        </h1>
        <p className="mb-2 text-gray-700">
          IIT Kharagpur · 21st – 23rd January
        </p>

        <div className="flex gap-3 mt-6 mb-8">
          {["21", "22", "23"].map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day as "21" | "22" | "23")}
              className={`px-4 py-2 rounded border font-semibold transition-colors ${
                selectedDay === day
                  ? "bg-indigo-600 text-white border-indigo-700"
                  : "bg-white text-indigo-700 border-indigo-200 hover:border-indigo-400"
              }`}
            >
              {day} Jan
            </button>
          ))}
        </div>

        <div className="w-full max-w-7xl text-left">
          <div className="mb-4">
            <h2 className="text-2xl font-semibold text-indigo-800">
              {activeSchedule.dateLabel}
            </h2>
            {activeSchedule.summary && (
              <p className="text-gray-700 mt-1">{activeSchedule.summary}</p>
            )}
          </div>

          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-700 text-left">
              <thead className="bg-gray-800">
                <tr>
                  <th className="px-4 py-3 text-xs font-semibold text-gray-100 w-32">
                    Time Slot
                  </th>
                  <th className="px-4 py-3 text-xs font-semibold text-gray-100">
                    Track A
                  </th>
                  <th className="px-4 py-3 text-xs font-semibold text-gray-100">
                    Track B
                  </th>
                  <th className="px-4 py-3 text-xs font-semibold text-gray-100">
                    Track C
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {activeSchedule.rows.map((row, idx) => {
                  const isAll = Boolean(row.tracks.all);
                  const isLunch =
                    row.time === "13:00 - 14:00" ||
                    row.time === "13:30 - 14:15";
                  const isTea =
                    row.time === "16:00 - 16:30" ||
                    row.time === "11:00 - 11:20" ||
                    row.time === "16:15 - 16:30";
                  const isCultural = row.time === "19:00 - 20:00";
                  const isDinner =
                    row.time === "20:00 - 22:00" ||
                    row.time === "19:00 - 22:00";

                  let bgColor = "bg-gray-700";
                  let allBgColor = "bg-gray-700";

                  if (isDinner || isLunch) {
                    bgColor = "bg-gray-900";
                    allBgColor = "bg-gray-900";
                  } else if (isCultural) {
                    bgColor = "bg-gray-600";
                    allBgColor = "bg-gray-600";
                  } else if (isTea) {
                    bgColor = "bg-gray-900";
                    allBgColor = "bg-gray-900";
                  } else {
                    const isEven = idx % 2 === 0;
                    bgColor = isEven ? "bg-gray-700" : "bg-gray-800";
                    allBgColor = isEven ? "bg-gray-700" : "bg-gray-800";
                  }

                  return (
                    <tr
                      key={`${activeSchedule.dateLabel}-${row.time}-${idx}`}
                      className="align-top"
                    >
                      <td
                        className={`px-4 py-3 text-sm font-semibold text-gray-100 whitespace-nowrap ${bgColor}`}
                      >
                        {row.time}
                      </td>
                      {isAll ? (
                        <td
                          colSpan={3}
                          className={`px-4 py-3 text-gray-100 ${allBgColor}`}
                        >
                          <div className="text-sm leading-relaxed">
                            {row.tracks.all}
                          </div>
                        </td>
                      ) : (
                        <>
                          <td className={`px-4 py-3 text-gray-100 ${bgColor}`}>
                            {renderCell(row.tracks.A)}
                          </td>
                          <td className={`px-4 py-3 text-gray-100 ${bgColor}`}>
                            {renderCell(row.tracks.B)}
                          </td>
                          <td className={`px-4 py-3 text-gray-100 ${bgColor}`}>
                            {renderCell(row.tracks.C)}
                          </td>
                        </>
                      )}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-indigo-800 mb-4">
              Parallel Virtual Sessions (NPTEL Studio)
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              NPTEL studio, 1st floor of Takshashila Building
            </p>

            <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
              <table className="min-w-full divide-y divide-gray-700 text-left">
                <thead className="bg-gray-800">
                  <tr>
                    <th className="px-4 py-3 text-xs font-semibold text-gray-100 w-20">
                      Sl. No.
                    </th>
                    <th className="px-4 py-3 text-xs font-semibold text-gray-100">
                      Name and Affiliation
                    </th>
                    <th className="px-4 py-3 text-xs font-semibold text-gray-100 w-40">
                      Date & Time
                    </th>
                    <th className="px-4 py-3 text-xs font-semibold text-gray-100">
                      Title
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {parallelSessions.map((session, idx) => {
                    const isEven = idx % 2 === 0;
                    const bgColor = isEven ? "bg-gray-700" : "bg-gray-800";

                    return (
                      <tr
                        key={`${session.slNo}-${session.name}-${idx}`}
                        className="align-top"
                      >
                        <td
                          className={`px-4 py-3 text-sm font-semibold text-gray-100 whitespace-nowrap ${bgColor}`}
                        >
                          {session.slNo}
                        </td>
                        <td className={`px-4 py-3 text-gray-100 ${bgColor}`}>
                          <div className="text-sm leading-relaxed">
                            {session.name}
                          </div>
                          {session.sessionChair && (
                            <div className="text-xs text-gray-300 mt-1">
                              Session Chair: {session.sessionChair}
                            </div>
                          )}
                        </td>
                        <td
                          className={`px-4 py-3 text-sm text-gray-100 whitespace-nowrap ${bgColor}`}
                        >
                          {session.dateTime}
                        </td>
                        <td className={`px-4 py-3 text-gray-100 ${bgColor}`}>
                          <div className="text-sm leading-relaxed">
                            {session.title || "—"}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-16 flex flex-col items-center gap-3">
            <a
              href="/FSEAM 2026 Technical Session Schedule.pdf"
              download
              className="inline-block bg-indigo-600 text-white px-5 py-3 rounded font-semibold shadow hover:bg-indigo-700 transition-colors"
            >
              Download Technical Schedule (PDF)
            </a>
          </div>
        </div>
      </main>
    </PageLayout>
  );
};

export default SchedulePage;
