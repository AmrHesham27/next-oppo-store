import styles from './Figure.module.css'
import Image from 'next/image'

function Figure(props) {
    return (
        
                <Image width='100%' height='100%' src={props.img} alt='game'/>
     
    )
}

export default Figure
