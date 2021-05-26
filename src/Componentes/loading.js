import anime from 'animejs/lib/anime.es.js'
import React, { useEffect, useRef } from 'react'

function Loading() {
  useEffect(() => {
    anime({
      targets: '#svg path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutQuad',
      duration: 3000,
    })

    setTimeout(() => {
      anime({
        targets: '#loader',
        duration: 1000,
        easing: 'easeInOutQuad',
        height: '0vh',
      })
      anime({
        targets: '#svg',
        scale: '0',
        duration: 1000,
        easing: 'easeInOutQuad',
      })
    }, 3000)
  }, [])

  return (
    <div className='cargando' id='loader'>
      <svg className='svg' viewBox='0 0 780.147 414.291' id='svg'>
        <g
          id='Grupo_1'
          data-name='Grupo 1'
          transform='translate(-572.432 -351.972)'
        >
          <path
            id='Trazado_1'
            data-name='Trazado 1'
            d='M664.02,759.069,636.3,645.538V586.133l21.122-55.445,91.088,228.381h54.125L773.59,662.7V586.133l29.043-55.445,18.482-19.8V385.475l-18.482-29.043H748.508v38.283l10.561,40.924v40.924l-15.841,34.323v56.765l-22.442-21.122V487.124L704.944,444.88l-26.4-43.564L664.02,377.554l-17.162-21.122H601.975V510.886l-7.921,19.8V554.45l-14.521,31.683-6.6,30.363v64.686l6.6,23.762,14.521,23.762,7.921,23.762v6.6Z'
            stroke='red'
            stroke-width='3'
            fill-opacity='0.4'
          />
          <path
            id='Trazado_2'
            data-name='Trazado 2'
            d='M850.157,759.069h80.527l-10.561-33-15.841-26.4v-33L896.361,629.7v-33l7.921-21.122h69.966v14.521l-9.241,21.122V636.3l-7.921,30.363,7.921,22.442,9.241,10.561,7.921,26.4,9.241,15.841,10.561,17.162h85.808l-7.921-17.162-15.841-27.722L1056.1,689.1V666.66l-5.281-21.122V617.816l5.281-21.122,7.921-21.122,15.841-23.762,7.921-31.683,6.6-30.363v-19.8l6.6-34.323V411.877l-6.6-25.082-6.6-22.442H1056.1l-25.082-5.28h-29.043v52.8l13.2,9.241V479.2l-13.2,25.082L991.41,514.847v5.281H920.123l10.561-15.841,6.6-14.521,6.6-26.4V381.515l-13.2-17.162-10.561-5.28H850.157V393.4l10.561,18.482v58.085l-10.561,25.082-11.881,25.082-9.241,18.482-15.841,36.963V656.1l7.921,25.082,7.921,18.482,9.241,14.521Z'
            stroke='white'
            stroke-width='3'
          />
          <path
            id='Trazado_3'
            data-name='Trazado 3'
            d='M1116.821,759.069l-14.521-46.2-7.921-38.283-9.241-42.244V590.093l17.161-30.363,22.442-46.2,9.241-35.643,5.281-33V409.237l-14.521-25.082V352.472h66.006l17.162,10.561,9.241,21.122v25.082l6.6,35.643v33l-15.841,25.082-10.561,23.762,19.8-13.2,15.841-23.762,17.161-29.043,11.881-23.762,10.561-27.723v-46.2l40.924-10.561h33v56.765L1338.6,436.96l-18.482,30.363-6.6,22.442-17.161,13.2L1272.6,526.728l-10.561,25.082-11.881,19.8,5.281,26.4,6.6,22.442,22.442,31.683,11.881,22.442,17.161,30.363,25.082,25.082,13.2,29.043h-55.445l-23.762,6.6-17.161-35.643-22.442-25.082-15.841-30.363-9.241-30.363-10.561-23.762-6.6-30.363V571.612h-11.881l-9.241,11.881-6.6,29.043v31.683l6.6,40.924,21.122,19.8,6.6,33,10.561,21.122Z'
            stroke='blue'
            stroke-width='3'
          />
        </g>
      </svg>
    </div>
  )
}

export default Loading
