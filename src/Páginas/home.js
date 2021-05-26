import large1 from '../Recursos/large1.jpg'
import large2 from '../Recursos/large2.jpg'
import short1 from '../Recursos/short 1.jpg'
import large3 from '../Recursos/large3.jpg'

function home() {
  return (
    <div className='home scrollbar'>
      <section className='section1'>
        <h3>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
          harum ad recusandae dolor a qui nulla odio, numquam minus debitis
          magni quidem? Ullam aut aliquam minima aspernatur fugit quidem
          voluptas. Aspernatur amet quibusdam deserunt vitae quisquam, aliquam
          eveniet ab veritatis.
        </h3>
        <aside className='a'>
          <img src={short1} alt='' className='foto a1' />
        </aside>
      </section>
      <section className='section2'>
        <aside className='b'>
          <img src={large2} alt='' className='foto b2' />
        </aside>
        <h3>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
          harum ad recusandae dolor a qui nulla odio, numquam minus debitis
          magni quidem? Ullam aut aliquam minima aspernatur fugit quidem
          voluptas. Aspernatur amet quibusdam deserunt vitae quisquam, aliquam
          eveniet ab veritatis.
        </h3>
      </section>
      <section className='section3'>
        <h3>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
          harum ad recusandae dolor a qui nulla odio, numquam minus debitis
          magni quidem? Ullam aut aliquam minima aspernatur fugit quidem
          voluptas. Aspernatur amet quibusdam deserunt vitae quisquam, aliquam
          eveniet ab veritatis.
        </h3>
        <aside className='c'>
          <img src={large1} alt='' className='foto c3' />
        </aside>
      </section>
      <section className='section4'>
        <aside className='d'>
          <img src={large3} alt='' className='foto d4' />
        </aside>
        <h3>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
          harum ad recusandae dolor a qui nulla odio, numquam minus debitis
          magni quidem? Ullam aut aliquam minima aspernatur fugit quidem
          voluptas. Aspernatur amet quibusdam deserunt vitae quisquam, aliquam
          eveniet ab veritatis.
        </h3>
      </section>
    </div>
  )
}

export default home
