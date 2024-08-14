import React from 'react'
import { Hero } from '../Components/Hero'
import { MessageForm } from '../Components/MessageForm'
import { Departments } from '../Components/Departments'
import { Biography } from '../Components/Biography'
import heroImg from '../assets/hero.png'
import bioImg from '../assets/about.png'

export const Home = () => {
  return (
    <div>
        <Hero title={`Welcome to Shiv Shakti medical Institute`} imageUrl={heroImg} ></Hero>
        <Biography imageUrl={bioImg}></Biography>
        <Departments></Departments>
        <MessageForm></MessageForm>
    </div>
  )
}
