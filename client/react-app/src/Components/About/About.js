import './About.css';
import logo from './resources/avatar.png';

function About(){
  return (
    <div className="main">
      <div className="main-1">
        <h1>About Us</h1>
      </div>
      <div className="main-2">
        {/*  */}
        <div className="block">
          <div className="block-avatar">
            <div className='pic'><img src={logo} alt="image"/></div>
            <div className='name'>Tyler Abraham</div>
          </div>
          <div className="block-bio">
            <p className='bio-p'>
            Tyler is a senior Computer Science student at Georgia State University. 
            He possesses about 3 years' worth of programming knowledge, 
            mainly with Java and C. Currently focused on cybersecurity, 
            he has been involved with data migration and cloud platforms. 
            His well-rounded capability allows him to make flexible in places 
            when it comes to working with teams, and willing to do whatever 
            needs to be done.
            </p>
          </div>
        </div>
        {/*  */}
        <div className="block">
          <div className="block-avatar">
            <div className='pic'><img src={logo} alt="image"/></div>
            <div className='name'>Daniel Lee</div>
          </div>
          <div className="block-bio">
            <p className='bio-p'>
            Daniel is a senior Computer Science student with a passion for web 
            development, who has a strong focus on Javascript, HTML, 
            and CSS has been able to develop functional websites and games 
            throughout the past year.
            </p>
          </div>
        </div>
        {/*  */}
        <div className="block">
          <div className="block-avatar">
            <div className='pic'><img src={logo} alt="image"/></div>
            <div className='name'>Kevin Sangston</div>
          </div>
          <div className="block-bio">
            <p className='bio-p'>
            Kevin is a senior Computer Science student at Georgia State University. 
            He has roughly 3 years of experience with Java, Python, and various 
            other languages. This past fall he attended an internship at Amazon 
            AWS for S3, during which he improved an existing S3 backend application 
            using primarily Python, as well as some Ruby, TypeScript, and other 
            proprietary Amazon builder tools. Frontend experience is limited, however, 
            and he is looking forward to exploring that with this project.
            </p>
          </div>
        </div>
        {/*  */}
        <div className="block">
          <div className="block-avatar">
            <div className='pic'><img src={logo} alt="image"/></div>
            <div className='name'>Claudia Valladares</div>
          </div>
          <div className="block-bio">
            <p className='bio-p'>
            Claudia is a senior Computer Science student at Georgia State 
            University with nearly three years of school-related programming 
            experience. She possesses moderate to intermediate knowledge of 
            Java and is familiar with Python, MySQL, and C#. Currently, she is 
            enrolled in a web programming class that will expand her skills in HTML, 
            CSS, and JavaScript. Furthermore, she is interested in exploring visually 
            creative technologies, such as UI/UX design. Her adaptability, flexibility, 
            and exceptional communication skills make her a reliable team member who 
            can efficiently collaborate with others.
            </p>
          </div>
        </div>
        {/*  */}
        <div className="block">
          <div className="block-avatar">
            <div className='pic'><img src={logo} alt="image"/></div>
            <div className='name'>Dylan Drumm</div>
          </div>
          <div className="block-bio">
            <p className='bio-p'>
            Dylan is a senior Computer Science student with an interest in Data Science.  
            Has worked on mobile applications before using the Flutter library, 
            has some experience in web development, and has worked with machine 
            learning and data analysis at a beginner level.  Lacks experience 
            with frontend web application development and backend data management, 
            and is hoping to expand his capabilities in that field through working 
            with the React library and cloud-hosted data storage/analysis applications.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  )
}
  
export default About;