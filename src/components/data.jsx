import logo from '../style/img/react.jpg'
import world from '../style/img/world.jpg'
import weather from "../style/img/weather.jpg"
import post from "../style/img/post.jpg"
import {MdPhoneIphone,MdEmail,MdLocationOn,MdLanguage} from "react-icons/md"
import { FaTags, FaCheck,FaHtml5,FaCss3Alt,FaBootstrap,FaBirthdayCake,FaFlag,FaUserTie,FaReact,FaJs,FaEye,FaGithub} from 'react-icons/fa';
export const Emoji = props => (
  <span
    className="emoji"
    role="img"
    aria-label={props.label ? props.label : ""}
    aria-hidden={props.label ? "false" : "true"}
  >
    {props.symbol}
  </span>
)
export const experienceData=[
    {
        id:1,
        year:<h4><span className="line-title">2019-2020</span></h4>,
        employer:<h5>Kauno Zalgiris</h5>,
        position:<h6>Professional football player</h6>
    },
    {
        id:2,
        year:<h4><span className="line-title">2017-2019</span></h4>,
        employer:<h5>Widzew Łódź (Poland)</h5>,
        position:<h6>Professional football player</h6>
    },
    {
        id:3,
        year:<h4><span className="line-title">2016-2017</span></h4>,
        employer:<h5>Kauno Zalgiris</h5>,
        position:<h6>Professional football player</h6>
    },
    {
        id:4,
        year:<h4><span className="line-title">2011-2016</span></h4>,
        employer:<h5>FK Ventspils (Latvia)</h5>,
        position:<h6>Professional football player</h6>
    },
    {
        id:5,
        year:<h4><span className="line-title">2007-2011</span></h4>,
        employer:<h5>FBK Kaunas</h5>,
        position:<h6>Professional football player</h6>
    }
];
export const projectsData=[
    {
        id:6,
        photo:<img src={logo} alt=""/>,
        title:<h2>Warehouse App with</h2>,
        prograPhoto:<FaReact className="react"/>,
        tags:<p className="tag"><FaTags className="tag-icon"/><span>Html5, Css3, ReactJS, Bootstrap</span></p>,
        btns: (
            <div className="btns">
                <a className="btn" href="https://warehousereact.netlify.app/products"><FaEye className="btn-icon"/>Preview</a>
                <a className="btn" href="https://github.com/simuxs123/warehouse"><FaGithub className="btn-icon"/>GitHub</a>
            </div>   
        )
    },
    {
        id:7,
        photo:<img src={world} alt=""/>,
        title:<h2>Countries list App with</h2>,
        prograPhoto:<FaReact className="react"/>,
        tags:<p className="tag"><FaTags className="tag-icon"/><span>Html5, Css3, ReactJS, Bootstrap, API</span></p>,
        btns: (
            <div className="btns">
                <a className="btn" href="https://warehousereact.netlify.app/products"><FaEye className="btn-icon"/>Preview</a>
                <a className="btn" href="https://github.com/simuxs123/warehouse"><FaGithub className="btn-icon"/>GitHub</a>
            </div>   
        )
    },
    {
        id:8,
        photo:<img src={weather} alt=""/>,
        tags:<p className="tag"><FaTags className="tag-icon" /><span>Html5, Css3, JS, Bootstrap, API</span></p>,
        title:<h2>Weather App with</h2>,
        prograPhoto:<FaJs className="js"/>,
        btns: (
            <div className="btns">
                <a className="btn" href="https://simuxs123.github.io/weatherApi/"><FaEye className="btn-icon"/>Preview</a>
                <a className="btn" href="https://github.com/simuxs123/weatherApi.git"><FaGithub className="btn-icon"/>GitHub</a>
            </div>   
        )
    },
    {
        id:9,
        photo:<img src={post} alt=""/>,
        tags:<p className="tag"><FaTags className="tag-icon" /><span>Html5, Css3, JS, Bootstrap, API</span></p>,
        title:<h2>Postcode App with</h2>,
        prograPhoto:<FaJs className="js"/>,
        btns: (
            <div className="btns">
                <a className="btn" href="https://simuxs123.github.io/postCode-API/"><FaEye className="btn-icon"/>Preview</a>
                <a className="btn" href="https://github.com/simuxs123/postCode-API.git"><FaGithub className="btn-icon"/>GitHub</a>
            </div>   
        )
    }
    
];

export const educationData=[
    {
        id:9,
        year:<h4><span className="line-title">2020-Current</span></h4>,
        employer:<h5>Kaunas Information Technology School</h5>,
        position:<h6>Student / Full Stack Developer</h6>
    },
    {
        id:10,
        year:<h4><span className="line-title">2007-2010</span></h4>,
        employer:<h5>Kaunas "Dainava" High School</h5>,
        position:<h6>Student</h6>
    },
    {
        id:11,
        year:<h4><span className="line-title">2000-2007</span></h4>,
        employer:<h5>Kretingos "Pranciskonai" gymnasium</h5>,
        position:<h6>Student</h6>
    }
]

export const personalData=[
        {
            personal:(
                <>
                    <h2 className="info-title"><span className="line-title">Personal</span></h2>
                    <p><span className="info-item"><FaUserTie className="icon"/>FullName:</span> Simonas Paulius</p>
                    <hr/>
                    <p><span className="info-item"><FaBirthdayCake className="icon"/>Birthday:</span> 1991/05/12</p>
                    <hr/>
                    <p><span className="info-item"><MdLanguage className="icon"/>Nationality:</span> Lithuanian</p>
                    <hr/>
                    <p><span className="info-item"><FaFlag className="icon"/>Languages: </span> Lithuanian, Russian, English</p>
                    <hr/>
                </>
            )
        },
        {
             contacts:(
                <>
                    <h2 className="info-title"><span className="line-title">Contacts</span></h2>
                    <p><span className="info-item"><MdPhoneIphone className="icon"/>Phone Number:</span><a href="tel:+37064612906"> +37064612906</a></p>
                    <hr/>
                    <p><span className="info-item"><MdEmail className="icon"/>E-mail:</span><a href="mailto:paulius.simonas@gmail.com"> paulius.simonas@gmail.com</a> </p>
                    <hr/>
                    <p><span className="info-item"><MdLocationOn className="icon"/>Location:</span><a href="https://www.google.lt/maps/search/klaipeda/@55.7052607,21.017809,11z"  target="_blank" rel="noopener noreferrer"> Klaipeda</a></p>
                    <hr/>
                </>
            )
        },
        {
            skills: (
                <>
                    <h2 className="info-title"><span className="line-title">Skills</span></h2>
                    <p><span className="info-item"><FaHtml5 className="icon"/>HTML5</span><FaCheck className="check"/></p>
                    <hr/>
                    <p><span className="info-item"><FaCss3Alt className="icon"/>CSS3</span><FaCheck className="check"/></p>
                    <hr/>
                    <p><span className="info-item"><FaReact className="icon"/>ReactJS</span><FaCheck className="check"/></p>
                    <hr/>
                    <p><span className="info-item"><FaJs className="icon"/>JS</span><FaCheck className="check"/></p>
                    <hr/>
                    <p><span className="info-item"><FaBootstrap className="icon"/>Bootstrap</span><FaCheck className="check"/></p>
                    <hr/>
                </>
            )
        } 
]