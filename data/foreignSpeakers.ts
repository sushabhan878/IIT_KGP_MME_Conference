export interface ForeignSpeaker {
  name: string;
  affiliation: string;
  image: string;
}

const foreignSpeakers: ForeignSpeaker[] = [
    {
      name: 'Dr.-Ing. Andreas Wetzig',
      affiliation: 'Technology Field Manager, Cutting & Joining, Fraunhofer IWS, Dresden, Germany',
      image: 'https://res.cloudinary.com/damnmi4ya/image/upload/v1756465899/Profile-avatar-Graphics-48866790-1_plqpgn.jpg'
    },
    {
      name: 'Prof. Prakash Srirangam',
      affiliation: 'Associate Professor, University of Warwick, UK',
      image: 'https://res.cloudinary.com/damnmi4ya/image/upload/v1756465899/Profile-avatar-Graphics-48866790-1_plqpgn.jpg'
    },
    {
      name: 'Prof. Boaz Pokroy',
      affiliation: 'Department of Materials Science & Engineering, Technion, Israel',
      image: 'https://res.cloudinary.com/damnmi4ya/image/upload/v1756465899/Profile-avatar-Graphics-48866790-1_plqpgn.jpg'
    },
    {
      name: 'Prof. Narendra B. Dahotre',
      affiliation: 'Regents Professor, University of North Texas, USA; Associate Vice President, Center for Agile & Adaptive Additive Manufacturing',
      image: 'https://res.cloudinary.com/damnmi4ya/image/upload/v1756465899/Profile-avatar-Graphics-48866790-1_plqpgn.jpg'
    }
  ]  
  

export default foreignSpeakers;

