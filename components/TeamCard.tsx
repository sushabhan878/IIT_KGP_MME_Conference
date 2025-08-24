import React from "react";
import Link from "next/link";
import Image from "next/image";
interface TeamCardProps {
    image: string;
    name: string;
    title: string;
    socials: {
        icon: string;
        link: string;
    }[];
}

const TeamCard = ({ image, name, title, socials }: TeamCardProps) => {
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
                    {socials.map((social, index) => (
                        <li key={index}>
                            <Link
                                href={social.link}
                                className={`${social.icon} text-lg p-2 transition-colors duration-300 hover:text-blue-600 hover:bg-[#f7f5ec] rounded-full`}
                                aria-hidden="true"
                            ></Link>
                        </li>
                    ))}
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
            socials: [
                { icon: "fa-facebook", link: "https://codepen.io/collection/XdWJOQ/" },
                { icon: "fa fa-twitter", link: "https://codepen.io/collection/XdWJOQ/" },
                { icon: "fa fa-google-plus", link: "https://codepen.io/collection/XdWJOQ/" },
                { icon: "fa fa-linkedin", link: "https://codepen.io/collection/XdWJOQ/" },
            ],
        },
        {
            image: "https://res.cloudinary.com/damnmi4ya/image/upload/v1756042404/jyotsna_j6o6af.jpg",
            name: "Prof. Jyotsna Dutta Majumdar",
            title: "Convenor",
            socials: [
                { icon: "fa fa-facebook", link: "https://codepen.io/collection/XdWJOQ/" },
                { icon: "fa fa-twitter", link: "https://codepen.io/collection/XdWJOQ/" },
                { icon: "fa fa-google-plus", link: "https://codepen.io/collection/XdWJOQ/" },
                { icon: "fa fa-linkedin", link: "https://codepen.io/collection/XdWJOQ/" },
            ],
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
