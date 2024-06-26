import Head from "next/head";
import Avatar from '@mui/material/avatar';
// import Plus from "../_components/plus";
import Link from "next/link";
import NewspaperRoundedIcon from '@mui/icons-material/NewspaperRounded';
import Post3 from "../_components/post3";
import WhatCanYouDo from "../_components/whatcanyoudo";
import New from "../_components/new";
import Qa from "../_components/qa";
import Footer from "../_components/footer";
import styled from "@emotion/styled";
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import { SpaceBarTwoTone } from "@material-ui/icons";
import Ourfeatures from "../_components/ourfeatures";
import Newsroom from "../_components/newsroom";
import Newsletter from "../_components/newsletter";
import Code from "../_components/code";
import Usedby from "../_components/usedby";
import Design from "../_components/design";
import Navbar from "../_components/navbar";
import Codecarddata from "../_components/codecarddata";
import styles from "../_styles/Code.module.css"
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import BookRoundedIcon from "@mui/icons-material/BookRounded";
import ExploreRoundedIcon from "@mui/icons-material/ExploreRounded";
import QuickreplyRoundedIcon from "@mui/icons-material/QuickreplyRounded";
import JS from '../public/JS.svg';
import CSharp from '../public/CSharp.svg';
import CPlusPlus from '../public/CPlusPlus.svg';
import CSS from '../public/CSS.svg';
import HTML from '../public/HTML.svg';
import Java from '../public/Java.svg';
import SQL from '../public/SQL.svg';
import TS from '../public/TS.svg';
import Shell from '../public/Shell.svg';
import Explore from '../public/explore.svg';
import Python from '../public/Python.svg';
import FaceIcon from '@mui/icons-material/Face';
// import Cardbeta from './cardbeta';
import { ScrollView } from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function Home() {
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };
  return (
    <div className="dark:bg-black width-max height-max">
      <Head>
        <title>codnap</title>
        <meta
          name="description"
          content="codnap| codnap is the knowledge-sharing community Of Developers."
        />
        <link rel="icon" href="/codnapwhite.svg" />
      </Head>

      <Navbar />

      {/* <Code/> */}
{/* 

      <Stack direction="row" spacing="2" style={{ margin: '10rem' }} className="scroll">


        <Chip label="JavaScript" color="primary" icon={<img src="/JS.svg" height={26} width={26} alt=""></img>}
          style={{ backgroundColor: '#FFDF00', color: 'black' }} onClick={handleClick} size="medium" />
        <Chip label="HTML" color="primary" icon={<img src="/HTML.svg" height={26} width={26} alt="HTML"></img>}
          style={{ backgroundColor: 'white', color: '#FC490B' }} onClick={handleClick} size="medium" />
        <Chip label="CSS" color="primary" icon={<img src="/CSS.svg" height={26} width={26} alt="CSS"></img>}
          style={{ backgroundColor: 'white', color: '#2196F3' }} onClick={handleClick} size="medium" />
        <Chip label="SQL" color="primary" icon={<img src="/SQL.svg" height={26} width={26} alt="SQL"></img>}
          style={{ backgroundColor: 'white', color: '#2196F3' }} onClick={handleClick} size="medium" />
        <Chip label="Python" color="primary" icon={<img src="/Python.svg" height={26} width={26} alt="Python"></img>}
          style={{ backgroundColor: 'white', color: '#306998' }} onClick={handleClick} size="medium" />
        <Chip label="TypeScript" color="primary" icon={<img src="/TS.svg" height={26} width={26} alt="TypeScript"></img>}
          style={{ backgroundColor: 'white', color: '#3178C6' }} onClick={handleClick} size="medium" />
        <Chip label="Java" color="primary" icon={<img src="/Java.svg" height={26} width={26} alt="Java"></img>}
          style={{ backgroundColor: 'white', color: '#73A1FB' }} onClick={handleClick} size="medium" />

        <Chip label="" color="primary" icon={<img src="/CSharp.svg" height={26} width={26} alt="C#"></img>}
          style={{ backgroundColor: 'white', color: '#B14796' }} onClick={handleClick} size="medium" />
        <Chip label="Bash / Shell" color="primary" icon={<img src="/Shell.svg" height={26} width={26} alt="Bash / Shell"></img>}
          style={{ backgroundColor: 'white', color: '#3B82F6' }} onClick={handleClick} size="medium" />
        <Chip label="" color="primary" icon={<img src="/CPlusPlus.svg" height={26} width={26} alt="C#"></img>}
          style={{ backgroundColor: 'white', color: '#659AD2' }} onClick={handleClick} size="medium" />
      </Stack> */}




      {/* <Plus /> */}



    </div>
  );
}
