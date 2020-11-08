import React from 'react';
import myPhoto from '../../assets/my-photo/my-photo.jpeg';

function About() {
  return (
    <section className="my-5">
      <div className="my-2">
      <p>
      Hello! My name is Alvaro. I'm a Full Stack Developer based in Austin, TX!
      </p>
      <p>
      My Skill set includes MERN Stack, Javascript, SQL! My background includes a BS in Biochemistry from the University of Texas at Austin. I've recently completed an intentisve 6 month Coding Bootcamp also from the UT Austin. Since 2014, I have been workin as a Business Analyst at eClinicalWorks.
      </p>
      <div className="profile-img my-5">
      <img src={myPhoto} alt="Alvaro is attending a Longhorn football game flashing the Hookem Horns Sign" width="15%"/>
      </div>
      </div>
    </section>
  );
}

export default About;
