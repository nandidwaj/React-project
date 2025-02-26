import React from 'react'
import MultiplePizzas from '../assets/multiplePizzas.jpeg'
import '../styles/About.css'
function About() {
  return (
    <>
    <div className='about'>
        <div className='aboutTop' style={{backgroundImage: `url(${MultiplePizzas})`}}>
            
        </div>
        <div className='aboutBottom'>
        <h1>ABOUT US</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt velit libero quibusdam sequi inventore id iure, aliquid obcaecati eum nihil architecto molestias consequatur. Possimus placeat pariatur debitis modi voluptas, voluptate recusandae, obcaecati suscipit quos eveniet provident nam, eius id non rerum nemo necessitatibus error similique incidunt rem nisi quas assumenda laboriosam alias. Eos similique fugit, expedita libero nostrum reprehenderit quibusdam quo excepturi delectus voluptatum voluptate deleniti repellendus optio aliquid accusamus voluptas magnam quod. Magnam facilis repellat ex rerum sequi facere eius eveniet. Numquam iusto quae, adipisci nam corporis aliquam, accusamus enim distinctio ratione recusandae dolore. Incidunt aspernatur fugit sit alias.</p>
            
        </div>
    </div>
    </>
  )
}

export default About