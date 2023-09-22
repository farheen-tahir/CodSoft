import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import heroBcg from '../assets/hero-bcg.jpeg'
import heroBcg2 from '../assets/hero-bcg-2.jpeg'

const Hero = () => {
  return <Wrapper className='section-center'>
    <article className="content">
      <h1 className='anim'>Design your <br />Comfort Zone</h1>
      <p className='anim'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure modi recusandae velit natus repudiandae, itaque voluptate temporibus praesentium magnam in!</p>
      <Link to="/products" className="btn hero-btn anim" > Shop Now</Link>
     
    </article>
    <article className="img-container">
      <img src={heroBcg} alt="pic1" className='main-img anim' />
      <img src={heroBcg2} alt="pic2" className='accent-img anim'/>
    </article>
    
  </Wrapper>
}

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
    animation-delay: 2s;
  }
  
.hero-btn{
  animation-delay:1s;
}
  .anim {
    opacity: 0;
    transform: translateY(30px);
    animation: moveup 0.5s linear forwards;
}
    @keyframes moveup {
    100% {
        opacity: 1;
        transform: translateY(0px);
    }
   }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    .img-container::before {
      content: '';
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-9);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
    
  }
`

export default Hero
