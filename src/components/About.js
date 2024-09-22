/* eslint-disable @next/next/no-img-element */
import React from "react";

import ReduxIcon from "../assets/redux.png";
import HTML from "../assets/html.png";
import jQuery from "../assets/jquery.png";
import Ruby from "../assets/ruby.png";
import JEST from "../assets/jest.png";
import Flutter from "../assets/flutter.png";
import VSCode from "../assets/vscode.png";
import Figma from "../assets/figma.png";
import ReactIcon from "../assets/react.png";
import RSpecLogo from "../assets/rspec.png";
import NPMlogo from "../assets/npm.png";
import GitLogo from "../assets/git.png";
import GitHublogo from "../assets/github.png";
import GMeet from "../assets/meet.png";
import Zoomlogo from "../assets/zoom.webp";
import SkypeLogo from "../assets/skype.png";
import Slack from "../assets/slack.png";
import WebPack from "../assets/webpack.png";
import PostGres from "../assets/postgres.png";
import Rails from "../assets/rails.png";
import Canva from "../assets/canva.png";
import CDT from "../assets/cdt.png";
import CSS from "../assets/css.png";
import BootStrap from "../assets/bootstrap.png";
import NextJS from "../assets/next.webp";
import JavaScript from "../assets/javascript.png";
import Sass from "../assets/sass.png";
import PostMan from "../assets/postman.png";
import WordPress from "../assets/wordpress.png";
import CPlus from "../assets/c-plus.png";
import TypeScript from "../assets/typescript.png";
import Sql from "../assets/sql.png";
import Python from "../assets/python.png";
import NextJs from "../assets/nextjs.png";
import Tailwind from "../assets/tailwind-css.png";
import AntDesign from "../assets/ant-design.png";
import Shadcn from "../assets/shadecn.png";
import NodeJs from "../assets/nodejs.png";
import ExpressJs from "../assets/express.png";
import Mongoose from "../assets/mongoose.png";
import MongoDB from "../assets/mongodb.png";
import Supabase from "../assets/supabase.jpg";
import Prisma from "../assets/prisma.png";
import Rn from "../assets/react-native.png";
import RnPaper from "../assets/rnpaper.png";
import Expo from "../assets/expo.png";
import Firebase from "../assets/firebase.png";
import NextAuth from "../assets/next-auth.png";
import Heroku from "../assets/heroku.png";
import Stripe from "../assets/stripe.png";
import Ssl from "../assets/ssl.png";

import Image from "next/image";
import { CustomSkill } from "./Custom/CustomSkill";

