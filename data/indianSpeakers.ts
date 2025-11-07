export interface IndianSpeaker {
  name: string;
  talkTitle: string;
  duration: string;
  affiliation: string;
  email: string;
  image: string;
}

const indianSpeakers: IndianSpeaker[] = [
    {
      name: 'Prof. Goutam K. Dey',
      talkTitle: 'Net shape Fabrication with Elemental Powders',
      duration: '60 min',
      affiliation: 'Bhabha Atomic Research Centre, Mumbai, India',
      email: 'gkdey@barc.gov.in',
      image: 'https://res.cloudinary.com/damnmi4ya/image/upload/v1756465899/Profile-avatar-Graphics-48866790-1_plqpgn.jpg'
    },
    {
      name: 'Prof. Bikramjit Basu',
      talkTitle: 'L-PBF and DED based 3D printing of implantable biomaterials and implant prototypes: Opportunities and challenges',
      duration: '30 min',
      affiliation: 'Indian Institute of Science, Bangalore, India',
      email: 'bikram.iisc@gmail.com',
      image: 'https://res.cloudinary.com/damnmi4ya/image/upload/v1756465899/Profile-avatar-Graphics-48866790-1_plqpgn.jpg'
    },
    {
      name: 'Prof. A. K. Nath',
      talkTitle: 'Investigating Additive Manufacturing through Online Monitoring of Thermal History',
      duration: '60 min',
      affiliation: 'Indian Institute of Technology, Kharagpur, India',
      email: 'aknath@mech.iitkgp.ac.in',
      image: 'https://res.cloudinary.com/damnmi4ya/image/upload/v1756465899/Profile-avatar-Graphics-48866790-1_plqpgn.jpg'
    },
    {
      name: 'Dr. Ravi Nathuram Bathe',
      talkTitle: 'Ultrafast Laser Micro-Textured Engineered Surfaces for Friction Control',
      duration: '30 min',
      affiliation: 'International Advanced Research Centre for Powder Metallurgy and New Materials (ARCI), India',
      email: 'ravi@arci.res.in',
      image: 'https://res.cloudinary.com/damnmi4ya/image/upload/v1756465899/Profile-avatar-Graphics-48866790-1_plqpgn.jpg'
    },
    {
      name: 'Prof. Amit Roy Chowdhury',
      talkTitle: 'Patient specific implant manufacturing using Direct Selective Laser Melting',
      duration: '30 min',
      affiliation: 'Indian Institute of Engineering Science and Technology, Shibpur, India',
      email: 'amit@aero.iiests.ac.in',
      image: 'https://res.cloudinary.com/damnmi4ya/image/upload/v1756465899/Profile-avatar-Graphics-48866790-1_plqpgn.jpg'
    },
    {
      name: 'Dr. Mithun Das',
      talkTitle: 'Laser Surface Modification of Titanium for Biomedical Applications',
      duration: '30 min',
      affiliation: 'CSIR-Central Glass and Ceramic Research Institute, Kolkata, India',
      email: 'mitun@cgcri.res.in',
      image: 'https://res.cloudinary.com/damnmi4ya/image/upload/v1756465899/Profile-avatar-Graphics-48866790-1_plqpgn.jpg'
    },
    {
      name: 'Prof. Indranil Manna',
      talkTitle: 'Laser Materials Processing',
      duration: '30 min',
      affiliation: 'Birla Institute of Technology Mesra and IIT Kharagpur, India',
      email: 'imanna@metal.iitkgp.ac.in',
      image: 'https://res.cloudinary.com/damnmi4ya/image/upload/v1756465899/Profile-avatar-Graphics-48866790-1_plqpgn.jpg'
    },
    {
      name: 'Prof. G. L. Samuel',
      talkTitle: 'Advanced Laser Material Processing',
      duration: '30 min',
      affiliation: 'Indian Institute of Technology Madras, Tamil Nadu, India',
      email: 'samuelgl@iitm.ac.in',
      image: 'https://res.cloudinary.com/damnmi4ya/image/upload/v1756465899/Profile-avatar-Graphics-48866790-1_plqpgn.jpg'
    },
    {
      name: 'Prof. Suman Chakraborty',
      talkTitle: 'Laser Aided Additive Manufacturing of Metal Alloys: Pathway from Transport Phenomena to Microstructural Evolution',
      duration: '30 min',
      affiliation: 'Indian Institute of Technology Kharagpur, India',
      email: 'suman@mech.iitkgp.ac.in',
      image: 'https://res.cloudinary.com/damnmi4ya/image/upload/v1756465899/Profile-avatar-Graphics-48866790-1_plqpgn.jpg'
    },
    {
      name: 'Prof. Sudhanshu Shekhar Singh',
      talkTitle: 'Fabrication of Metal Matrix Composites (MMCs) using Laser Assisted Additive Manufacturing',
      duration: '30 min',
      affiliation: 'Indian Institute of Technology Kanpur, Uttar Pradesh, India',
      email: 'sudhanss@iitk.ac.in',
      image: 'https://res.cloudinary.com/damnmi4ya/image/upload/v1756465899/Profile-avatar-Graphics-48866790-1_plqpgn.jpg'
    },
    {
      name: 'Dr. Debdutt Patro',
      talkTitle: 'Accurate performance evaluation of coatings in harsh environments',
      duration: '30 min',
      affiliation: 'Ducom Instruments, Bangalore, India',
      email: 'debdutt.p@ducom.com',
      image: 'https://res.cloudinary.com/damnmi4ya/image/upload/v1756465899/Profile-avatar-Graphics-48866790-1_plqpgn.jpg'
    },
    {
      name: 'Prof. Shrikrishna N. Joshi',
      talkTitle: 'Laser Induced Plasma Assisted Micromachining',
      duration: '30 min',
      affiliation: 'Indian Institute of Technology Guwahati, Assam, India',
      email: 'shrikrishna.joshi02@gmail.com',
      image: 'https://res.cloudinary.com/damnmi4ya/image/upload/v1756465899/Profile-avatar-Graphics-48866790-1_plqpgn.jpg'
    },
    {
      name: 'Prof. Bharat B. Panigrahi',
      talkTitle: 'Development of microstructural heterogeneity during Laser processing of Inconel 718 superalloy',
      duration: '30 min',
      affiliation: 'Indian Institute of Technology Hyderabad, India',
      email: 'bharat@msme.iith.ac.in',
      image: 'https://res.cloudinary.com/damnmi4ya/image/upload/v1756465899/Profile-avatar-Graphics-48866790-1_plqpgn.jpg'
    },
    {
      name: 'Prof. Gour Gopal Roy',
      talkTitle: 'The Effect of Beam Oscillation During Electron Beam Welding',
      duration: '30 min',
      affiliation: 'Indian Institute of Technology Kharagpur, India',
      email: 'ggroy@metal.iitkgp.ac.in',
      image: 'https://res.cloudinary.com/damnmi4ya/image/upload/v1756465899/Profile-avatar-Graphics-48866790-1_plqpgn.jpg'
    },
    {
      name: 'Prof. Samit K. Ray',
      talkTitle: 'Optical Properties of Semiconductor Hetero- and Nanostructures Grown by Pulsed Laser Deposition',
      duration: '30 min',
      affiliation: 'Indian Institute of Technology Kharagpur, India',
      email: 'physkr@phy.iitkgp.ac.in',
      image: 'https://res.cloudinary.com/damnmi4ya/image/upload/v1756465899/Profile-avatar-Graphics-48866790-1_plqpgn.jpg'
    },
    {
      name: 'Prof. Uday Shanker Dixit',
      talkTitle: 'Modeling and Optimization of Laser Based Forming Processes',
      duration: '30 min',
      affiliation: 'Indian Institute of Technology Guwahati, India',
      email: 'uday@iitg.ac.in',
      image: 'https://res.cloudinary.com/damnmi4ya/image/upload/v1756465899/Profile-avatar-Graphics-48866790-1_plqpgn.jpg'
    },
    {
      name: 'Dr. A. K. Rai',
      talkTitle: 'Recent Developments in Laser Shock Peening Technology',
      duration: '30 min',
      affiliation: 'Laser Technology Division, RRCAT, India',
      email: 'akrai@rrcat.gov.in',
      image: 'https://res.cloudinary.com/damnmi4ya/image/upload/v1756465899/Profile-avatar-Graphics-48866790-1_plqpgn.jpg'
    },
    {
      name: 'Dr. Pallab Dutta',
      talkTitle: 'Opportunities for laser based processing to solve problems in drug delivery and tissue engineering',
      duration: '30 min',
      affiliation: 'National Institute of Pharmaceutical Education and Research, Kolkata, India',
      email: 'contactpallab@gmail.com',
      image: 'https://res.cloudinary.com/damnmi4ya/image/upload/v1756465899/Profile-avatar-Graphics-48866790-1_plqpgn.jpg'
    },
    {
      name: 'Prof. Anindya Basu',
      talkTitle: 'Laser weld-brazing of aluminium alloy and galvanized interstitial free steel',
      duration: '30 min',
      affiliation: 'National Institute of Technology Rourkela, India',
      email: 'anindya.basu@gmail.com',
      image: 'https://res.cloudinary.com/damnmi4ya/image/upload/v1756465899/Profile-avatar-Graphics-48866790-1_plqpgn.jpg'
    },
    {
      name: 'Dr. Gururaj Telasang',
      talkTitle: 'Interfacial Microstructure and Mechanical Properties of Bimetallic Structures by Selective Laser Melting',
      duration: '15 min',
      affiliation: 'International Advanced Research Centre for Powder Metallurgy and New Materials (ARCI), India',
      email: 'gururajst@arci.res.in',
      image: 'https://res.cloudinary.com/damnmi4ya/image/upload/v1756465899/Profile-avatar-Graphics-48866790-1_plqpgn.jpg'
    },
    {
      name: 'Prof. Muvvala Gopinath',
      talkTitle: 'Laser material interaction in laser directed energy deposition process',
      duration: '15 min',
      affiliation: 'Indian Institute of Technology Hyderabad, India',
      email: 'mgopinath@mae.iith.ac.in',
      image: 'https://res.cloudinary.com/damnmi4ya/image/upload/v1756465899/Profile-avatar-Graphics-48866790-1_plqpgn.jpg'
    },
    {
      name: 'Prof. Sagar Sarkar',
      talkTitle: 'Effect of heat treatment and post-processing techniques on the mechanical properties of laser power bed fusion fabricated 15-5 PH Stainless Steel',
      duration: '15 min',
      affiliation: 'Indian Institute of Technology Delhi, India',
      email: 'sagar@mech.iitd.ac.in / sagar.sarkar123@gmail.com',
      image: 'https://res.cloudinary.com/damnmi4ya/image/upload/v1756465899/Profile-avatar-Graphics-48866790-1_plqpgn.jpg'
    },
    {
      name: 'Prof. Supriya Bera',
      talkTitle: 'Using laser assisted sintering to synthesize Cu-based alloy composite',
      duration: '15 min',
      affiliation: 'National Institute of Technology Durgapur, India',
      email: 'supriya.bera@mme.nitdgp.ac.in',
      image: 'https://res.cloudinary.com/damnmi4ya/image/upload/v1756465899/Profile-avatar-Graphics-48866790-1_plqpgn.jpg'
    },
    {
      name: 'Prof. Sumit Kumar Sharma',
      talkTitle: 'Surface Characteristics of Laser Surface Melting of Inconel 718',
      duration: '15 min',
      affiliation: 'BIT Sindri, India',
      email: 'sumit9187@gmail.com',
      image: 'https://res.cloudinary.com/damnmi4ya/image/upload/v1756465899/Profile-avatar-Graphics-48866790-1_plqpgn.jpg'
    },
    {
      name: 'Prof. Renu Kumari',
      talkTitle: 'Laser surface texturing of Ti-6Al-4V alloy for bio-implant application',
      duration: '15 min',
      affiliation: 'National Institute of Technology Jamshedpur, India',
      email: 'renu.met@nitjsr.ac.in',
      image: 'https://res.cloudinary.com/damnmi4ya/image/upload/v1756465899/Profile-avatar-Graphics-48866790-1_plqpgn.jpg'
    },
    {
      name: 'Dr. Neetika Chauhan',
      talkTitle: 'Review on Advancement of Computational Fluid Dynamics (CFD) techniques for Laser Assisted Materials Processing: Modelling Implementation, Implications and Future Perspective',
      duration: '15 min',
      affiliation: 'National Institute of Technology Kurukshetra, India',
      email: 'neetika.nit@gmail.com',
      image: 'https://res.cloudinary.com/damnmi4ya/image/upload/v1756465899/Profile-avatar-Graphics-48866790-1_plqpgn.jpg'
    },
    {
      name: 'Prof. M. Nagaraja',
      talkTitle: 'Future prospects on Ultrafast laser processing for manufacturing sectors',
      duration: '15 min',
      affiliation: 'PSNA College of Engineering and Technology, Tamil Nadu, India',
      email: 'madurainagaraja@gmail.com',
      image: 'https://res.cloudinary.com/damnmi4ya/image/upload/v1756465899/Profile-avatar-Graphics-48866790-1_plqpgn.jpg'
    },
    {
      name: 'Prof. R. Balamurugan',
      talkTitle: 'Effect of Laser shock peening on the mechanical properties of 6061-T6 Al alloy',
      duration: '15 min',
      affiliation: 'Kumaraguru College of Technology, India',
      email: 'balamurugan.r.sci@kct.ac.in',
      image: 'https://res.cloudinary.com/damnmi4ya/image/upload/v1756465899/Profile-avatar-Graphics-48866790-1_plqpgn.jpg'
    }
  ]
  

export default indianSpeakers;

