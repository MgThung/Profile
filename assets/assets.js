import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './thh.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import work1 from './public/work-1.png';
import work2 from './public/work-2.png';
import work3 from './public/work-3.png';
import work4 from './public/work-4.png';
import ultraB from './ultraB.png';
import comfy from './comfyhouse.png'
import digital from './digitalmarket.png'
import fashion from './fashion.png'
import social from './social.png'
import education from './education.png'
import dobu from './Dobu.png'
export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    work1,
    work2,
    work3,
    work4,
    ultraB,
    fashion,
    comfy,
    digital,
    social,
    education,
    dobu
};

export const workData = [
    {
        title: 'Frontend project',
        description: 'Web Design',
        bgImage: "https://i.pinimg.com/736x/9d/eb/20/9deb2064316b21994cfb956f55d50b04.jpg",
    },
    {
        title: 'Geo based app',
        description: 'Mobile App',
        bgImage: "https://i.pinimg.com/736x/e5/f6/3a/e5f63ad0fecb27059b0ed9ba468da233.jpg",
    },
    {
        title: 'Photography site',
        description: 'Web Design',
        bgImage: 'https://i.pinimg.com/736x/91/ed/33/91ed339ce59e5f654616ae0ecb7677cf.jpg',
    },
    {
        title: 'UI/UX designing',
        description: 'UI/UX Design',
        bgImage: 'https://i.pinimg.com/736x/4d/d9/d0/4dd9d060bfd17efb489485396546b991.jpg',
    },
]

export const filterWork=[ {codeLink: "https://github.com/chuewathankyaw/reactultra-b.git",
                            description: "This website is an ECommerce website related with Cosmetic Products.",
                            imgUrl: assets.ultraB,
                            projectLink:"https://ultra-b.netlify.app/",
                            tags:['React JS', 'Web App', 'All'],
                            title:"Ultra-B"
                            },
                            {codeLink: "https://github.com/MgThung/DuboMartialArts",
                            description:"This website is martial arts class learning website and designed for ",
                            imgUrl: assets.dobu,
                            projectLink: "https://dubo-martial-arts-eta.vercel.app/",
                            tags:  ['Web App', 'UI/UX', 'All'],
                            title: "Dubo Martial Arts"},
                            {codeLink: "https://github.com/MgThung/ComfyHouse.git",
                            description: "This website is an Ecommerce website and designed for selling bed and bed room accessories",
                            imgUrl: assets.comfy,
                            projectLink : "https://comfyhousedesign.netlify.app/",
                            tags :  ['Web App', 'UI/UX', 'All'],
                            title : "Furniture Shop"},
                            {codeLink: "https://github.com/MgThung/Digital_Market.git",
                            description:"This website is designed for Digital Marking Services",
                            imgUrl: assets.digital,
                            projectLink: "https://digitalmarketthh.netlify.app/",
                            tags:  ['Web App', 'UI/UX', 'All'],
                            title: "Digital Market"},
                            {codeLink: "https://github.com/MgThung/Fashionshop.git",
                            description:"This website is an eCommerce website and designed for selling fashion dresses.",
                            imgUrl: assets.fashion,
                            projectLink: "https://fashionshop-sigma.vercel.app/",
                            tags:  ['Web App', 'UI/UX', 'All'],
                            title: "Fashion Shop Ecommerce Website"},
                            {codeLink: "https://github.com/MgThung/Education",
                            description:"This website is an Education website and designed with Home page, About Page, Courses Page and Contact Page",
                            imgUrl: assets.education,
                            projectLink: "https://educationsimpledesign.netlify.app/",
                            tags:  ['Web App', 'UI/UX', 'All'],
                            title: "Education Web App"},
                            {codeLink: "https://github.com/MgThung/SocialMedia.git",
                            description:"This website is social media website by creating like facebook website design",
                            imgUrl: assets.social,
                            projectLink: "https://reactsocialmedapp.netlify.app/",
                            tags:  ['React JS', 'UI/UX', 'All'],
                            title: "Social Web Design"},
                            
                        ]

export const serviceData = [
    { icon: assets.web_icon, title: 'Web design', description: 'Web development is the process of building, programming...', link: '' },
    { icon: assets.mobile_icon, title: 'Mobile app', description: 'Mobile app development involves creating software for mobile devices...', link: '' },
    { icon: assets.ui_icon, title: 'UI/UX design', description: 'UI/UX design focuses on creating a seamless user experience...', link: '' },
    { icon: assets.graphics_icon, title: 'Graphics design', description: 'Creative design solutions to enhance visual communication...', link: '' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript React Js, Next Js' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Tech in Computer Science' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
];