const About = () => (
  <section className="about" id="about">
    <div className="about-me">
      <h2 className="title about-title">aBOUT mE</h2>
      <p className="paragraph about-para">
        I am a Full Stack Developer with a passion for creating impactful
        digital experiences. Proficient in React, Next.js, Redux, MongoDB,
        Express, Node.js, Postgres, and Prisma, I enjoy transforming ideas into
        user-centric web applications. As  a Campus Ambassador for Programming Hero, I actively
        contribute to the tech community and mentor aspiring developers. With a
        love for problem-solving and continuous learning, I thrive in hackathons
        and collaborative projects. Let's connect and explore new tech frontiers
        together!
      </p>
      <button className="hire-me">
        <a
          href="https://drive.google.com/file/d/1RIQlxcFspH89xvugEeEyvgSG_ABMX3rI/view?usp=drive_link"
          target="_blank"
          rel="noreferrer"
        >
          GET MY CV
        </a>
      </button>
    </div>
    <div className="about-skills">
      <h2 className="skill-title">Language</h2>
      <div className="skills">
        <div className="skill">
          <Image src={CPlus} alt="" height={100} width={100} />
          <p>C++</p>
        </div>
        <div className="skill">
          <Image src={JavaScript} alt="" height={100} width={100} />

          <p>JavaScript</p>
        </div>
        <div className="skill">
          <Image src={TypeScript} alt="" height={100} width={100} />

          <p>TypeScript</p>
        </div>
        <div className="skill">
          <Image src={Sql} alt="" height={100} width={100} />

          <p>Sql</p>
        </div>
        <div className="skill">
          <Image src={Python} alt="" height={100} width={100} />

          <p>Python</p>
        </div>
      </div>
      <h2 className="skill-title">Front-End</h2>
      <div className="skills">
        <div className="skill">
          <Image src={ReactIcon} alt="" height={100} width={100} />
          <p>React</p>
        </div>
        <div className="skill">
          <Image
            src={NextJs}
            alt=""
            height={100}
            width={100}
            className="bg-white p-2"
          />

          <p>Next.js</p>
        </div>
        <div className="skill">
          <Image src={ReduxIcon} alt="" height={100} width={100} />

          <p>Redux</p>
        </div>
        <div className="skill">
          <Image src={Tailwind} alt="" height={100} width={100} />

          <p>Tailwind</p>
        </div>
        <div className="skill">
          <Image src={AntDesign} alt="" height={100} width={100} />

          <p>Ant Design</p>
        </div>
        <div className="skill">
          <Image src={Shadcn} alt="" height={100} width={100} />
          <p>Shadcn Ui</p>
        </div>
      </div>
      <h2 className="skill-title">Back-End</h2>
      <div className="skills">
        <div className="skill">
          <Image src={NodeJs} alt="" height={100} width={100} />
          <p>Node.js</p>
        </div>
        <div className="skill">
          <Image
            src={ExpressJs}
            className="bg-white p-2"
            alt=""
            height={100}
            width={100}
          />
          <p>Express.js</p>
        </div>
        <div className="skill">
          <Image src={Mongoose} alt="" height={100} width={100} />
          <p>Mongoose</p>
        </div>
        <div className="skill">
          <Image src={PostGres} alt="" height={100} width={100} />
          <p>PostgreSQL</p>
        </div>
        <div className="skill">
          <Image src={MongoDB} alt="" height={100} width={100} />
          <p>MongoDB</p>
        </div>
        <div className="skill">
          <Image src={Supabase} alt="" height={100} width={100} />
          <p>Supabase</p>
        </div>
        <div className="skill">
          <Image src={Prisma} alt="" height={100} width={100} />
          <p>Prisma</p>
        </div>
      </div>
      <h2 className="skill-title">Mobile</h2>
      <div className="skills">
        <div className="skill">
          <Image
            src={Rn}
            alt=""
            height={100}
            width={100}
            className="bg-white p-2"
          />
          <p>React Native</p>
        </div>
        <div className="skill">
          <Image src={RnPaper} alt="" height={100} width={100} />
          <p>React Native Paper</p>
        </div>
        <div className="skill">
          <Image
            src={Expo}
            alt=""
            height={100}
            width={100}
            className="bg-white p-2"
          />
          <p>Expo</p>
        </div>
        <div className="skill">
          <Image
            src={Rn}
            alt=""
            height={100}
            width={100}
            className="bg-white p-2"
          />
          <p>Native Wind</p>
        </div>
      </div>
      <h2 className="skill-title">Tools</h2>
      <div className="skills">
        <div className="skill">
          <Image src={GitHublogo} alt="" height={100} width={100} />
          <p>GitHub</p>
        </div>

        <div className="skill">
          <Image src={Firebase} alt="" height={100} width={100} />
          <p>Firebase</p>
        </div>
        <div className="skill">
          <Image src={NextAuth} alt="" height={100} width={100} />
          <p>Next Auth</p>
        </div>
        <div className="skill">
          <Image src={Heroku} alt="" height={100} width={100} />
          <p>Heroku</p>
        </div>
        <div className="skill">
          <Image src={Stripe} alt="" height={100} width={100} />
          <p>Stripe</p>
        </div>
        <div className="skill">
          <Image src={Ssl} alt="" height={100} width={100} />
          <p>SSL Commerz</p>
        </div>

        <div className="skill">
          <Image src={CDT} alt="" height={100} width={100} />
          <p>Chrome Dev Tools</p>
        </div>
        <div className="skill">
          <Image src={VSCode} alt="" height={100} width={100} />
          <p>VS Code</p>
        </div>

        <div className="skill">
          <Image src={PostMan} alt="" height={100} width={100} />
          <p>Postman</p>
        </div>
      </div>

      <h2 className="skill-title">Communication</h2>
      <div className="skills">
        <div className="skill">
          <Image src={Slack} alt="" height={100} width={100} />
          <p>Slack</p>
        </div>
        <div className="skill">
          <Image src={SkypeLogo} alt="" height={100} width={100} />
          <p>Skype</p>
        </div>
        <div className="skill">
          <Image src={GMeet} alt="" height={100} width={100} />
          <p>Google Meet</p>
        </div>
        <div className="skill">
          <Image src={Zoomlogo} alt="" height={100} width={100} />
          <p>Zoom</p>
        </div>
      </div>
      <h2 className="skill-title">Soft Skills</h2>
      <div className="skills">
        <p className="soft-skill">Remote Pair-Programming</p>
        <p className="soft-skill">Communication</p>
        <p className="soft-skill">Mentoring</p>
        <p className="soft-skill">Collaboration</p>
        <p className="soft-skill">Leadership</p>
        <p className="soft-skill">Problem Solving</p>
        <p className="soft-skill">Time Management</p>
        <p className="soft-skill">Decision Making</p>
        <p className="soft-skill">Critical Thinking</p>
      </div>
    </div>
    {/* <CustomSkill /> */}
  </section>
);

export default About;
