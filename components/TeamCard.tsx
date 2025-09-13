import React from "react";
import Link from "next/link";
import Image from "next/image";
interface TeamCardProps {
    image: string;
    name: string;
    title: string;
}

const TeamCard = ({ image, name, title }: TeamCardProps) => {
    return (
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <div className="bg-[#f7f5ec] text-center w-full relative overflow-hidden rounded-xl shadow-md p-6 group">
                <div className="relative w-32 h-32 mx-auto mb-12">
                    <div className="absolute inset-0 rounded-full bg-blue-600 opacity-90 scale-107 transition-all duration-300 ease-linear group-hover:h-full"></div>
                    <Image
                        className="relative w-full h-full object-cover rounded-full transition-transform duration-700 ease-in-out group-hover:scale-85 group-hover:shadow-[0_0_0_14px_#f7f5ec]"
                        src={image}
                        alt={name}
                        width={128}
                        height={128}
                    />
                </div>
                <div className="team-content">
                    <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
                    <h4 className="text-sm text-gray-600 capitalize">{title}</h4>
                </div>
                <ul className="absolute bottom-[-100px] left-0 w-full bg-blue-600 flex justify-center space-x-4 py-2 transition-all duration-500 ease-in-out group-hover:bottom-0">
                    
                </ul>
            </div>
        </div>
    );
};

const Team = () => {
    const members = [
        {
            image: "https://res.cloudinary.com/damnmi4ya/image/upload/v1756042405/im_oach5s.jpg",
            name: "Prof. Indranil Manna",
            title: "Chairman",
        },
        {
            image: "https://res.cloudinary.com/damnmi4ya/image/upload/v1756042404/jyotsna_j6o6af.jpg",
            name: "Prof. Jyotsna Dutta Majumdar",
            title: "Convenor",
        },
        {
            image: "https://res.cloudinary.com/damnmi4ya/image/upload/v1756471514/download_kbbqys.jpg",
            name: "Koushik Biswas",
            title: "Joint Convenors",
        },
        {
            image: "https://res.cloudinary.com/damnmi4ya/image/upload/v1756471511/download_3_mzkggu.jpg",
            name: "Chandra Sekhar Tiwary",
            title: "Joint Convenors",
        },
        {
            image: "https://res.cloudinary.com/damnmi4ya/image/upload/v1756471511/download_4_utxkm7.jpg",
            name: "Shiv Brat Singh",
            title: "Joint Convenors",
        },
        {
            image: "https://res.cloudinary.com/damnmi4ya/image/upload/v1756471511/download_1_norbfp.jpg",
            name: "Indrani Sen",
            title: "Monitoring",
        },
                {
            image: "https://res.cloudinary.com/damnmi4ya/image/upload/v1756471512/download_5_eblguc.jpg",
            name: "Debalay Chakrabarti",
            title: "Monitoring",
        },
        {
            image: "https://res.cloudinary.com/damnmi4ya/image/upload/v1756471512/download_6_cjnvro.jpg",
            name: "Sumantra Mandal",
            title: "Monitoring",
        },
        {
            image: "https://res.cloudinary.com/damnmi4ya/image/upload/v1756471512/download_7_jz1iis.jpg",
            name: "Tapas Laha",
            title: "Monitoring",
        },
        {
            image: "https://res.cloudinary.com/damnmi4ya/image/upload/v1756471512/download_8_xhhgad.jpg",
            name: "Karabi Das",
            title: "Monitoring",
        },
        {
            image: "https://res.cloudinary.com/damnmi4ya/image/upload/v1756472046/download_9_guqwhs.jpg",
            name: "Tapas Kumar Bandyopadhyay",
            title: "Monitoring",
        },
        {
            image: "https://res.cloudinary.com/damnmi4ya/image/upload/v1756472047/download_acfqaw.jpg",
            name: "Sankha Mukherjee",
            title: "Monitoring",
        },
        {
            image: "https://res.cloudinary.com/damnmi4ya/image/upload/v1756472047/download_1_vytrct.jpg",
            name: "Rahul Mitra",
            title: "Monitoring",
        },
        {
            image: "https://res.cloudinary.com/damnmi4ya/image/upload/v1756472046/dc_pic_zoa71n.jpg",
            name: "Debjani Chakrabortys",
            title: "Monitoring",
        },
        {
            image: "https://res.cloudinary.com/damnmi4ya/image/upload/v1756472046/download_2_uilubr.jpg",
            name: "Samit Kumar Ray",
            title: "Monitoring",
        },
        {
            image: "https://res.cloudinary.com/damnmi4ya/image/upload/v1756471511/download_2_gxshet.jpg",
            name: "Gour Gopal Roy",
            title: "Treasurer",
        },
        {
            image: "https://res.cloudinary.com/damnmi4ya/image/upload/v1756472046/download_3_pya4od.jpg",
            name: "Anupam Midya",
            title: "Joint Secretary",
        },
        {
            image: "https://res.cloudinary.com/damnmi4ya/image/upload/v1756465899/Profile-avatar-Graphics-48866790-1_plqpgn.jpg",
            name: "Abhinay Rajput",
            title: "Joint Secretary",
        },
                {
            image: "https://res.cloudinary.com/damnmi4ya/image/upload/v1756465899/Profile-avatar-Graphics-48866790-1_plqpgn.jpg",
            name: "Kishan Kumar",
            title: "Joint Secretary",
        },
        {
            image: "https://res.cloudinary.com/damnmi4ya/image/upload/v1756471584/Screenshot_2025-08-29_181123_lw6tfi.png",
            name: "Siddhartha Roy",
            title: "Joint Secretary",
        },
        {
            image: "https://res.cloudinary.com/damnmi4ya/image/upload/v1756465899/Profile-avatar-Graphics-48866790-1_plqpgn.jpg",
            name: "Tapas Bera",
            title: "Joint Secretary",
        },
        {
            image: "https://res.cloudinary.com/damnmi4ya/image/upload/v1756465899/Profile-avatar-Graphics-48866790-1_plqpgn.jpg",
            name: "Shree Krishna",
            title: "Joint Secretary",
        }    
    ];

    return (
        <div className="container mx-auto py-12">
            <div className=" flex flex-row flex-2 flex-wrap justify-center -mx-4">
                {members.map((member, index) => (
                    <TeamCard key={index} {...member} />
                ))}
            </div>
        </div>
    );
};

export default Team;
