import React from 'react'
import { Link } from 'react-router-dom'
import ourProducts from '../pages/Images/our products.png';
import ourTeam from '../pages/Images/our Team.jpeg';

export default function AboutUs() {
  return (
    <div className='container'>
      <div className='py-4'>
        <header>
         
        </header>

        <main>
          <p class="hometext">About us</p>
        </main>

<<<<<<< Updated upstream
      </div>
=======
      <div class="about-content">
        <div class="image-block">
          <img src={ourTeam} alt="Our Team"></img>
        </div>
        <div class="text-block">
          <h2>Our Mission</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a suscipit enim. Praesent ac arcu vel enim fermentum pretium. Nam lobortis gravida purus sed molestie. Suspendisse felis dolor, tincidunt in maximus id, vehicula et leo. Maecenas vitae ex viverra, elementum enim sit amet, blandit lectus. Mauris at vulputate sapien. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut varius venenatis metus, nec condimentum orci elementum vitae. Nulla varius dolor sit amet lacinia lacinia. Phasellus elementum scelerisque nulla, in fermentum sem iaculis non. Donec ac lectus felis. Donec tempus lacus ex, malesuada cursus massa consectetur condimentum. Etiam congue enim ac magna bibendum, eu elementum elit mollis. Nulla facilisi. Phasellus id euismod sapien, a aliquet risus. Donec rutrum orci id porta consequat. Sed nec leo sem. Proin bibendum risus ante, eu sodales lorem iaculis sit amet. Quisque fringilla elementum enim a fringilla. Integer turpis tellus, imperdiet ac facilisis eu, mollis sit amet nisl. Mauris elementum arcu eget quam pellentesque viverra. Quisque quis odio justo. Maecenas faucibus mauris vel eros placerat, ac dapibus libero dapibus. Morbi ultrices arcu quis risus finibus scelerisque.</p>
        </div>
      </div>

      <div class="about-content">
        <div class="text-block"> 
          <h2>Our Story</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a suscipit enim. Praesent ac arcu vel enim fermentum pretium. Nam lobortis gravida purus sed molestie. Suspendisse felis dolor, tincidunt in maximus id, vehicula et leo. Maecenas vitae ex viverra, elementum enim sit amet, blandit lectus. Mauris at vulputate sapien. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut varius venenatis metus, nec condimentum orci elementum vitae. Nulla varius dolor sit amet lacinia lacinia. Phasellus elementum scelerisque nulla, in fermentum sem iaculis non. Donec ac lectus felis. Donec tempus lacus ex, malesuada cursus massa consectetur condimentum. Etiam congue enim ac magna bibendum, eu elementum elit mollis. Nulla facilisi. Phasellus id euismod sapien, a aliquet risus. Donec rutrum orci id porta consequat. Sed nec leo sem. Proin bibendum risus ante, eu sodales lorem iaculis sit amet. Quisque fringilla elementum enim a fringilla. Integer turpis tellus, imperdiet ac facilisis eu, mollis sit amet nisl. Mauris elementum arcu eget quam pellentesque viverra. Quisque quis odio justo. Maecenas faucibus mauris vel eros placerat, ac dapibus libero dapibus. Morbi ultrices arcu quis risus finibus scelerisque.</p>
        </div>
        <div class="larger-image-block">
    <img src={ourProducts} alt="Our Products" class="larger-image-block"></img>
    </div>
      </div>


>>>>>>> Stashed changes
    </div>
  )
}